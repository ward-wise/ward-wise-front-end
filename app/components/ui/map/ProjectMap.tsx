'use client'
import { Ref, useEffect, useRef, useState } from 'react'
import ProjectCard from './ProjectCard'
import AddressSearchBar from './AddressSearchBar'
import MapFilter from './MapFilter'
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

// SSR must be disabled explicity or webpack throws a reference error (non-breaking)
// import dynamic from "next/dynamic";
// const Map = dynamic(() => import("./ProjectMap"), {
//   ssr: false,
// });

export default function ProjectMap({
    geoJSON,
    latitude,
    longitude,
}: {
    geoJSON: any;
    latitude: number; 
    longitude: number;
}) {
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [map, setMap] = useState<any>(null);

    const geoJsonLayer: any = useRef(null);
    useEffect(() => {
        if (geoJsonLayer.current) {
            geoJsonLayer.current.clearLayers().addData(geoJSON);
        }
    }, [geoJSON]);


    function onEachFeature(feature: any, layer: any) {
        if (feature.properties) {
            // bind the tooltip only if it's a desktop viewport
            const isDesktop = window.innerWidth > 768;
            if (isDesktop) {
                const { item, year, cost, ward } = feature.properties;
                let formattedCost = new Intl.NumberFormat("en-US").format(
                    Math.round(cost)
                );
                layer.bindTooltip(
                    `${item}<br>Ward ${ward} - ${year}<br>$${formattedCost}`,
                    {
                        sticky: true,
                    }
                );
            }

            layer.on({
                click: () => {
                    setSelectedFeature(feature.properties);
                },
            });
        }
    }

  return (
    <>
      <AddressSearchBar map={map} />
      <MapFilter />
      <div className="w-full h-full z-0">
        <MapContainer
          center={[latitude, longitude]}
          zoom={16}
          zoomControl={false}
          style={{ height: '100%', width: '100%', zIndex: 0 }}
          ref={setMap}
        >
          <TileLayer
            attribution='&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>'
            url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
          />
          <GeoJSON
            ref={geoJsonLayer}
            data={geoJSON}
            onEachFeature={onEachFeature}
          />
        </MapContainer>
      </div>
      {selectedFeature && <ProjectCard project={selectedFeature} />}
    </>
  )
}
