const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

const inputLines = input.split("\n");

const paperCalculated = inputLines.map((input) => {
  const values = input.split("x").map((value) => parseInt(value));
  values.sort((a, b) => {
    return a - b;
  });

  let result = 0;

  result += values[0] * values[1];

  result += values[1] * values[2];

  result += values[2] * values[0];

  result = result * 2;

  result += values[0] * values[1];

  return result;
});

const paperNeeded = paperCalculated.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(paperNeeded);
