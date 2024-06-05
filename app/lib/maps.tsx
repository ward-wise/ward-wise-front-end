"use server";

import prisma from "./client";

import { gpsCoordinates } from "./definitions";
import type { GeoJsonObject } from 'geojson';
/** Query the Census geocoder API to get location data. */
export async function getAddressGeocodeData(
    address: string
): Promise<gpsCoordinates> {
    const apiUrl = new URL("https://geocoding.geo.census.gov/geocoder/locations/address");
    apiUrl.searchParams.append("street", address);
    apiUrl.searchParams.append("city", "Chicago");
    apiUrl.searchParams.append("state", "IL");
    apiUrl.searchParams.append("benchmark", "Public_AR_Current");
    apiUrl.searchParams.append("format", "json");

    const response = await fetch(apiUrl, { method: "GET" });

    if (response.status != 200)
        throw new Error("Could not reach geocoder service");

    const responseJSON = await response.json();
    const data = responseJSON.result;

    if (data.addressMatches.length == 0)
        throw new Error("No address match found")

    let coords: gpsCoordinates = {
        longitude: data.addressMatches[0].coordinates.x,
        latitude: data.addressMatches[0].coordinates.y,
    };

    return coords;
}


export async function getProjectDataFromCoordinates(latitude: number, longitude: number) {

    try {
        const mileInMeters = 1609.34;

        // TODO: update query once database geodata schema has been defined
        const projects: any = await prisma.$queryRaw`
      SELECT id, ward, type as item, location, est_cost as cost, year, type as category, ST_AsGeoJSON(wkb_geometry) as geometry
      FROM public.ward_spending_item_geodata
      WHERE ST_DWithin(
        ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
        ST_SetSRID(ST_GeomFromWKB(wkb_geometry), 4326)::geography,
        ${mileInMeters}
      );
    `;

        const geoJSON = projects.map((project: any) => ({
            type: 'Feature',
            geometry: JSON.parse(project.geometry),
            properties: {
                // ogc_fid: project.ogc_fid,
                ward: project.ward,
                item: project.item,
                location: project.location,
                cost: project.cost,
                year: project.year,
                category: project.category,
            },
        }));

        // const geoJSON = {
        //   type: 'FeatureCollection',
        //   features: features,
        // };

        return geoJSON;
    } catch (error) {
        console.error(error);
    }
}

export async function getProjectCenterCoordinates(
    projectId: string,
): Promise<[number, number]> {
    // TODO implement database integration
    return [41.926147409700846, -87.68776398241353];
}