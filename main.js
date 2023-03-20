const xlsx = require('xlsx');

const workbook = xlsx.readFile('/home/jib/Desktop/rethink billing/pytho/Regional Center Oct 2022.xlsx');

const all = JSON.parse(JSON.stringify([].concat(...workbook.SheetNames.map((name) => xlsx.utils.sheet_to_json(workbook.Sheets[name]))), null, 2));
console.log(all);
