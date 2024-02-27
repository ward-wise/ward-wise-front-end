"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { WardGeoLookupData } from "@/app/lib/definitions";

/** WardSearch:
 * A searchbar for looking up a ward's information from an address.
 * Calls the Chicago Data Portal ward lookup on form submission,
 * and updates URL path with ?ward=[ward number] on successful lookup.
 * Displays errors on failed lookup.
 */
export default function WardSearch() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [responseError, setResponseError] = useState<null | string>(null);

  /** getWardInfo: query the Chicago Data Portal API for ward info from an address */
  async function getWardGeoLookupData(
    address: string
  ): Promise<WardGeoLookupData> {
    const apiURL =
      "https://api.chicago.gov/els/forwardgeocoding/rest/geocode_3";

    const requestBody = {
      ForwardGeocodeServiceInput3: {
        systemId: "WARD_LOOKUP",
        offsetFt: "20",
        fullAddress: address,
        getGeos: { geographyName: "WARDS_2023" },
      },
    };

    const headers = {
      Authorization: "Basic ZWxzX2NsaWVudF93YXJkZ2VvOnR2S0xANFM2N2Fw",
      "Content-Type": "application/json",
    };

    const response = await fetch(apiURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(requestBody),
    });

    if (response.status != 200) {
      throw new Error("Could not reach Ward lookup service");
    }
    const responseJSON = await response.json();
    const data = responseJSON.ForwardGeocodeServiceOutput3;

    if (data.cleansingStatus != "ACTUAL") {
      if (!data.cleansingStatusDescription) {
        throw new Error("Invalid address");
      }
      if (data.cleansingStatusDescription === "BADSTREET") {
        throw new Error("Invalid street");
      }
      if (data.cleansingStatusDescription === "BADADDRESSNUM") {
        throw new Error("Invalid address number");
      }
    }
    return data;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      address: { value: string };
    };

    try {
      const wardData = await getWardGeoLookupData(target.address.value);
      const params = new URLSearchParams(searchParams);
      //set the current path to path...?ward=[ward number]
      params.set("ward", wardData.geoValues[0].geographyValue);
      replace(`${pathname}?${params.toString()}`);
      setResponseError(null);
    } catch (error) {
      setResponseError((error as Error).message);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="address" className="block">
          Find My Ward
        </label>
        <input
          id="address"
          name="address"
          placeholder="Enter Address"
          className="border-2 border-black rounded-md"
        />
        <button className="ml-4 border border-black rounded-md">Search</button>
      </form>
      {responseError && <p>{responseError}</p>}
    </>
  );
}
