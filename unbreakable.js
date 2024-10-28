function split(str, s) {
  let result = [];
  let word = "";
  if (str == '') {
    return ['']
  }
  if (s == "") {
    for (let i = 0; i < str.length; i++) {
      result.push(str[i]);
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      if (s == str.substr(i, s.length)) {
        result.push(word);
        word = "";
        i = i + s.length -1;
        continue;
      }

      word += str[i];
    }
    result.push(word);
  }
  return result;
}

function join(arr, j) {
  let result = ''
  let sep = j || ''
  if (arr == []){
    return ''
  }
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]
    if (i != arr.length-1) {
      result+= sep
    }
  }
  return result
}