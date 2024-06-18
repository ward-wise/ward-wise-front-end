import { Metadata } from "next";
import WardSearch from "@/app/components/ui/find-my-ward/WardSearch";
import WardSpendingButton from "@/app/components/ui/find-my-ward/WardSpendingButton";
import AlderContactCard from "@/app/components/ui/find-my-ward/AlderContactCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find My Ward",
  openGraph: {
    title: 'Find My Ward',
  },
};

export default function FindMyWard({
  searchParams,
}: {
  searchParams?: {
    ward?: string;
  };
}) {
  const ward = searchParams?.ward;
  const validWardSelected = (ward && +ward > 0 && +ward <= 50);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-x-24 my-8 mx-4">
      <div className="z-10 flex flex-col gap-y-2 max-w-4xl w-full font-inter text-sm">
        {!validWardSelected && <WardSearch />}
        {/* Display Contact Card and Spending Button for valid wards */}
        {validWardSelected && (
          <div className="w-full flex flex-col items-center mt-8 gap-y-10">
            <AlderContactCard wardNumber={+ward} />
            <WardSpendingButton />
            <Link
              className="p-6 shadow-lg bg-sky-500 text-white font-bold rounded-md text-center lg:w-96"
              href="/faqs#how-to-influence"
            >
              How can I influence infrastructure spending?
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
