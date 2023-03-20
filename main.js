const xlsx = require('xlsx');

const workbook = xlsx.readFile(' .xlsx file path');

const all = JSON.parse(JSON.stringify([].concat(...workbook.SheetNames.map((name) => xlsx.utils.sheet_to_json(workbook.Sheets[name]))), null, 2));
console.log(all);
