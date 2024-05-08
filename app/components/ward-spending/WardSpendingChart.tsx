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
import { Dispatch, SetStateAction, useEffect, useRef } from "react";

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

  return <g className="text-base" ref={ref} />;
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
            className="cursor-pointer hover:fill-teal-500"
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
  dimensions,
  max = 1500000,
  setShowCategory,
}: {
  data: { category: string; total: number }[];
  dimensions: { x: number; y: number };
  max: number;
  setShowCategory: Dispatch<SetStateAction<string | null>>;
}) {
  const margin = { top: -2, right: 32, bottom: 0, left: 190 };
  const width = dimensions.x - margin.left - margin.right;
  const height = dimensions.y - margin.top - margin.bottom;

  const scaleX = scaleLinear().domain([0, max]).range([0, width]);

  const scaleY = scaleBand()
    .domain(data.map(({ category }) => category))
    .range([0, height - 30])
    .padding(0.5);

  return (
    <svg
      width={width + margin.left + margin.right}
      height={height + margin.top + margin.bottom}
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
