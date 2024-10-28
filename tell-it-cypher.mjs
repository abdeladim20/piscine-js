import fs from "fs/promises";

let file = process.argv[2];
let code = process.argv[3];
let fileName = process.argv[4] || "";

let res1;
let res2;
if (code == "encode") {
  res1 = await fs.readFile(file, "base64");
  if (fileName == "") {
    fileName = "cypher.txt";
  }
  await fs.writeFile(fileName, res1.toString());
} else {
  res2 = await fs.readFile(file, "utf8");
  let decodeData = Buffer.from(res2, 'base64').toString('utf8');
  if (fileName == "") {
    fileName = "clear.txt";
  }
  await fs.writeFile(fileName, decodeData);
}
