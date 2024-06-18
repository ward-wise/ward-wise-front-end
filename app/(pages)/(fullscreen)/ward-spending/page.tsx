import { Metadata } from "next";
import { WardSelect, YearSelect } from "@/app/components/ui/ward-spending/filters";
import { getSpendingItems, getSpendingItemTotals } from "@/app/lib/data";
import DataVis from "@/app/components/ui/ward-spending/DataVis";
import Link from "next/link";

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
  const wardSpendingItems = await getSpendingItems({ ward, year });

  return (
    <main className="flex flex-col items-center justify-between">
      <div className="z-10 max-w-5xl w-full">
        <div className="flex justify-center items-center mt-8 mb-12">
          <WardSelect />
          <YearSelect />
          <Link
            href={`/find-my-ward?ward=${ward}`}
            className="p-2 md:p-4 shadow-lg bg-sky-500 text-white text-xs font-bold rounded-md text-center max-w-20 md:max-w-96"
          >
            Contact Alder
          </Link>
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
