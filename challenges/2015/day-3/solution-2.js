const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

const directions = input.split("");
const visited = ["0:0"];
const pos = {
  santaX: 0,
  santaY: 0,
  roboX: 0,
  roboY: 0,
};
directions.forEach((direction, index) => {
  const active = index % 2 == 0 ? "santa" : "robo";

  switch (direction) {
    case "^":
      pos[`${active}Y`]++;
      break;
    case "v":
      pos[`${active}Y`]--;
      break;
    case ">":
      pos[`${active}X`]++;
      break;
    case "<":
      pos[`${active}X`]--;
      break;
  }
  visited.push(`${pos[`${active}X`]}:${pos[`${active}Y`]}`);
});

uniqueHouses = [...new Set(visited)];

console.log(uniqueHouses.length);
