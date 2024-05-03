"use client";

import { useState } from "react";
import { getSpendingItemTotals, getWardSpendingItems } from "@/app/lib/data";
import WardSpendingChart from "./WardSpendingChart";
import ItemDetailList from "./ItemDetailList";
import { SpendingItemTotal, WardSpendingItem } from "@/app/lib/definitions";

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
  const [showCategory, setShowCategory] = useState<string | null>(null);

  //Generate a filtered list of spending items for ward/year/category,
  //sorted by cost, desc.
  let detailedSpendingItems: WardSpendingItem[] = [];
  if (showCategory) {
    detailedSpendingItems = spendingItems.filter(
      (item) => item.category === showCategory
    ).sort((a, b) => b.cost - a.cost);
  }

  return (
    <div className="lg:flex lg:gap-x-2">
      <div>
        <WardSpendingChart
          data={totals}
          dimensions={{ x: 650, y: 500 }}
          max={max}
          setShowCategory={setShowCategory}
        />
      </div>
      <div>
        {showCategory ? (
          <ItemDetailList
            spendingItems={detailedSpendingItems}
            category={showCategory}
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
