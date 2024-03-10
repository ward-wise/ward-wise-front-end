import MenuItemCard from "@/app/components/ui/menu-items/MenuItemCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Spending Menu',
};

export default function SpendingMenu() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>This is the Alderman Spending Menu page</h1>
        <MenuItemCard itemName="Alley Speed Hump Program" unitCost={1400} unit="block" isVisionZero={true} imgPath="/images/menu-items/AlleySpeedHumpProgram.png"/>
      </div>
    </main>
  );
}
