import { Metadata } from "next";
import WardSearch from "@/app/components/ui/find-my-ward/WardSearch";
import WardSpendingButton from "@/app/components/ui/find-my-ward/WardSpendingButton";
import AlderContactCard from "@/app/components/ui/find-my-ward/AlderContactCard";

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
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-x-24 my-8 mx-4">
      <div className="z-10 flex flex-col gap-y-2 max-w-4xl w-full font-inter text-sm">
        <WardSearch />
        {/* Display Contact Card and Spending Button for valid wards */}
        {ward && +ward > 0 && +ward <= 50 ? (
          <div className="w-full flex flex-col items-center mt-8 gap-y-10">
            <AlderContactCard wardNumber={+ward} />
            <WardSpendingButton />
          </div>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
