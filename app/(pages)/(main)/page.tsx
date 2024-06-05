import WardSearch from "@/app/components/ui/find-my-ward/WardSearch";
import FindMyWard from "./find-my-ward/page";
import Hero from "@/app/components/ui/Hero";
import { Hyperlink } from "@/app/components/ui/Hyperlink";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      {/* TODO: Hero is using absolute positioning. Fix. */}

      {/* Buttons at the top */}
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0 my-4 mt-80 mb-28">
        <Link href="ward-spending" className="bg-blue-500 text-white py-4 px-6 rounded text-center font-semibold">
          How Wards Spend Their Money
        </Link>
        <Link href="spending-map" className="bg-blue-500 text-white py-4 px-6 rounded text-center font-semibold">
          Find Spending By You
        </Link>
      </div>

      {/* Content sections */}
      <div className="w-full max-w-prose mx-auto space-y-36 mb-16">
        <section>
          <p className="text-lg">
            Chicago spends $75 million a year on neighborhood infrastructure improvements like sidewalk repairs, residential street resurfacing, and bike lanes.
          </p>
          <p className="text-lg">
            Who decides where and how the money is spent? Scroll down to find out!
          </p>
        </section>

        <section>
          <h2 className="text-lg">Chicago is split up into 50 <b>wards</b>. Each ward elects an <b>alder</b>.</h2>
          <p className="text-lg">
            <Hyperlink href="/find-my-ward">
              Find your ward and alder
            </Hyperlink>
          </p>
        </section>

        <section>
          <p className="text-lg">
            CDOT sends ward offices a <b>neighborhood infrastructure menu</b>.
          </p>
          <p className="text-lg">
            <Hyperlink href="/infrastructure-menu">
              View the 2023 neighborhood infrastructure menu
            </Hyperlink>
          </p>
        </section>

        <section>
          <p className="text-lg">
            Every year, each ward receives a $1.5 million budget for <b>“menu money”</b>. Alders decide how to spend this money on neighborhood infrastructure in their ward, choosing between menu and non-menu projects.
          </p>
          <p className="text-lg">
            <Hyperlink href="/ward-spending">
              View ward spending breakdowns
            </Hyperlink>
            <br />
            <Hyperlink href="/spending-map">
              See spending on a map
            </Hyperlink>
          </p>
        </section>

        <section>
          <p className="text-lg">
            You can influence infrastructure spending in your ward! Get involved with <b>participatory budgeting</b> or <b>speak directly with your alder</b>.
          </p>
          <p className="text-lg">
            <Hyperlink href="/faqs">
              Learn about participatory budgeting
            </Hyperlink>
            <br />
            <Hyperlink href="/find-my-ward">
              Contact your alder
            </Hyperlink>
          </p>
        </section>

        <section>
          <h2 className="text-lg">Want to know more?</h2>
          <p className="text-lg">
            <Hyperlink href="/faqs">
              Read our frequently asked questions
            </Hyperlink>
            <br />
            <Hyperlink href="/about">
              Read about the Ward Wise project
            </Hyperlink>
          </p>
        </section>


      </div>
    </main>
  );
}
