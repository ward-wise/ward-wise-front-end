"use client";

import { FormEvent, useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function WardSearch() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const [responseError, setResponseError] = useState<null | string>(null);

    /** getWardInfo: query the Chicago Data Portal API for ward info from an address */
    async function getWardInfo (address: string) {

        const apiURL = "https://api.chicago.gov/els/forwardgeocoding/rest/geocode_3";

        const requestBody = {
        "ForwardGeocodeServiceInput3": {
        "systemId": "WARD_LOOKUP",
        "offsetFt": "20",
        "fullAddress": address,
        "getGeos": {"geographyName": "WARDS_2023"},
        }
    };

    const headers = {
        "Authorization": "Basic ZWxzX2NsaWVudF93YXJkZ2VvOnR2S0xANFM2N2Fw",
        "Content-Type": "application/json"
    };

    const response = await fetch(apiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(requestBody),
    })

    if (response.status != 200) {
        setResponseError("Could not reach Ward lookup service");
        return null;
    }
    const data = await response.json();
    //TODO: remove log
    console.log(data);

    //TODO: Handle Error-checking per block below

    return data;

  /*

  // Check if the request was successful
  if (response.statusCode != 200) {
    throw Exception("Failed to make request");
  }

  final data = jsonDecode(response.body)["ForwardGeocodeServiceOutput3"];

  // Handle the response data containing geolocation information
  if (data["cleansingStatus"] != "ACTUAL") {
    if (!data.containsKey("cleansingStatusDescription")) {
      throw Exception("Invalid address");
    }
    if (data["cleansingStatusDescription"] == "BADSTREET") {
      throw Exception("Invalid street");
    }
    if (data["cleansingStatusDescription"] == "BADADDRESSNUM") {
      throw Exception("Invalid address number");
    }
  }

  final wardNumberText = data["geoValues"][0]["geographyValue"];
  try {
    return int.parse(wardNumberText);
  } catch (e) {
    throw Exception(
        "Invalid ward number, expected integer, got $wardNumberText");
  }
        */
    }

    async function handleSubmit(e: FormEvent) {
        e.preventDefault();
       const target = e.target as typeof e.target & {
         address: { value: string };
       };
        const wardData = await getWardInfo(target.address.value);
        const params = new URLSearchParams(searchParams);
        //TODO: error handling in here? (catch here?) do the params set or delete, per tutorial example
        params.set("ward", wardData.ForwardGeocodeServiceOutput3.geoValues[0].geographyValue);
        replace(`${pathname}?${params.toString()}`);
    }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="address">Find My Ward</label>
      <input
        id="address"
        name="address"
        placeholder="Enter Address"
        className="border-2 border-black rounded-md"
      />
      <button>Search</button>
    </form>
  );
}
