const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

const doubleCharRegex = /([a-z])\1{1}/g;

const vowelRegex = /([aeiou]){1}/g;

const forbiddenStringRegex = /(ab)+|(cd)+|(pq)+|(xy)+/g;

const lines = input.split("\n");

const niceLines = lines.filter((line) => {
  const forbiddenStrings = forbiddenStringRegex.test(line);
  if (forbiddenStrings) return false;

  const vowels = line.match(vowelRegex);
  if (vowels == null || vowels.length < 3) return false;

  const doubleChars = doubleCharRegex.test(line);
  console.log(line, doubleChars);
  if (!doubleChars) return false;

  return true;
});

console.log(niceLines.length);
