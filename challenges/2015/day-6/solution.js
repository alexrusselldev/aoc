const fs = require("fs");

const input = fs.readFileSync(`${__dirname}/input`).toString();

const instructionLines = input.split("\n");

const instructions = instructionLines.map((line) => {
  const sections = line.split(" ");

  if (sections.length > 4) {
    sections.shift();
  }

  return {
    action: sections[0],
    start: {
      x: sections[1].split(",")[0],
      y: sections[1].split(",")[1],
    },
    end: {
      x: sections[3].split(",")[0],
      y: sections[3].split(",")[0],
    },
  };
});

const lights = Array(1000)
  .fill(0)
  .map((x) => Array(1000).fill(false));

for (const instruction of instructions) {
  const startIndex = instruction.start.x;
  const endIndex = instruction.end.x;
  const innerStartIndex = instruction.start.y;
  const innerEndIndex = instruction.end.y;

  switch (instruction.action) {
    case "on":
      for (let i = startIndex; i <= endIndex; i++) {
        lights[i] = lights[i].map((light, index) => {
          if (index < innerStartIndex || index > innerEndIndex) {
            return light;
          }

          return true;
        });
      }
      break;

    case "off":
      for (let i = startIndex; i <= endIndex; i++) {
        console.log(lights[i]);
        lights[i] = lights[i].map((light, index) => {
          if (index < innerStartIndex || index > innerEndIndex) {
            return light;
          }

          return false;
        });
        console.log(lights[i]);
      }
      break;

    case "toggle":
      for (let i = startIndex; i <= endIndex; i++) {
        lights[i] = lights[i].map((light, index) => {
          if (index < innerStartIndex || index > innerEndIndex) {
            return light;
          }

          return !light;
        });
      }
      break;
  }
}
console.log(lights);
const lightsSummed = lights
  .map((row) => {
    return row.filter((item) => item).length;
  })
  .reduce((partialSum, a) => partialSum + a, 0);
