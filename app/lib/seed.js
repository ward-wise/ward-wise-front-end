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
  });

  const wardCount = await prisma.ward_contact_info.aggregate({
    _count: { ward: true }
  });
  console.dir(wardCount, { depth: null });
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
