"use client";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function ProjectMap({ geoJSON, onEachFeature, center, zoomLevel }: { geoJSON: any, onEachFeature: any, center: [number, number], zoomLevel: number }) {
    return (
        <MapContainer
            center={center}
            zoom={zoomLevel}
            zoomControl={false}
            style={{ height: "100%", width: "100%", zIndex: 0 }}
        >
            <TileLayer
                attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            <GeoJSON
                data={geoJSON}
                onEachFeature={onEachFeature}
            />
        </MapContainer>
    );
}