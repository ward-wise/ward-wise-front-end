"use server";

import {
  WardContactInfo,
  WardSpendingItem,
  SpendingItemTotal,
} from "./definitions";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

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

export async function getWardSpendingItems(
  ward: number,
  year: number
): Promise<WardSpendingItem[]> {
  const spendingItems = await prisma.ward_spending_item.findMany({
    where: {
      ward,
      year,
    },
  });
  return spendingItems;
}

export async function getSpendingItemTotals(
  ward: number,
  year: number
): Promise<SpendingItemTotal[]> {
  const spendingItemTotals = await prisma.$queryRaw`
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
