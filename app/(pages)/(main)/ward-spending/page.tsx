import { Metadata } from "next";
import { WardSelect, YearSelect } from "@/app/components/ward-spending/filters";
import { getWardSpendingItems } from "@/app/lib/data";

export const metadata: Metadata = {
  title: 'Ward Spending',
};

export default async function WardSpending() {

  // FIXME: THIS IS A DEMO THAT THIS QUERY IS WORKING
  const data = await getWardSpendingItems(47, 2022);
  console.log("Got data!", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center lg:flex">
        <WardSelect/>
        <YearSelect/>
      </div>
    </main>
  );
}
