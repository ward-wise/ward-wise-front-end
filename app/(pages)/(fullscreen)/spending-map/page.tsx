import dynamic from "next/dynamic";
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Spending Map',
};

const testGeoJson: any = {
  "type": "FeatureCollection",
  "features": [
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu (1-1)", "location": "W FULLERTON AVE & N WESTERN AVE & N ARTESIAN AVE & W ALTGELD ST; 2440 N WESTERN AVE", "cost": "26096.08", "year": "2019", "category": "Alleys" }, "geometry": { "type": "GeometryCollection", "geometries": [{ "type": "Polygon", "coordinates": [[[-87.688929877999129, 41.926706074687552], [-87.687641912635428, 41.924900682421431], [-87.68886603706656, 41.924889374515459], [-87.688929877999129, 41.926706074687552]]] }, { "type": "Point", "coordinates": [-87.68801439, 41.92611812] }] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu (1-1)", "location": "W OHIO ST & N DAMEN AVE & W RACE AVE & N WOLCOTT AVE", "cost": "17652.5", "year": "2019", "category": "Alleys" }, "geometry": { "type": "Polygon", "coordinates": [[[-87.676928859592266, 41.89154768661308], [-87.67448582206319, 41.891585332570408], [-87.67450634808057, 41.892309377040114], [-87.676948428140847, 41.892269651943622], [-87.676928859592266, 41.89154768661308]]] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "1400 N CAMPBELL AVE; N CAMPBELL AVE & W LE MOYNE ST & W HIRSCH ST & N MAPLEWOOD AVE", "cost": "42062.5", "year": "2019", "category": "Alleys" }, "geometry": { "type": "GeometryCollection", "geometries": [{ "type": "Point", "coordinates": [-87.68934352, 41.9067768] }, { "type": "Polygon", "coordinates": [[[-87.690812149870368, 41.906630310515965], [-87.689583814177197, 41.90664396706363], [-87.689629805942275, 41.908466950649292], [-87.690857680936816, 41.908454655791608], [-87.690812149870368, 41.906630310515965]]] }] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "2426 W NORTH AVE; W NORTH AVE & N ARTESIAN AVE & N WESTERN AVE & W WABANSIA AVE", "cost": "49754.75", "year": "2019", "category": "Alleys" }, "geometry": { "type": "GeometryCollection", "geometries": [{ "type": "Point", "coordinates": [-87.68824964596283, 41.910318611070224] }, { "type": "Polygon", "coordinates": [[[-87.688442519456046, 41.910305751322412], [-87.687220697060468, 41.91032086582117], [-87.688483450202583, 41.912123357243388], [-87.688442519456046, 41.910305751322412]]] }] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "2726 W CHANAY ST; W CHANAY ST & N POINT ST", "cost": "11142.29", "year": "2019", "category": "Alleys" }, "geometry": { "type": "MultiPoint", "coordinates": [[-87.69612918, 41.91946055], [-87.696370913414881, 41.918984740546549]] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "2727 W CHANAY ST; W JULIA CT & N STAVE ST & N STAVE ST & W ST HELEN ST", "cost": "17897.62", "year": "2019", "category": "Alleys" }, "geometry": { "type": "GeometryCollection", "geometries": [{ "type": "Point", "coordinates": [-87.69578871, 41.91924259] }, { "type": "Polygon", "coordinates": [[[-87.694706631688888, 41.919618060342216], [-87.694706631688888, 41.919618060342216], [-87.695490863370779, 41.92009572191764], [-87.695490863370779, 41.92009572191764], [-87.694706631688888, 41.919618060342216]]] }] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "3221 W ARMITAGE AVE; W ARMITAGE AVE & N KEDZIE AVE & N SAWYER AVE & W CORTLAND ST", "cost": "52544.93", "year": "2019", "category": "Alleys" }, "geometry": { "type": "GeometryCollection", "geometries": [{ "type": "Polygon", "coordinates": [[[-87.706967438712937, 41.91740169931623], [-87.706915735180203, 41.915578568786195], [-87.708610928396965, 41.915562608025169], [-87.706967438712937, 41.91740169931623]]] }, { "type": "Point", "coordinates": [-87.7079369, 41.91718404] }] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "N ARTESIAN AVE & W WABANSIA AVE & W NORTH AVE & N CAMPBELL AVE; 1614 N ARTESIAN AVE", "cost": "57355.82", "year": "2019", "category": "Alleys" }, "geometry": { "type": "Polygon", "coordinates": [[[-87.689708802129701, 41.912113175861144], [-87.688483450202583, 41.912123357243388], [-87.688442519456046, 41.910305751322412], [-87.689667093060308, 41.91029414143199], [-87.689708802129701, 41.912113175861144]]] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "N ROCKWELL ST & W CORTLAND ST & N TALMAN AVE & W BLOOMINGDALE AVE", "cost": "70987.02", "year": "2019", "category": "Alleys" }, "geometry": { "type": "Polygon", "coordinates": [[[-87.693474985458082, 41.915705076385386], [-87.693425728729764, 41.913940157715743], [-87.692203391836841, 41.913949893905006], [-87.692250365512422, 41.915717536300775], [-87.693474985458082, 41.915705076385386]]] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "N WHIPPLE ST & W BLOOMINGDALE AVE & N HUMBOLDT BLVD W & W CORTLAND ST", "cost": "30312.28", "year": "2019", "category": "Alleys" }, "geometry": null },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Resurfacing Menu", "location": "W CORTEZ ST & N CALIFORNIA AVE & N WASHTENAW AVE & W THOMAS ST; 2700 W CORTEZ ST", "cost": "54835.03", "year": "2019", "category": "Alleys" }, "geometry": { "type": "Polygon", "coordinates": [[[-87.696836068736516, 41.90110719172705], [-87.694370000548815, 41.90112907683524], [-87.694348833276436, 41.900219323180764], [-87.696836068736516, 41.90110719172705]]] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Speed Hump Replacement", "location": "1400 N CAMPBELL AVE; N CAMPBELL AVE & W LE MOYNE ST & W HIRSCH ST & N MAPLEWOOD AVE", "cost": "0", "year": "2019", "category": "Alleys" }, "geometry": { "type": "GeometryCollection", "geometries": [{ "type": "Point", "coordinates": [-87.68934352, 41.9067768] }, { "type": "Polygon", "coordinates": [[[-87.690812149870368, 41.906630310515965], [-87.689583814177197, 41.90664396706363], [-87.689629805942275, 41.908466950649292], [-87.690857680936816, 41.908454655791608], [-87.690812149870368, 41.906630310515965]]] }] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Speed Hump Replacement", "location": "3221 W ARMITAGE AVE; W ARMITAGE AVE & N KEDZIE AVE & N SAWYER AVE & W CORTLAND ST", "cost": "0", "year": "2019", "category": "Alleys" }, "geometry": { "type": "GeometryCollection", "geometries": [{ "type": "Polygon", "coordinates": [[[-87.706967438712937, 41.91740169931623], [-87.706915735180203, 41.915578568786195], [-87.708610928396965, 41.915562608025169], [-87.706967438712937, 41.91740169931623]]] }, { "type": "Point", "coordinates": [-87.7079369, 41.91718404] }] } },
    { "type": "Feature", "properties": { "ward": "1", "item": "Alley Speed Hump Replacement", "location": "N ARTESIAN AVE & W WABANSIA AVE & W NORTH AVE & N CAMPBELL AVE; 1614 N ARTESIAN AVE", "cost": "0", "year": "2019", "category": "Alleys" }, "geometry": { "type": "Polygon", "coordinates": [[[-87.689708802129701, 41.912113175861144], [-87.688483450202583, 41.912123357243388], [-87.688442519456046, 41.910305751322412], [-87.689667093060308, 41.91029414143199], [-87.689708802129701, 41.912113175861144]]] } }
  ]
};

// SSR must be disabled explicity or webpack throws a reference error (non-breaking)
const ProjectMap = dynamic(() => import("@/app/components/ui/map/ProjectMap"), {
  ssr: false,
});

export default function Maps({
  searchParams,
}: {
    searchParams?: { lat?: string; long?: string };
}) {
  return (
    <main className="flex flex-col items-center justify-between h-full">
      <div className="w-full items-center justify-between text-sm h-full">
        <ProjectMap geoJSON={testGeoJson} latitude={searchParams?.lat} longitude={searchParams?.long} />
      </div>
    </main>
  );
}
