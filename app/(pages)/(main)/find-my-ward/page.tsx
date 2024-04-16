import { Metadata } from "next";
import WardSearch from "@/app/components/ui/WardSearch";
import WardSpendingButton from "@/app/components/ui/WardSpendingButton";
import AlderContactCard from "@/app/components/ui/AlderContactCard";

export const metadata: Metadata = {
  title: "Find My Ward",
};

export default function FindMyWard({
  searchParams,
}: {
  searchParams?: {
    ward?: string;
  };
}) {
  const ward = searchParams?.ward;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-inter text-sm lg:flex">
        <WardSearch />
        {/* Display Contact Card and Spending Button for valid wards */}
        {ward && +ward > 0 && +ward <= 50 ? (
          <>
            <AlderContactCard wardNumber={+ward} />
            <WardSpendingButton />
          </>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
