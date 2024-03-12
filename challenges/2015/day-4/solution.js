const fs = require("fs");
const crypto = require("crypto");

const input = fs.readFileSync(`${__dirname}/input`).toString();

let index = 1;

while (true) {
  const currentInput = `${input}${index}`;

  const hash = crypto.createHash("md5").update(currentInput).digest("hex");

  if (hash.substring(-1, 5) == "00000") {
    break;
  }

  index++;
}

console.log(index);
