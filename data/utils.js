const { parse } = require("csv-parse/sync");
const fs = require("fs/promises");

async function getDataFromCSV(path) {
  const input = await fs.readFile(path, 'utf8');
  const records = parse(input, { columns: true, relax_quotes: true, skip_empty_lines: true });
  return records;
}

/* cleanCSVStringToJSON:
Converts a string like the "websites" column in ward_contact_info.csv
into properly formatted JSON
**/
function cleanCSVStringToJSON(websiteString) {
  if (!websiteString) return null;

  const extractKeys = /\w+?(?=: )/g;
  const extractValues = /(?<=: ).+?(?=[,}])/g;

  const keys = websiteString.match(extractKeys);
  const values = websiteString.match(extractValues);

  const keyVals = {};
  for (let i = 0; i < keys.length; i++) {
    keyVals[keys[i]] = values[i];
  }

  return JSON.stringify(keyVals);
}

module.exports = { getDataFromCSV, cleanCSVStringToJSON };
