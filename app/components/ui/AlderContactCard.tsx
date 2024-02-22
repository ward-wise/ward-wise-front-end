/* eslint-disable @next/next/no-img-element */

import { Phone, Envelope, LocationDot, Globe, FacebookLogo, XLogo, InstagramLogo } from "./SVGIcons";

interface wardInfoInterface {
  wardInfo: {
    ward: number;
    alderperson: string;
    address: string | null;
    email: string;
    phone: string;
    websites: {
      website?: string;
      facebook?: string;
      x?: string;
      instagram?: string;
    } | null;
  };
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
          <p><Phone /> {phone}</p>
          <p><Envelope /> {email}</p>
          <p><LocationDot /> {address}</p>
        </div>
        <div className="flex flex-col">
          {websites &&
            Object.keys(websites).map((site) => (
              <a
                href={websites[site]}
                key={site}
                target="_blank"
                rel="noopener noreferrer"
              >
                {webIcons[site]}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
