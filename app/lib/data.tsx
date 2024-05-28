"use server";

import prisma from "./client";

import {
  WardContactInfo,
  WardSpendingItem,
  SpendingItemTotal,
  WebsiteType,
} from "./definitions";

// WARD CONTACT INFO ***********************************

/* getAllWardContactInfo:
fetches all ward contact info data from db **/
export async function getAllWardContactInfo(): Promise<WardContactInfo[]> {
  const wardContactInfos = await prisma.ward_contact_info.findMany();
  for (const row of wardContactInfos) {
    row.websites = JSON.parse(row.websites as string);
  }

  return wardContactInfos as any;
}

/* getWardContactInfo:
fetches passed ward's contact info data from db **/
export async function getWardContactInfo(
  ward: number
): Promise<WardContactInfo> {
  const wardContactInfo = await prisma.ward_contact_info.findUnique({
    where: {
      ward,
    },
  });
  if (wardContactInfo)
    wardContactInfo.websites = JSON.parse(wardContactInfo.websites as string);
  //TODO: fix type casting as any here
  return wardContactInfo as any;
}

// SPENDING ITEMS ******************************

/* getSpendingItems:
fetches spending item records from db;
optionally pass {ward, year, category} args
for filtering **/
export async function getSpendingItems({
  ward,
  year,
  category,
}: {
  ward?: number;
  year?: number;
  category?: string | undefined;
}): Promise<WardSpendingItem[]> {
  const spendingItems = await prisma.ward_spending_item.findMany({
    select: {
      id: true,
      ward: true,
      year: true,
      item: true,
      category: true,
      location: true,
      cost: true,
    },
    where: {
      ward,
      year,
      category,
    },
  });
  return spendingItems;
}

/* getSpendingItemTotals:
returns aggregate spending totals by category, from db **/
export async function getSpendingItemTotals(
  ward: number,
  year: number
): Promise<SpendingItemTotal[]> {
  const spendingItemTotals: SpendingItemTotal[] = await prisma.$queryRaw`
    SELECT SUM(cost) AS total, category
    FROM ward_spending_item
    WHERE ward = ${ward} AND year = ${year}
    GROUP BY category
    ORDER BY total DESC
    `;
  for (const item of spendingItemTotals) {
    item.total = Number(item.total);
  }
  return spendingItemTotals;
}
