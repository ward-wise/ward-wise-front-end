import React from "react";

export default function Hero() {
    return (
        <section className="flex items-center justify-center flex-col w-full h-72 absolute top-20 bg-slate-800" id="hero">
            <div className="px-8">
                <h1 className="font-medium text-4xl lg:text-7xl text-white mb-2">Ward Wise</h1>
                <h2 className="font-medium text-lg lg:text-3xl text-sky-400 leading-5 lg:pl-2">Aldermanic Spending on Neighborhood Infrastructure</h2>
            </div>

        </section>
    );
}