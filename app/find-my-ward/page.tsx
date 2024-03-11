import { Metadata } from "next";
import WardSearch from "../components/ui/WardSearch";
import WardSpendingButton from "../components/ui/WardSpendingButton";
import AlderContactCard from "../components/ui/AlderContactCard";

export const metadata: Metadata = {
  title: 'Find My Ward',
};


export default function FindMyWard({
  searchParams,
}: {
  searchParams?: {
    ward?: string
  };
}) {

  const ward = searchParams?.ward;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <WardSearch />
        {ward && <AlderContactCard wardNumber={+ward} />}
        {ward && <WardSpendingButton />}
      </div>
    </main>
  );
}
