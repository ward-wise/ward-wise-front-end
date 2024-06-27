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
import wrap from "@/app/lib/utils/d3TextWrap";
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
      const formatValue = (d: { valueOf(): number }) => {
        const value = d.valueOf();
        return value === 0 ? '0' : `$${(value / 1000).toFixed(0)}K`;
      };
      const axis = axisBottom(scale)
        .ticks(4)
        .tickFormat(formatValue);

      select(ref.current).call(axis);
    }
  }, [scale]);

  return <g className="text-sm" ref={ref} transform={transform} />;
}

function YAxis({
  scale,
  setSelectedCategory,
}: {
  scale: ScaleBand<string>;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
}) {
  const ref = useRef<SVGGElement>(null);
  const numCategories = scale.domain().length;
  useEffect(() => {
    if (ref.current) {
      select(ref.current)
        .call(axisLeft(scale))
        .selectAll("text")
        .classed("cursor-pointer", true)
        .on("click", (evt) => {
          setSelectedCategory(evt.target.__data__ as string);
        });
      if (window.innerWidth < 576) {
        select(ref.current).selectAll("text").call(wrap, 85).attr("dx", (numCategories < 10 ? -12 : -10));
      }
    }
  }, [scale, setSelectedCategory, numCategories]);

  return <g className={`${numCategories < 10 ? "text-sm" : "text-xs"} md:text-base`} ref={ref} />;
}

function Bars({
  data,
  scaleX,
  scaleY,
  setSelectedCategory,
  selectedCategory,
}: {
  data: { category: string; total: number }[];
  scaleX: ScaleLinear<number, number, never>;
  scaleY: ScaleBand<string>;
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
  selectedCategory: string | null;
}) {
  return (
    <>
      {data.map(({ category, total }) => (
        <g key={category}>
          <rect
            onClick={() => setSelectedCategory(category)}
            className={`${
              category === selectedCategory ? "fill-sky-300" : "fill-blue-500"
            } cursor-pointer hover:fill-sky-300`}
            x={0}
            y={scaleY(category)}
            rx={2}
            width={scaleX(total)}
            height={scaleY.bandwidth()}
          />
          <text
            className="text-sm md:text-base"
            x={scaleX(total) + 6}
            y={(scaleY(category) as number) + scaleY.bandwidth() / 2 + 4}
            onClick={() => setSelectedCategory(category)}
          >
            ${Math.round(total/1000)}K
          </text>
        </g>
      ))}
    </>
  );
}

export default function WardSpendingChart({
  data,
  dimensions,
  setSelectedCategory,
  selectedCategory,
}: {
  data: { category: string; total: number }[];
  dimensions: { width: number; height: number };
  setSelectedCategory: Dispatch<SetStateAction<string | null>>;
  selectedCategory: string | null;
}) {
  const margin = {
    top: -2,
    right: dimensions.width <= 576 ? 25 : 60,
    bottom: 0,
    left: dimensions.width <= 576 ? 100 : 190,
  };
  const width = Math.floor(dimensions.width) - margin.left - margin.right;
  const height = Math.floor(dimensions.height) - margin.top - margin.bottom;

  const scaleX = scaleLinear()
    .domain([0, Math.max(...data.map((item) => item.total)) * 1.2])
    .range([0, width]);

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
        <YAxis scale={scaleY} setSelectedCategory={setSelectedCategory} />
        <Bars
          data={data}
          scaleX={scaleX}
          scaleY={scaleY}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </g>
    </svg>
  );
}
