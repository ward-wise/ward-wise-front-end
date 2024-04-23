"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { getAddressGeocodeData } from "@/app/lib/maps";

/** GeoCoordinateSearch:
 * A search bar for looking up GPS coordinates from an address.
 * Calls the Census Geocoder on form submission,
 * and updates URL path with ?lat=&long= on successful lookup.
 * Displays errors on failed lookup.
 */
export default function GeoCoordinateSearch() {
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
      console.log("Got coordinates:", coords)
      const params = new URLSearchParams(searchParams);
      params.set("lat", coords.latitude.toString());
      params.set("long", coords.longitude.toString());
      console.log("setting params:", params)
      replace(`${pathname}?${params.toString()}`);
      setResponseError(null);
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
          placeholder="Enter Address"
          className="border-1 border-gray-400 p-3 w-3/4 rounded-md shadow-lg"
        />
        <button className="ml-4 p-3 shadow-lg bg-sky-500 text-white font-bold rounded-md text-center">
          Search
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
