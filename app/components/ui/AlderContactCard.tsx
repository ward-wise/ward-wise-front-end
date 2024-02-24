/* eslint-disable @next/next/no-img-element */

import {
  Phone,
  Envelope,
  LocationDot,
  Globe,
  FacebookLogo,
  XLogo,
  InstagramLogo,
} from "./SVGIcons";

export type WebsiteType = {
  website?: string;
  facebook?: string;
  x?: string;
  instagram?: string;
};

export type wardInfo = {
  ward: number;
  alderperson: string;
  address: string | null;
  email: string;
  phone: string;
  websites: WebsiteType | null;
};

export interface wardInfoInterface {
  wardInfo: wardInfo;
}

/** AlderContactCard:
 * card listing contact information with alderperson's photo.
 */
export default function AlderContactCard({ wardInfo }: wardInfoInterface) {
  const { ward, alderperson, address, email, phone, websites } = wardInfo;

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
