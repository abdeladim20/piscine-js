import fs from "fs/promises";

const arg = process.argv[2];

let result = await fs.readFile(arg, "utf8");

let splited = result.split(" ");
let word = "";
let miniWords = [];
for (let i = 0; i < splited.length; i++) {
  word += splited[i];
  miniWords.push(word.slice(word.length / 2, word.length));
  miniWords.push(word.slice(0, word.length / 2));
  word = "";
}

let result1 = "";
for (let i = 0; i < miniWords.length; i++) {
  if (i > 0 && i % 2 == 0) {
    result1 += " ";
  }
  result1 += miniWords[i];
}

console.log(result1);
