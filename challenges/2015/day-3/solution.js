const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

const directions = input.split("");
const visited = ["00"];
let xpos = 0;
let ypos = 0;
directions.forEach((direction) => {
  switch (direction) {
    case "^":
      ypos++;
      break;
    case "v":
      ypos--;
      break;
    case ">":
      xpos++;
      break;
    case "<":
      xpos--;
      break;
  }
  visited.push(`${xpos}${ypos}`);
});

uniqueHouses = [...new Set(visited)];

console.log(uniqueHouses.length);
