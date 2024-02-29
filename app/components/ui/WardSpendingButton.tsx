import { useSearchParams, usePathname, useRouter } from "next/navigation";
/** WardSpendingButton
 * a button that re-routes the user to the appropriate ward spending page
 */
export default function WardSpendingButton() {
    const searchParams = useSearchParams();
    const { push } = useRouter();

    function handleClick() {
        push(`../ward-spending?${searchParams.toString()}`);
    }

    return(
        <button
        onClick={handleClick}
        className=""
        >Go Spending</button>
    )
}
