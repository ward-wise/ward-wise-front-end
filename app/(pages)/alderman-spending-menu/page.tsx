import MenuItemCard from "@/app/components/ui/menu-items/MenuItemCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Spending Menu',
};

export default function SpendingMenu() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col z-10 max-w-5xl w-full">
        <h1 className="text-2xl font-bold mt-2 mb-4">
          Aldermanic Spending Menu
        </h1>
        <p>
          Each year, CDOT and OBM provide alders a list of standard menu items. Costs are estimated based on previous years&apos; costs. Alders select items from this list to allocate their $1.5 million budget.
        </p>
        <p className='text-center my-6 mt-10 italic'>
          Select an item to learn more.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-6">
          <MenuItemCard itemName="Alley Speed Hump Program" unitCost={1400} unit="block" isVisionZero={true} imgPath="/images/menu-items/AlleySpeedHumpProgram.png" />
          <MenuItemCard itemName="Alley Speed Hump Program" unitCost={1400} unit="block" isVisionZero={true} imgPath="/images/menu-items/AlleySpeedHumpProgram.png" />
          <MenuItemCard itemName="Alley Speed Hump Program" unitCost={1400} unit="block" isVisionZero={true} imgPath="/images/menu-items/AlleySpeedHumpProgram.png" />
          <MenuItemCard itemName="Alley Speed Hump Program" unitCost={1400} unit="block" isVisionZero={true} imgPath="/images/menu-items/AlleySpeedHumpProgram.png" />
        </div>
      </div>
    </main>
  );
}
