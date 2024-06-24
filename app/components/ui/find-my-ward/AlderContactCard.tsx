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
  YouTubeLogo,
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
    youtube: <YouTubeLogo />,
  };

  return (
    <div className="border-1 border-gray-400 p-6 w-full rounded-md shadow-lg lg:w-2/3 md:grid md:grid-cols-2">
      <div>
        <h1 className="text-center font-bold text-xl">Ward {ward}</h1>
        <h2 className="text-center italic">{alderperson}</h2>
        {/* It's OK to leave this an `img` because it's just a statically-sized avatar,
            regardless of platform */}
        <div className="w-full my-8 flex justify-center">
          <img
            src={`../../../images/alderpeople/ward_${ward}.png`}
            alt={alderperson}
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="mt-2">
        <div className="flex flex-col gap-y-4 mt-2">
          <div>
            <a className='flex items-center my-1' href={`tel:${phone}`}>
              <Phone />
              <p className='pl-4'>
                {phone}
              </p>
            </a>
          </div>
          <div>
            <a className='flex items-center my-1' href={`mailto:${email}`}>
              <Envelope />
              <p className='pl-4'>
                {email}
              </p>
            </a>
          </div>
          <div>
            <a className='flex items-center my-1'
              href={
                address
                  ? `https://maps.google.com/?q=${encodeURIComponent(address)}`
                  : ""
              }
            >
              <LocationDot />
              <p className='pl-4'>
                {address}
              </p>
            </a>
          </div>
        </div>
        <div className="flex gap-2 mt-10 mb-4 item-center justify-evenly">
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
