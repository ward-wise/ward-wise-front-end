import MenuItemCard from "@/app/components/ui/menu-items/MenuItemCard";
import { MenuItem } from "@/app/lib/definitions";
import { promises as fs } from 'fs';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Spending Menu',
};

export default async function SpendingMenu() {
  const file = await fs.readFile(process.cwd() + '/public/menuItemsInfo.json', 'utf8');
  const menuItems = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col z-10 max-w-5xl w-full">
        <h1 className="text-2xl font-bold mt-2 mb-4">
          Aldermanic Spending Menu
        </h1>
        <p>
          Each year, CDOT and OBM provide alders a list of standard menu items. Costs are estimated based on previous years&apos; costs. Alders select items from this list to allocate their $1.5 million budget.
        </p>
        <div>
          <p className='text-center my-6 mt-10 italic'>
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

