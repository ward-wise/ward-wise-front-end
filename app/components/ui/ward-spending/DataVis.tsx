"use client";

import { useState, useRef } from "react";
import useResizeObserver from "use-resize-observer";
import WardSpendingChart from "./WardSpendingChart";
import ItemDetailList from "./ItemDetailList";
import { SpendingItemTotal, WardSpendingItem } from "@/app/lib/definitions";

const MD_CHART_DIMENSIONS = { width: 800, height: 500 };
const MOBILE_CHART_DIMENSIONS = { width: 350, height: 400 };

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

  // const menuBudget = year > 2021 ? 1500000 : 1320000;

  //Generate a filtered list of spending items for ward/year/category,
  //sorted by cost, desc.
  let detailedSpendingItems: WardSpendingItem[] = [];
  if (selectedCategory) {
    detailedSpendingItems = spendingItems
      .filter((item) => item.category === selectedCategory)
      .sort((a, b) => b.cost - a.cost);
  }

  return (
    <div className="lg:h-[75vh] lg:flex lg:gap-x-2 max-w-[1600px]">
      <div className="flex flex-col justify-center" ref={ref}>
        {/* <p className="text-center mb-4 font-bold">{`Total Ward Spending Menu Budget: $${menuBudget.toLocaleString()}`}</p> */}
        <WardSpendingChart
          data={totals}
          dimensions={{width, height}}
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
