import { Metadata } from "next";
import { WardSelect, YearSelect } from "@/app/components/ward-spending/Filters";
import { getWardSpendingItems } from "@/app/lib/data";
import BarChart from "@/app/components/ui/data-vis/BarChart";
import HandMadeBarChart from "@/app/components/ui/data-vis/HandMadeBarChart";
import WardSpendingChart from "@/app/components/ward-spending/WardSpendingChart";

export const metadata: Metadata = {
  title: 'Ward Spending',
};

export default async function WardSpending() {

  //FIXME: dummy
  const data = [
    {category: "bikes", total: 200000},
    {category: "foot", total: 300000},
    {category: "truck", total: 900000},
    {category: "Christ", total: 120000},
    {category: "tech", total: 4},
  ]
  // // FIXME: THIS IS A DEMO THAT THIS QUERY IS WORKING
  // const data = await getWardSpendingItems(47, 2022);
  // console.log("Got data!", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center lg:flex">
        <WardSelect />
        <YearSelect />
        <WardSpendingChart data={data} />
      </div>
    </main>
  );
}
