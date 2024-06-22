import MenuItemCard from "@/app/components/ui/menu-items/MenuItemCard";
import { MenuItem } from "@/app/lib/definitions";
import { promises as fs } from 'fs';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Infrastructure Menu',
  description: "View CDOT's neighborhood infrastructure menu.",
  openGraph: {
    title: 'Neighborhood Infrastructure Menu',
    description: "View CDOT's neighborhood infrastructure menu.",
    images: [
      {
        url: '/images/og/infrastructure-menu-1200x630.png',
      },
    ],
  },
};

export default async function SpendingMenu() {
  const file = await fs.readFile(process.cwd() + '/public/menuItemsInfo.json', 'utf8');
  const menuItems = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-6 px-6 md:px-32">
      <div className="flex flex-col z-10 max-w-5xl w-full items-center">
        <div className="flex flex-col max-w-prose">
        <h1 className="text-4xl mt-4 lg:mt-8 mb-10">
          Neighborhood Infrastructure Menu
        </h1>
        <p>
          Each year, CDOT and OBM provide alders a menu of standard neighborhood infrastructure projects. Alders select items from this menu to allocate their $1.5 million budget. Costs are estimated based on previous years&apos; costs.
        </p>
        </div>
        <div>
          <p className='text-center mt-6 mb-12 italic'>
            Select an item to learn more.
          </p>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-6 mb-8">
            {menuItems.map((item: MenuItem) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

