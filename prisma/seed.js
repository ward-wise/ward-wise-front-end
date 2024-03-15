const { parse } = require("csv-parse/sync");
const fs = require("fs/promises");
const { PrismaClient } = require("@prisma/client");

async function getWardContactInfoFromCSV() {
  const input = await fs.readFile(process.cwd() + '/data/ward_contact_info.csv', 'utf8');
  const records = parse(input, { columns: true, skip_empty_lines: true });
  console.log(records);
}


const prisma = new PrismaClient();

async function main() {
  const wardContactData = await getWardContactInfoFromCSV();
  await prisma.ward_contact_info.createMany({
    data: wardContactData
  });

  const wardCount = await prisma.ward_contact_info.aggregate({
    _count: { ward: true }
  });
  console.log("inserted", wardCount, "ward_contact_info records");

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
