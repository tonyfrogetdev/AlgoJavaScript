import { readFileSync } from "fs";

const test = readFileSync("test.txt", "utf8");
const final = readFileSync("final.txt", "utf8");

const part1 = (data) => {
  const days = 80;
  const fishs = final.split(",").map(Number);
  for (let day = 0; day < days; day++) {
    const saveLength = fishs.length;
    for (let i = 0; i < saveLength; i++) {
      if (fishs[i] === 0) {
        fishs[i] = 6;
        fishs.push(8);
      } else {
        fishs[i]--;
      }
    }
  }
  return {
    fishs,
    length: fishs.length,
  };
};

//console.log({ test, final });

const part2 = () => {
  const DAYS = 256;
  const ages = final
    .split(",")
    .map(Number)
    .reduce((acc, curr) => {
      acc[curr] += 1;
      return acc;
    }, Array.from({ length: 9 }).fill(0));

  for (let day = 0; day < DAYS; day++) {
    const day0 = ages.shift();
    ages[6] += day0;
    ages.push(day0);
  }

  return {
    ages,
    length: ages.reduce((acc, curr) => acc + curr),
  };
};

console.log({ part2: part2(test) });
