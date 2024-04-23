"use server";

import { gpsCoordinates } from "./definitions";
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

console.log(apiUrl);
const response = await fetch(apiUrl, {method: "GET"});

if (response.status != 200)
    throw new Error("Could not reach geocoder service");

const responseJSON = await response.json();
const data = responseJSON.result;

if (data.addressMatches.length == 0)
    throw new Error("No address match found")

let coords: gpsCoordinates = {
    latitude: data.addressMatches[0].coordinates.x,
    longitude: data.addressMatches[0].coordinates.y
};

return coords;
}
