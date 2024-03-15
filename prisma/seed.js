const { getDataFromCSV, cleanCSVStringToJSON } = require("../data/utils");
const { PrismaClient } = require("@prisma/client");


const prisma = new PrismaClient();

async function seedWardContactInfoData() {
  const wardContactData =
    await getDataFromCSV(process.cwd() + '/data/ward_contact_info.csv');
  for (const w of wardContactData) {
    w.ward = +w.ward;
    w.websites = cleanCSVStringToJSON(w.websites);
  }
  await prisma.ward_contact_info.createMany({
    data: wardContactData
  });

  const aggregate = await prisma.ward_contact_info.aggregate({
    _count: { ward: true }
  });
  console.log("inserted", aggregate._count.ward, "ward_contact_info records");
}

//call DB seending functions here
async function main() {
  await seedWardContactInfoData();
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
