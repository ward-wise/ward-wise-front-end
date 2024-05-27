"use server";

import prisma from "./client";

import {
  WardContactInfo,
  WardSpendingItem,
  SpendingItemTotal,
  WebsiteType,
} from "./definitions";

// WARD CONTACT INFO ***********************************
//FIXME: This has errors now? Maybe from moving the Prisma client initialization elswhere?
//      But no other Prisma fetch methods failed, and this query didn't change at all!
export async function getWardContactInfo(
  ward: number
): Promise<WardContactInfo> {
  const wardContactInfo = await prisma.ward_contact_info.findUnique({
    where: {
      ward,
    },
  });
  if(wardContactInfo)
    wardContactInfo.websites = JSON.parse(wardContactInfo.websites as string);
  return wardContactInfo as any;
}

// WARD SPENDING ITEMS ******************************

/* getAllSpendingItems:
fetches all spending items from db **/
export async function getAllSpendingItems(): Promise<WardSpendingItem[]> {
  const spendingItems = await prisma.ward_spending_item.findMany({
    select: {
      id: true,
      ward: true,
      year: true,
      item: true,
      category: true,
      location: true,
      cost: true,
    }
  });
  return spendingItems;
}

/* getWardSpendingItems:
fetches ward/year spending item records from db;
optionally pass category (string) arg for further filtering **/
export async function getWardSpendingItems(
  ward: number,
  year: number,
  category?: string | undefined
): Promise<WardSpendingItem[]> {
  const spendingItems = await prisma.ward_spending_item.findMany({
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
