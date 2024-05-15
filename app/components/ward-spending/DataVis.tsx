"use client";

import { useState } from "react";
import WardSpendingChart from "./WardSpendingChart";
import ItemDetailList from "./ItemDetailList";
import { SpendingItemTotal, WardSpendingItem } from "@/app/lib/definitions";

const MD_CHART_DIMENSIONS = { x: 650, y: 500 }
const MOBILE_CHART_DIMENSIONS = { x: 360, y: 400 }

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
  max,
  ward,
  year,
}: {
  totals: SpendingItemTotal[];
  spendingItems: WardSpendingItem[];
  max: number;
  ward: number;
  year: number;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  //Generate a filtered list of spending items for ward/year/category,
  //sorted by cost, desc.
  let detailedSpendingItems: WardSpendingItem[] = [];
  if (selectedCategory) {
    detailedSpendingItems = spendingItems.filter(
      (item) => item.category === selectedCategory
    ).sort((a, b) => b.cost - a.cost);
  }

  return (
    <div className="lg:flex lg:gap-x-2">
      <div>
        <WardSpendingChart
          data={totals}
          dimensions={MD_CHART_DIMENSIONS}
          max={max}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />
      </div>
      <div
      className="mt-2 lg:mt-0"
      >
        {selectedCategory ? (
          <ItemDetailList
            spendingItems={detailedSpendingItems}
            category={selectedCategory}
            ward={ward}
            year={year}
          />
        ) : (
          <p>Click a category to see spending items</p>
        )}
      </div>
    </div>
  );
}
