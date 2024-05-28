/* eslint-disable @next/next/no-img-element */

import React from "react";
import { WebsiteType } from "@/app/lib/definitions";
import { getWardContactInfo } from "@/app/lib/data";
import {
  Phone,
  Envelope,
  LocationDot,
  Globe,
  FacebookLogo,
  XLogo,
  InstagramLogo,
} from "../SVGIcons";

/** AlderContactCard:
 * card listing contact information with alderperson's photo.
 */
export default async function AlderContactCard({
  wardNumber,
}: {
  wardNumber: number;
}) {
  let wardContactData;
  try {
    wardContactData = await getWardContactInfo(wardNumber);
  } catch (e) {
    return (
      <p>
        Could not fetch Alder Contact Data from database. Try again in a moment.
      </p>
    );
  }

  const { ward, alderperson, address, email, phone, websites } =
    wardContactData;

  const webIcons = {
    website: <Globe />,
    facebook: <FacebookLogo />,
    x: <XLogo />,
    instagram: <InstagramLogo />,
  };

  return (
    <div className="p-2 border-1 border-gray-400 p-3 w-3/4 rounded-md shadow-lg lg:w-2/3">
      <h2 className="text-center">{alderperson}</h2>
      <div className="md:flex md:gap-x-2 md:justify-between mt-2">
        {/* It's OK to leave this an `img` because it's just a statically-sized avatar,
            regardless of platform */}
        <img
          src={`../../../images/alderpeople/ward_${ward}.png`}
          alt={alderperson}
          width={100}
          height={100}
        />
        <div className="flex flex-col gap-y-2 mt-2">
          <p>
            <a href={`tel:${phone}`}>
              <Phone /> {phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${email}`}>
              <Envelope /> {email}
            </a>
          </p>
          <p>
            <a
              href={
                address
                  ? `https://maps.google.com/?q=${encodeURIComponent(address)}`
                  : ""
              }
            >
              <LocationDot /> {address}
            </a>
          </p>
        </div>
        <div className="flex gap-2 md:flex-col items-center">
          {websites &&
            Object.keys(websites).map((site) => (
              <a
                href={websites[site as keyof WebsiteType]}
                key={site}
                target="_blank"
                rel="noopener noreferrer"
                className="w-6"
              >
                {webIcons[site as keyof WebsiteType]}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
