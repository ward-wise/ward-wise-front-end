import { Metadata } from "next";
import { WardSelect, YearSelect } from "@/app/components/ward-spending/filters";
import { getWardSpendingItems, getSpendingItemTotals } from "@/app/lib/data";
import DataVis from "@/app/components/ward-spending/DataVis";
export const metadata: Metadata = {
  title: "Ward Spending",
};

export default async function WardSpending({
  searchParams,
}: {
  searchParams?: {
    ward?: string;
    year?: string;
  };
}) {
  const ward = searchParams?.ward ? +searchParams.ward : 1;
  const year = searchParams?.year ? +searchParams.year : 2023;
  const max = year > 2021 ? 1500000 : 1320000;

  const wardSpendingTotals = await getSpendingItemTotals(ward, year);
  const wardSpendingItems = await getWardSpendingItems(ward, year);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full">
        <div className="flex justify-start mb-6">
          <WardSelect />
          <YearSelect />
        </div>
        <DataVis
          totals={wardSpendingTotals}
          max={max}
          spendingItems={wardSpendingItems}
          ward={ward}
          year={year}
        />
      </div>
    </main>
  );
}
