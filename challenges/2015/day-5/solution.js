const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

const forbiddenStrings = ["ab", "cd", "pq", "xy"];
const vowels = ["a", "e", "i", "o", "u"];

const lines = input.split("\n");

const niceLines = lines.filter((line) => {
  for (const string of forbiddenStrings) {
    if (line.includes(string)) return false;
  }

  const vowelsInLine = line.split("").filter((char) => {
    return vowels.includes(char);
  });

  if (vowelsInLine.length < 3) return false;

  for (const [index, char] of line.split("").entries()) {
    if (char == line[index + 1]) {
      return true;
    }
  }

  return false;
});

console.log(niceLines.length);
