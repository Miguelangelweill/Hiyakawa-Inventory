let XLSX = require("xlsx");
let fs = require("fs");
const { Console } = require("console");
const CurrentWorkbook = XLSX.readFile("./sheets/CurrentInventory.xlsx");
const MarginWorkbook = XLSX.readFile("./sheets/MarginEdgeInventory.xlsx");
let worksheet = CurrentWorkbook.Sheets[CurrentWorkbook.SheetNames[0]];
let MarginWorkSheet = MarginWorkbook.Sheets[MarginWorkbook.SheetNames[0]];

let type,
  country,
  varietal,
  producer,
  vintage,
  distributor,
  reported_by,
  count,
  item,
  price,
  prevCount,
  currentCount = 0;


function getBeverage(beverages) {
 let id = 0;
  for (let i = 2; i < 200; i++) {
   type = beverages[`A${i}`];
   country = beverages[`B${i}`];
   varietal = beverages[`C${i}`];
   producer = beverages[`D${i}`];
   vintage = beverages[`E${i}`];
   distributor = beverages[`F${i}`];
   count = beverages[`H${i}`];
    let { t, v, w } = count ?? { t: 0, v: 0, w: 0 };
   let varietal2 = ({ t, v, w } = varietal ?? { t: 0, v: 0, w: 0 }); 
    id++
    console.log(type.v);
  //  console.log(beverages);

  }

}
getBeverage(worksheet);
