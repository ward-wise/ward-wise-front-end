import { useMemo } from "react";
import { scaleLinear } from "d3";

export default function XAxis({
  domain = [0, 100],
  range = [10, 290],
  yOffset = 6
}: {
  domain: [number, number];
  range: [number, number];
  yOffset: number

}) {
  const ticks = useMemo(() => {
    const xScale = scaleLinear().domain(domain).range(range);

    const width = range[1] - range[0];
    const pixelsPerTick = 60;
    const numberOfTicksTarget = Math.max(1, Math.floor(width / pixelsPerTick));

    return xScale.ticks(numberOfTicksTarget).map((value) => ({
      value,
      xOffset: xScale(value),
    }));
  }, [domain.join("-"), range.join("-")]);

  return (
    <svg className="w-full" >
      <path
        d={["M", range[0], yOffset, "v", -6, "H", range[1], "v", 6].join(" ")}
        fill="none"
        stroke="currentColor"
      />
      {ticks.map(({ value, xOffset }) => (
        <g key={value} transform={`translate(${xOffset}, ${yOffset - 6})`}>
          <line y2="10" stroke="currentColor" />
          <text
            key={value}
            className="text-[12px] text-left translate-y-6"
            style={{
              textAnchor: "middle",
            }}
          >
            {value}
          </text>
        </g>
      ))}
    </svg>
  );
}
