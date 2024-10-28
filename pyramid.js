function pyramid(str, num) {
  let result = "";
  let len = str.length;
  for (let i = 1; i <= num; i++) {
    for (let j = i; j < num; j++) {
        if (len == 1) {
            result += ' ';
        } 
        if (len != 1) {
        for (let i = 0; i < len; i++) {
          result += " ";
        }
        
      }
    }

    for (let k = 1; k < i * 2; k++) {
      result += str;
    }

    if (i != num) {
      result += "\n";
    }
  }

  return result;
}