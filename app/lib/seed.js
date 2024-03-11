const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.ward_contact_info.create({
    data: {
      ward: 47,
      alderperson: "Matt Martin",
      email: "info@ward47.gov",
      phone: "5555555555",
      websites: undefined,
    }
  })

  const allWardInfo = await prisma.ward_contact_info.findMany();
  console.dir(allWardInfo, {depth: null});
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
