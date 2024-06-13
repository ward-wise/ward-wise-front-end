import { WardSpendingItem } from "@/app/lib/definitions";

export default function SpendingItemCard({
  spendingItem,
}: {
  spendingItem: WardSpendingItem;
}) {
  return (
    <div className="flex gap-x-2 justify-between px-2 mb-2 border-b-2 border-slate-800">
      <div>
        <h3 className="font-bold">{spendingItem.item}</h3>
        <p className="text-sm">{spendingItem.location}</p>
      </div>
      <div className="font-bold text-green-600">
        <h3>${spendingItem.cost.toLocaleString()}</h3>
      </div>
    </div>
  );
}
