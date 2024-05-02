"use client";

import {
  ScaleBand,
  ScaleLinear,
  axisBottom,
  axisLeft,
  scaleBand,
  scaleLinear,
  select,
} from "d3";
import { useEffect, useRef } from "react";
// import XAxis from "../ui/data-vis/XAxis";
// import YAxis from "../ui/data-vis/YAxis";

function XAxis({
  scale,
  transform,
}: {
  scale: ScaleLinear<number, number, never>;
  transform: string;
}) {
  const ref = useRef<SVGGElement>(null);
  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisBottom(scale));
    }
  }, [scale]);

  return <g className="text-sm" ref={ref} transform={transform} />;
}

function YAxis({ scale }: { scale: ScaleBand<string> }) {
  const ref = useRef<SVGGElement>(null);
  useEffect(() => {
    if (ref.current) {
      select(ref.current).call(axisLeft(scale));
    }
  }, [scale]);

  return <g className="text-base text-wrap" ref={ref} />;
}

function Bars({
  data,
  width,
  scaleX,
  scaleY,
}: {
  data: { category: string; total: number }[];
  width: number;
  scaleX: ScaleLinear<number, number, never>;
  scaleY: ScaleBand<string>;
}) {
  return (
    <>
      {data.map(({ category, total }) => (
        <g key={category}>
          <rect
            x={0}
            y={scaleY(category)}
            width={scaleX(total)}
            height={scaleY.bandwidth()}
            fill="teal"
          />
          <text
            x={scaleX(total) + 6}
            y={scaleY(category) as number + 16}
          >{total}</text>
        </g>
      ))}
    </>
  );
}

export default function WardSpendingChart({
  data,
  dimensions = {x: 500, y: 300}
}: {
  data: { category: string; total: number }[];
  dimensions: {x: number, y: number}
}) {

  const margin = { top: 0, right: 20, bottom: 0, left: 60 };
  //TODO: props?
  const width = dimensions.x - margin.left - margin.right;
  const height = dimensions.y - margin.top - margin.bottom;

  const scaleX = scaleLinear().domain([0, 1000000]).range([0, width]);
  //   const domain = data.map(({ category }) => category);
  //   const startPX = 30;

  const scaleY = scaleBand()
    .domain(data.map(({ category }) => category))
    .range([0, height])
    .padding(0.5);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
      className="border-2 border-black"
    >
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <XAxis scale={scaleX} transform={`translate(0, ${height - 30})`} />
        <YAxis scale={scaleY} />
        <Bars data={data} width={width} scaleX={scaleX} scaleY={scaleY} />
      </g>
    </svg>
  );
}
