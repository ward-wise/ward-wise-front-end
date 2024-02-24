import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Ward Spending',
}; 

export default function WardSpending() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>This is the Ward Spending page</h1>
      </div>
    </main>
  );
}
