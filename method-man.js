function words(str) {
  let result = str.split(" ");
  return result;
}

function sentence(arr) {
  let result = arr.join(" ");
  return result;
}

function yell(str) {
  return str.toUpperCase();
}

function whisper(str) {
  let result = "*" + str.toLowerCase() + "*";
  return result;
}

function capitalize(str) {
  let result = str.toLowerCase();
  return result[0].toUpperCase() + result.slice(1);
}