import { useMemo } from "react";
import { ScaleBand, scaleBand } from "d3";

export default function YAxis({
  domain = ["bike", "truck"],
  range = [10, 290],
  xOffset = 6
}: {
  domain: string[];
  range: [number, number];
  xOffset: number;
}) {
  const ticks = useMemo(() => {

    const yScale = scaleBand().domain(domain).range(range);

    const width = range[1] - range[0];
    const pixelsPerTick = 60;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));

    return domain.map((value) => ({
      value,
      yOffset: yScale(value),
    }));
  }, [domain.join("-"), range.join("-")]);

  return (
    <svg className="w-full">
      <path
        d={["M", xOffset, range[0], 6, "v", -6, "H", xOffset, range[1], "v", 6].join(" ")}
        fill="none"
        stroke="currentColor"
      />
      {ticks.map(({ value, yOffset }) => (
        <g key={value} transform={`translate(${xOffset}, ${yOffset})`}>
          <line x2="-10" stroke="currentColor" />
          <text
            key={value}
            className={`text-[12px] text-left translate-x-[-30px]`}
          >
            {value}
          </text>
        </g>
      ))}
    </svg>
  );
}
