import Link from "next/link";
import WardSearch from "@/app/components/ui/find-my-ward/WardSearch";
import FindMyWard from "./find-my-ward/page";
import Hero from "@/app/components/ui/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <article className=" w-full flex items-center justify-center mt-96 shadow-xl rounded-lg border-l-2 lg:border-l-4 " id="WhatIs">
        <h2 className=" p-5 h-60 text-center flex justify-center items-center font-bold text-lg md:text-2xl lg:text-4xl 3xl:text-5xl w-2/4 leading-5">What is a ward?</h2>
        <p className="h-60 p-4 flex justify-center items-center text-left w-2/4 text-sm lg:text-xl 2xl:text-2xl lg:leading-6 leading-4 tracking-tight border-l-4 lg:border-l-8 border-sky-400 rounded-lg">
          Chicago is divided into 50 legislative districts, called "wards". Each ward contains rougly 50,000 residents and can overlap with multiple neighborhoods.
        </p>
      </article>
      <section className="w-full  my-24 md:my-48  flex items-center justify-center shadow-xl rounded-lg border-l-2 lg:border-l-4" id="HowMuch">
        <p className="p-8 h-60 w-2/4 text-xl lg:text-4xl 2xl:text-5xl flex justify-center items-center text-center border-r-4 lg:border-r-8 border-sky-400 rounded-lg">$1.5 Million</p>
        <h2 className="p-8 h-60 w-2/4 flex items-center justify-center font-bold text-lg md:text-xl lg:text-4xl 3xl:text-5xl leading-5">annual ward budget for local infrastructure projects</h2>
      </section>
    </main>
  );
}
