let XLSX = require("xlsx");
let fs = require("fs");
let workbook = XLSX.readFile("./sheets/July_Beverage_Inventory_2024_Luis.xlsx");

let worksheet = workbook.Sheets[workbook.SheetNames[0]];

function getCounts(sheets) {
 let id = 0;
  for (let i = 2; i < 500; i++) {
    const type = sheets[`A${i}`];
    const country = sheets[`B${i}`];
    const varietal = sheets[`C${i}`];
    const producer = sheets[`D${i}`];
    const vintage = sheets[`E${i}`];
    const distributor = sheets[`F${i}`];
    const reported_by = sheets[`G${i}`];
    const count = sheets[`H${i}`];
    let { t, v, w } = count ?? { t: 0, v: 0, w: 0 };
    id++

    console.log(producer.v, varietal.v,type.v, v, "this is the id,",id );
  }
}
getCounts(worksheet);
