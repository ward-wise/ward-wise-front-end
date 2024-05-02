import { useEffect, useRef, useMemo } from "react";
import {
  axisBottom,
  axisLeft,
  scaleBand,
  ScaleBand,
  scaleLinear,
  ScaleLinear,
  select,
} from "d3";

import XAxis from "./XAxis";
imp


export default function BarChart () {
    return (
      <div className="p-x-4">
        <XAxis domain={[0, 1000000]} range={[10, 500]} yOffset={0}/>

      </div>
    );
}
