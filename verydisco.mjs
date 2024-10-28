let arg = process.argv[2];

let splited = arg.split(" ");
let word ='';
let miniWords = []
for (let i = 0; i < splited.length; i++) {
    word += splited[i]
    miniWords.push(word.slice(Math.ceil(word.length/2), (word.length)))
    miniWords.push(word.slice(0, Math.ceil(word.length/2)))
    word = ''
}

let result = ''
for(let i = 0; i < miniWords.length; i++) {
    if (i > 0 && i % 2 == 0) {
        result += ' '
    }
    result += miniWords[i]
}

console.log(result);