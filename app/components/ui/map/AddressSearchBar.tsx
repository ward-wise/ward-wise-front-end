"use client";

import { FormEvent, useCallback, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { getAddressGeocodeData } from "@/app/lib/maps";
import { SearchIcon } from "../SVGIcons";

/** GeoCoordinateSearch:
 * A search bar for looking up GPS coordinates from an address.
 * Calls the Census Geocoder on form submission,
 * and updates URL path with ?lat=&long= on successful lookup.
 * Displays errors on failed lookup.
 */
export default function GeoCoordinateSearch({map}: {map?: any}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [responseError, setResponseError] = useState<null | string>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      address: { value: string };
    };

    try {
      const coords = await getAddressGeocodeData(target.address.value);
      const params = new URLSearchParams(searchParams);
      params.set("lat", coords.latitude.toString());
      params.set("long", coords.longitude.toString());
      replace(`${pathname}?${params.toString()}`);
      setResponseError(null);

      if(map)
        map.setView([coords.latitude, coords.longitude], 16);

    } catch (error) {
      replace(`${pathname}`);
      setResponseError((error as Error).message);
    }
  }

  return (
    <div className="absolute flex flex-col w-full px-4 py-6 z-10 md:px-0 md:left-10 md:w-1/4">
      <form onSubmit={handleSubmit} className="w-full flex">
        <input
          id="address"
          name="address"
          type="search"
          placeholder="Search Address"
          className="border-1 border-gray-400 p-3 flex-grow focus:outline-none rounded-md shadow-lg"
        />
        <button className="ml-4 p-3 shadow-lg bg-sky-500 fill-white rounded-md">
          <SearchIcon/>
        </button>
      </form>
      {responseError && (
        <p className="bg-white font-bold text-red-600 p-3 my-4 mx-8 text-center rounded-md shadow-lg">
          {responseError}
        </p>
      )}
    </div>
  );
}
