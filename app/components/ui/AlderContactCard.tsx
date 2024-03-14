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
} from "./SVGIcons";


/** AlderContactCard:
 * card listing contact information with alderperson's photo.
 */
export default async function AlderContactCard({ wardNumber }: {wardNumber: number}) {
  const { ward, alderperson, address, email, phone, websites } = await getWardContactInfo(wardNumber);

  const webIcons = {
    website: <Globe />,
    facebook: <FacebookLogo />,
    x: <XLogo />,
    instagram: <InstagramLogo />,
  };

  return (
    <div className="p-2 rounded-md border-solid border-2 border-black w-3/4">
      <h2 className="text-center">{alderperson}</h2>
      <div className="flex gap-x-2 mt-2">
        {/* It's OK to leave this an `img` because it's just a statically-sized avatar,
            regardless of platform */}
        <img
          src={`../../../alderpeople/ward_${ward}.png`}
          alt={alderperson}
          width={100}
          height={100}
        />
        <div className="grow ">
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
            <a href={address?`https://maps.google.com/?q=${encodeURIComponent(address)}`:''}>
              <LocationDot /> {address}
            </a>
          </p>
        </div>
        <div className="flex flex-col">
          {websites &&
            Object.keys(websites).map((site) => (
              <a
                href={websites[site as keyof WebsiteType]}
                key={site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {webIcons[site as keyof WebsiteType]}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
