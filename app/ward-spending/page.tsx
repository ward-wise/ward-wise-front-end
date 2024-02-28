import { Metadata } from "next";
import {WardSelect, YearSelect} from "../components/ward-spending/filters";

export const metadata: Metadata = {
  title: 'Ward Spending',
}; 

export default function WardSpending() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center lg:flex">
        <WardSelect/>
        <YearSelect/>
      </div>
    </main>
  );
}
