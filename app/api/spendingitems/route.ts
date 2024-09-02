import { getSpendingItems } from "@/app/lib/data";
import { NextRequest } from "next/server";
//TODO: Should these constants live in some centrally declared spot,
//  so that we can update them when the dataset grows?
const MAX_YEAR = 2024;
const MIN_YEAR = 2005


/* /api/spendingitems
responds with spending item records.
Filter with "ward", "year", and/or "category" query params
**/
export async function GET(request: NextRequest): Promise<Response> {
  const searchParams = request.nextUrl.searchParams;
  const errors: string[] = [];

  const filters: { ward?: number; year?: number; category?: string } = {};
  if (searchParams?.get("ward")) {
    filters.ward = +searchParams.get("ward")!;
    //error handling for improperly typed query arg
    if (!filters.ward){
      errors.push("Ward out of bounds. Select a number 1-50.");
    }
  }
  if (searchParams?.get("year")) {
    filters.year = +searchParams.get("year")!;
    if (!filters.year) {
      errors.push("Year out of bounds. Current data covers 2005-2024.");
    }
  }
  if (searchParams?.get("category")) {
    filters.category = searchParams.get("category")!;
  }

  //error handling for out of bounds ward/year
  if (filters.ward && (filters.ward < 1 || filters.ward > 50)) {
    errors.push("Ward out of bounds. Select a number 1-50.")
  }
  if (filters.year && (filters.year < MIN_YEAR || filters.year > MAX_YEAR)) {
    errors.push("Year out of bounds. Current data covers 2005-2024.")
  }
  if(errors.length) {
    return Response.json({errors}, {status: 400});
  }

  //fetch on good request
  const spendingItems = await getSpendingItems(filters);
  return Response.json({ spendingItems });
}
