import { Metadata } from "next";
import { WardSelect, YearSelect } from "@/app/components/ward-spending/Filters";
import { getWardSpendingItems, getSpendingItemTotals } from "@/app/lib/data";
import BarChart from "@/app/components/ui/data-vis/BarChart";
import HandMadeBarChart from "@/app/components/ui/data-vis/HandMadeBarChart";
import WardSpendingChart from "@/app/components/ward-spending/WardSpendingChart";
import DataVis from "@/app/components/ward-spending/DataVis";

export const metadata: Metadata = {
  title: "Ward Spending",
};

export default async function WardSpending({
  searchParams,
}: {
  searchParams?: {
    ward?: string;
    year?: string
  };
}) {

  const ward = searchParams?.ward ? +searchParams.ward : 1
  const year = searchParams?.year ? +searchParams.year : 2023


  const data = await getSpendingItemTotals(47, 2021);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full">
        <div className="flex justify-start mb-6">
          <WardSelect />
          <YearSelect />
        </div>
        <DataVis ward={ward} year={year}/>
      </div>
    </main>
  );
}
