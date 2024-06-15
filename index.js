let XLSX = require("xlsx");
let workbook = XLSX.readFile("./sheets/July_Beverage_Inventory_2024_Luis.xlsx");

let worksheet = workbook.Sheets[workbook.SheetNames[0]];

function getCounts(){for (let i = 2; i < 8; i++) {

  const type = worksheet[`A${i}`];
  const country = worksheet[`B${i}`];
  const varietal = worksheet[`C${i}`];
  const producer = worksheet[`D${i}`];
  const vintage = worksheet[`E${i}`];
  const distributor = worksheet[`F${i}`];
  const reported_by = worksheet[`G${i}`];
  const count = worksheet[`H${i}`];
  let {t,v,w} = count ?? {t:0,v:0,w:0};
  console.log({
    t,w,v,
    producer,
    varietal,
    vintage,
    type
  });
}};
getCounts();