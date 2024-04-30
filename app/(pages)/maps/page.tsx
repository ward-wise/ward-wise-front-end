import dynamic from "next/dynamic";
import { Metadata } from "next"
import { getProjectCenterCoordinates, getProjectDataFromCoordinates } from "@/app/lib/maps";

export const metadata: Metadata = {
  title: 'Map',
};

// SSR must be disabled explicity or webpack throws a reference error (non-breaking)
const ProjectMap = dynamic(() => import("@/app/components/ui/map/ProjectMap"), {
  ssr: false,
});

export default async function Maps({
  searchParams,
}: {
    searchParams?: { lat?: string; long?: string, projectId?: string };
}) {

  const defaultCoords = [41.91946055, -87.69612918];
  let [lat, long] = defaultCoords;
  if (searchParams?.projectId) {
    [lat, long] = await getProjectCenterCoordinates(searchParams.projectId);
  }
  else if (searchParams?.lat && searchParams?.long) {
    [lat, long] = [+searchParams.lat, +searchParams.long];
  }
  let projectGeoData = await getProjectDataFromCoordinates(lat, long);


  return (
    <main className="flex flex-col items-center justify-between h-full">
      <div className="w-full items-center justify-between text-sm h-full">
        <ProjectMap latitude={lat} longitude={long} geoJSON={projectGeoData} />
      </div>
    </main>
  );
}
