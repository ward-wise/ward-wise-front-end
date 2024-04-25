"use server";

import { WardContactInfo, WardSpendingItem } from "./definitions";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function getWardContactInfo(ward:number):Promise<WardContactInfo> {
    const wardContactInfo = await prisma.ward_contact_info.findUnique({
        where: {
            ward,
        },
    })
    wardContactInfo.websites = JSON.parse(wardContactInfo.websites);
    return wardContactInfo;
}

export async function getWardSpendingItems(ward: number, year: number): Promise<WardSpendingItem[]> {
    const spendingItems = await prisma.ward_spending_item.findMany({
        where: {
            ward, year
        },
    })
    return spendingItems
}
