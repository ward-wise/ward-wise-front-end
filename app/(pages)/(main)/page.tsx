/* eslint-disable @next/next/no-img-element */

import WardSearch from "@/app/components/ui/find-my-ward/WardSearch";
import FindMyWard from "./find-my-ward/page";
import Hero from "@/app/components/ui/Hero";
import { Hyperlink } from "@/app/components/ui/Hyperlink";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <Hero />

      {/* Buttons at the top */}
      <div className="flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0 my-16 mb-20">
        <Link href="ward-spending" className="bg-blue-500 text-white py-4 px-6 rounded text-center font-semibold">
          How Wards Spend Their Money
        </Link>
        <Link href="spending-map" className="bg-blue-500 text-white py-4 px-6 rounded text-center font-semibold">
          Find Spending By You
        </Link>
      </div>

      {/* Content sections */}
      <div className="w-full max-w-prose space-y-60 mb-36 px-6 text-center">
        <section>
          <p className="text-lg">
            Chicago spends $75 million a year on neighborhood infrastructure improvements like sidewalk repairs, residential street resurfacing, and bike lanes.
            Who decides where and how the money is spent?
          </p>
          <p className="text-lg text-center my-16">
            <b>Scroll down to find out!</b>
          </p>
        </section>

        <section>
          <img
            src={`/images/homepage/chicago-ward-outlines.png`}
            alt="Map of Chicago Wards"
            className="object-contain mb-8 md:max-w-md mx-auto"
          />
          <h2 className="text-lg">Chicago is split up into 50 <b>wards</b>. Each ward elects an <b>alder</b>.</h2>
          <p className="text-lg mt-6">
            <Hyperlink href="/find-my-ward">
              Find your ward and alder
            </Hyperlink>
          </p>
        </section>

        <section>
          <Link href="/infrastructure-menu">
            <img
              src={`/images/homepage/infrastructure-menu-screenshot.png`}
              alt="Items on the Infrastructure Menu"
              className="object-contain mb-16 md:max-w-md mx-auto"
            />
          </Link>
          <p className="text-lg">
            CDOT sends ward offices a <b>neighborhood infrastructure menu</b>.
          </p>
          <p className="text-lg mt-6">
            <Hyperlink href="/infrastructure-menu">
              View the 2023 neighborhood infrastructure menu
            </Hyperlink>
          </p>
        </section>

        <section>
          <img
            src={`/images/homepage/spending-chart-example.png`}
            alt="Alder Ward Spending Chart Example"
            className="object-contain mb-8"
          />
          <p className="text-lg">
            Every year, each ward receives a $1.5 million budget for <b>“menu money”</b> through the aldermanic menu program.
          </p>
          <p className="text-lg mt-4">
            <b>Alders decide how to spend this money</b> on neighborhood infrastructure in their ward, choosing between menu and non-menu projects.
          </p>
          <p className="text-lg mt-6">
            <Hyperlink href="/ward-spending">
              View ward spending breakdowns
            </Hyperlink>
          </p>
          <p className="text-lg mt-6">
            <Hyperlink href="/spending-map">
              See spending on a map
            </Hyperlink>
          </p>
        </section>

        <section>
          <p className="text-4xl mb-16 font-bold leading-normal">
            You can influence infrastructure spending in your ward!
          </p>
          <p className="text-lg">
            Get involved with <b>participatory budgeting</b>
          </p>
          <p className="text-lg">
            or <b>speak directly with your alder</b>.
          </p>
          <p className="text-lg mt-6">
            <Hyperlink href="/faqs#participatory-budgeting">
              Learn about participatory budgeting
            </Hyperlink>
          </p>
          <p className="text-lg mt-6">
            <Hyperlink href="/faqs#how-to-influence">
              Contact your alder
            </Hyperlink>
          </p>
        </section>

        <section>
          <h2 className="text-lg">Want to know more?</h2>
          <p className="text-lg mt-6">
            <Hyperlink href="/faqs">
              Read our frequently asked questions
            </Hyperlink>
          </p>
          <p className="text-lg mt-6">
            <Hyperlink href="/about">
              Read about the Ward Wise project
            </Hyperlink>
          </p>
        </section>


      </div>
    </main>
  );
}
