import fs from "fs/promises";

let path = process.argv[2];

let d = await fs.readdir(path);
let newPath;
let content;
let splited;
let fullName = [];
let content1;
for (let i = 0; i < d.length; i++) {
  newPath = `${path}/${d[i]}`;
  content = await fs.readFile(newPath, "utf8");
  content1 = JSON.parse(content);
  if (content1["answer"] == "yes") {
    splited = d[i].split("_");
    fullName.push(splited[1].split(".json")[0] + " " + splited[0]);
  }
}

let sorted = fullName.sort((a, b) => a.localeCompare(b));
// for (let j = 0; j < sorted.length; j++) {
//   await fs.appendFile("vip.txt", `${j + 1}. ${sorted[j]}` + '\n');
// }

let data = "";

for (let i = 0; i < sorted.length; i++) {
  data += `${i + 1}. ${sorted[i]}`;
  if (i != sorted.length-1) {
    data += '\n'
  }
}
fs.writeFile("vip.txt", data);
