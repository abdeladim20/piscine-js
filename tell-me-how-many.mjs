import fs from "fs/promises";
// import { join } from "path";
// import { argv } from "process";
let join1
const path = process.argv[2]
if (!process.argv[2]) {
    const splited = path.split('/')
    const preJoin = splited.slice(0, splited.length-1)
    join1 = preJoin.join('/')
    }else {
        join1 = path
    }
let d = await fs.readdir(join1);
const result = d.length;
console.log(result);
