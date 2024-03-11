const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

let floorNumber = 0;
let enteredBasement = false;

input.split("").forEach((char, index) => {
  if (char == "(") floorNumber++;
  if (char == ")") floorNumber--;

  if (floorNumber < 0 && !enteredBasement) {
    console.log(index + 1);
    enteredBasement = true;
  }
});
