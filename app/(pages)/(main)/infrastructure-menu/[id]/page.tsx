/* eslint-disable @next/next/no-img-element */

import MenuItemCard from "@/app/components/ui/menu-items/MenuItemCard";
import { MenuItem } from "@/app/lib/definitions";
import { promises as fs } from "fs";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import Link from "next/link";

export async function generateMetadata(
  { params }: { params: { id: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const file = await fs.readFile(
    process.cwd() + "/public/menuItemsInfo.json",
    "utf8"
  );
  const menuItemList = JSON.parse(file);
  const item: MenuItem = menuItemList.find(
    (item: MenuItem) => item.id === params.id
  );

  return {
    title: item.name,
  };
}

export async function generateStaticParams() {
  const file = await fs.readFile(
    process.cwd() + "/public/menuItemsInfo.json",
    "utf8"
  );
  const menuItems = JSON.parse(file);

  return menuItems.map((item: MenuItem) => ({
    id: item.id,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const file = await fs.readFile(
    process.cwd() + "/public/menuItemsInfo.json",
    "utf8"
  );
  const menuItemList = JSON.parse(file);
  const item: MenuItem = menuItemList.find(
    (item: MenuItem) => item.id === params.id
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 px-6 md:px-32">
      <div className="flex flex-col z-10 max-w-5xl w-full mb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="flex w-full pb-8 justify-center">
            {/* Consider using next <Image /> component here,
            based on our eventual hosting solution*/}
            <img
              src={`/images/menu-items/${item.imgFilename}`}
              alt={item.name}
              className="object-contain lg:object-cover"
            />
          </div>

          <div>
            <div className="flex mb-8">
              <div className="flex-col">
                <h1 className="text-2xl font-bold mt-2 mb-2">{item.name}</h1>
                <p className="text-gray-500 text-xl mt-2">
                  ${item.avgUnitCost.toLocaleString()} per{" "}
                  {item.unitMeasurement}
                </p>
              </div>
              {item.isVisionZeroProject && (
                <Link href="/faqs#vision-zero" className="ml-auto pt-4 pl-2 w-1/4">
                  <Image
                    src={`/images/vision_zero_logo.png`}
                    alt="Vision Zero Logo"
                    height={100}
                    width={100}
                    className="ml-auto"
                  />
                </Link>
              )}
            </div>
            <div>
              <div>{item.description}</div>
              {item.notes.length && (
                <>
                  <h3 className="font-bold mt-10 mb-2">Notes</h3>
                  <ul className="list-disc ml-8">
                    {item.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
