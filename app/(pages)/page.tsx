import Link from "next/link";
import WardSearch from "../components/ui/WardSearch";
import FindMyWard from "./find-my-ward/page";
import Hero from "../components/ui/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <article className="flex items-center justify-center my-5 p-5 gap-4 mt-96" id="WhatIs">
        <h2 className=" h-full text-center lg:text-center font-bold text-lg md:text-2xl lg:text-4xl 3xl:text-5xl w-5/12 leading-5">What Is A Ward?</h2>
        <p className=" p-4 text-left flex-wrap w-6/12 text-sm lg:text-xl 2xl:text-2xl lg:leading-6 leading-4 tracking-tight border-l-4 lg:border-l-8 border-sky-400">The City of Chicago is divided into fifty legislative districts called wards. Each ward is represented by an alderperson who is elected by their constituency to manage their ward's budget and perform other civic duties.</p>
      </article>
        <section className="flex items-center justify-center my-5 py-10 gap-4" id="HowMuch">
          <p className="text-xl lg:text-4xl 2xl:text-5xl w-6/12 text-center"> $1.5 Million</p>
          <h2 className=" p-2 text-center w-7/12 font-bold text-lg md:text-xl lg:text-4xl 3xl:text-5xl leading-5 border-l-4 lg:border-l-8 border-sky-400">How Much Funding Does My Ward Get?</h2>
        </section>
    </main>
  );
}
