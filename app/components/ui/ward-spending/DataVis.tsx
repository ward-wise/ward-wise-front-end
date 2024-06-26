"use client";

import { useState, useRef } from "react";
import useResizeObserver from "use-resize-observer";
import WardSpendingChart from "./WardSpendingChart";
import ItemDetailList from "./ItemDetailList";
import { SpendingItemTotal, WardSpendingItem } from "@/app/lib/definitions";

const MD_CHART_DIMENSIONS = { width: 800, height: 500 };
const MOBILE_CHART_DIMENSIONS = { width: window.innerWidth, height: 400 };

/* DataVis
Stateful client component for rendering the Ward Spending bar chart and
the detailed spending item list
state: showCategory determines whether the `ItemDetailList` is rendered,
    with the respective selected category, or not (null)

ward-spending/page.tsx -> DataVis -> {WardSpendingChart, ItemDetailList}
**/
export default function DataVis({
  totals,
  spendingItems,
  ward,
  year,
}: {
  totals: SpendingItemTotal[];
  spendingItems: WardSpendingItem[];
  ward: number;
  year: number;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const initialDimensions = window.innerWidth < 576 ? MOBILE_CHART_DIMENSIONS : MD_CHART_DIMENSIONS

  const { ref, width = initialDimensions.width, height = initialDimensions.height = 500 } = useResizeObserver<HTMLDivElement>();

  //Generate a filtered list of spending items for ward/year/category,
  //sorted by cost, desc.
  let detailedSpendingItems: WardSpendingItem[] = [];
  if (selectedCategory) {
    detailedSpendingItems = spendingItems
      .filter((item) => item.category === selectedCategory)
      .sort((a, b) => b.cost - a.cost);
  }

  return (
    <div className="lg:h-[75vh] lg:flex lg:gap-x-2">
      <div
        className="flex flex-col md:justify-center max-h-[66vh] lg:max-h-none lg:max-w-[calc(100%-312px)]"
        ref={ref}
      >
        <WardSpendingChart
          data={totals}
          dimensions={{ width, height }}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="mt-2 lg:mt-0 lg:min-w-[300px]">
        {selectedCategory ? (
          <ItemDetailList
            spendingItems={detailedSpendingItems}
            category={selectedCategory}
            ward={ward}
            year={year}
          />
        ) : (
          <p className="text-center">Click a category to see spending items</p>
        )}
      </div>
    </div>
  );
}
