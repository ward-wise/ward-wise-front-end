import SpendingItemCard from "./SpendingItemCard";
import { WardSpendingItem } from "@/app/lib/definitions";

/* ItemDetailList
List of detailed spending item [cards],
per category, for the selected year/ward
**/
export default function ItemDetailList({
  spendingItems,
  category,
  ward,
  year,
}: {
  spendingItems: WardSpendingItem[];
  category: string;
  ward: number;
  year: number;
}) {
  return (
    <div>
      <h2 className="font-bold text-center mb-4">{`${category} Spending in Ward ${ward}, ${year}`}</h2>
      {!!spendingItems.length ? (
        <>
          {spendingItems.map((item) => (
            <SpendingItemCard key={item.id} spendingItem={item} />
          ))}
        </>
      ) : (
        <p className="italic text-center">
          No spending items found in this category
        </p>
      )}
    </div>
  );
}