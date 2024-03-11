const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

let floorNumber = 0;

input.split("").forEach((char) => {
  if (char == "(") floorNumber++;
  if (char == ")") floorNumber--;
});

console.log(floorNumber);
