"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
/** WardSpendingButton
 * a button that re-routes the user to the appropriate ward spending page
 * Note that this is built to be displayed conditionally once there is an existing
 * ward query string in the URL.
 */
export default function WardSpendingButton() {
    const searchParams = useSearchParams();
    const { push } = useRouter();
    const currentWard = searchParams.get("ward");

    function handleClick() {
        push(`../ward-spending?${searchParams.toString()}`);
    }

    return (
      <button
        onClick={handleClick}
        className="p-6 shadow-lg bg-sky-500 text-white font-bold rounded-md text-center lg:w-96"
      >{`View spending for Ward ${currentWard}`}</button>
    );
}
