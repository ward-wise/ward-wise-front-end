import React from "react";

export default function Hero() {
    return(
        <section className="flex items-center justify-center flex-col w-full h-80 absolute top-20 bg-slate-800" id="hero">
            <h1 className="font-semibold text-4xl lg:text-7xl  text-sky-400 flex flex-col justify-around">Ward Wise
            <span className="font-medium text-lg lg:text-4xl text-white leading-5 pl-4"> Keeping the government accountable</span>
            </h1>
      </section>
    );
}