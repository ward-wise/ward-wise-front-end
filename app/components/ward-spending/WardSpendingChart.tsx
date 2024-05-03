"use client";

import { WardSpendingItem } from "@/app/lib/definitions";
import {
  ScaleBand,
  ScaleLinear,
  axisBottom,
  axisLeft,
  scaleBand,
  scaleLinear,
  select,
} from "d3";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
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
      select(ref.current).call(axisBottom(scale).ticks(4));
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
  scaleX,
  scaleY,
  setShowCategory,
}: {
  data: { category: string; total: number }[];
  scaleX: ScaleLinear<number, number, never>;
  scaleY: ScaleBand<string>;
  setShowCategory: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <>
      {data.map(({ category, total }) => (
        <g key={category}>
          <rect
            onClick={() => setShowCategory(category)}
            className="cursor-pointer"
            x={0}
            y={scaleY(category)}
            width={scaleX(total)}
            height={scaleY.bandwidth()}
            fill="teal"
          />
          <text x={scaleX(total) + 6} y={(scaleY(category) as number) + scaleY.bandwidth()/2 + 4}>
            ${total.toLocaleString()}
          </text>
        </g>
      ))}
    </>
  );
}

export default function WardSpendingChart({
  data,
  dimensions = { x: 500, y: 300 },
  max = 1500000,
  setShowCategory,
}: {
  data: { category: string; total: number }[];
  dimensions: { x: number; y: number };
  max: number;
  setShowCategory: Dispatch<SetStateAction<string | null>>;
}) {
  const margin = { top: 0, right: 30, bottom: 0, left: 180 };
  //TODO: props?
  const width = dimensions.x - margin.left - margin.right;
  const height = dimensions.y - margin.top - margin.bottom;

  const scaleX = scaleLinear().domain([0, max]).range([0, width]);
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
        <Bars
          data={data}
          scaleX={scaleX}
          scaleY={scaleY}
          setShowCategory={setShowCategory}
        />
      </g>
    </svg>
  );
}
