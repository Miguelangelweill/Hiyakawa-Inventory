let XLSX = require("xlsx");
let workbook = XLSX.readFile("./sheets/July_Beverage_Inventory_2024_Luis.xlsx");

let worksheet = workbook.Sheets[workbook.SheetNames[0]];

for (let index = 2; index < 8; index++) {
  const type = worksheet[`A${index}`];
  const country = worksheet[`B${index}`];
  const varietal = worksheet[`C${index}`];
  const producer = worksheet[`D${index}`];
  const vintage = worksheet[`E${index}`];
  const distributor = worksheet[`F${index}`];
  const reported_by = worksheet[`G${index}`];
  const count = worksheet[`H${index}`];
  const finalCount = Object.values(count);
  console.log(finalCount);
}
