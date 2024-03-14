"use server";

import { WardContactInfo } from "./definitions";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export async function getWardContactInfo(ward:number):Promise<WardContactInfo> {
    const wardContactInfo = await prisma.ward_contact_info.findUnique({
        where: {
            ward,
        },
    })
    return wardContactInfo;
}
