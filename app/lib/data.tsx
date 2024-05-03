"use server";

import prisma from "./client";

import {
  WardContactInfo,
  WardSpendingItem,
  SpendingItemTotal,
} from "./definitions";

// WARD CONTACT INFO ***********************************

export async function getWardContactInfo(
  ward: number
): Promise<WardContactInfo> {
  const wardContactInfo = await prisma.ward_contact_info.findUnique({
    where: {
      ward,
    },
  });
  wardContactInfo.websites = JSON.parse(wardContactInfo.websites);
  return wardContactInfo;
}

// WARD SPENDING ITEMS ******************************

/* getWardSpendingItems:
fetches spending item records from db;
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
      category
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
