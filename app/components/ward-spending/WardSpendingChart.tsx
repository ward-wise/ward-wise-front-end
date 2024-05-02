"use client";

import { ScaleBand, axisBottom, axisLeft, scaleBand, select } from "d3";
import { useEffect, useRef } from "react";
import XAxis from "../ui/data-vis/XAxis";
import YAxis from "../ui/data-vis/YAxis";

// function XAxis({
//   scale,
//   transform,
// }: {
//   scale: ScaleBand<string>;
//   transform: string;
// }) {
//   const ref = useRef<SVGGElement>(null);
//   useEffect(() => {
//     if (ref.current) {
//       select(ref.current).call(axisBottom(scale));
//     }
//   }, [scale]);

//   return <g ref={ref} transform={transform} />;
// }

export default function WardSpendingChart({
  data,
}: {
  data: { category: string; total: number }[];
}) {
  const margin = { top: 0, right: 0, bottom: 0, left: 0 };
  //TODO: props?
  const width = 500 - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

//   const scaleX = scaleBand()
//     .domain(data.map(({ category }) => category))
//     .range([0, width]);
    const domain = data.map(({category}) => category);
    const startPX = 30

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
      className="border-2 border-black"
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis domain={[0, 1000000]} range={[startPX, 500]} yOffset={height - 30}/>
        <YAxis domain={domain} range={[10, height]} xOffset={startPX} />
      </g>
    </svg>
  );
}
