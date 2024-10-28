import fs from "fs/promises";

const path = process.argv[2];
let splited = "";

let d = await fs.readdir(path);
let fullName = [];
for (let i = 0; i < d.length; i++) {
  splited = d[i].split("_");
  fullName.push(splited[1].split(".json")[0] + " " + splited[0]);
}
let sorted = fullName.sort((a, b) => a.localeCompare(b));

for (let j = 0; j < sorted.length; j++) {
  console.log(`${j + 1}. ${sorted[j]}`);
}
