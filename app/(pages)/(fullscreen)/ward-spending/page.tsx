import { Metadata } from "next";
import { WardSelect, YearSelect } from "@/app/components/ward-spending/filters";
import { getSpendingItems, getSpendingItemTotals } from "@/app/lib/data";
import DataVis from "@/app/components/ward-spending/DataVis";

export const metadata: Metadata = {
  title: "Ward Spending",
  openGraph: {
    title: 'Ward Infrastructure Spending',
    images: [
      {
        url: '/images/og/spending-chart-1200x630.png',
        width: 1200,
        height: 630,
      },
    ],
  },
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
  const wardSpendingItems = await getSpendingItems({ward, year});

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full">
        <div className="flex justify-center mt-8 mb-12">
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