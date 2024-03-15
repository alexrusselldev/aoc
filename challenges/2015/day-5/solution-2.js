const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

const lines = input.split("\n");

const niceLines = lines.filter((line) => {
  const doubleChars = [];
  for (const [index, char] of line.split("").entries()) {
    doubleChars.push(`${char}${line[index + 1]}`);
  }

  for (const [index, doubleChar] of doubleChars.slice(0, -1).entries()) {
    const charsToCompare = doubleChars.slice(index + 2, -1);

    if (charsToCompare.includes(doubleChar)) break;

    if (charsToCompare.length == 0) return false;
  }

  for (const [index, char] of line.split("").entries()) {
    if (char == line[index + 2]) {
      return true;
    }
  }

  return false;
});

console.log(niceLines.length);
