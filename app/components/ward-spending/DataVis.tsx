import { getSpendingItemTotals } from "@/app/lib/data";
import WardSpendingChart from "./WardSpendingChart";

export default async function DataVis ({ward, year}: {ward: number, year: number}){
    const data = await getSpendingItemTotals(ward, year);
    return (
      <>
        <WardSpendingChart data={data} dimensions={{ x: 650, y: 500 }} />
      </>
    );
}
