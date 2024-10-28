function filterKeys(obj, func) {
  let result = {};
  for (let i = 0; i < Object.entries(obj).length; i++) {
    const keys = Object.keys(obj);
    if (func(keys[i])) {
      result[keys[i]] = obj[keys[i]];
    }
  }
  return result;
}

function mapKeys(obj, func) {
  let result = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    result[func(keys[i])] = obj[keys[i]];
  }
  return result;
}

function reduceKeys(obj, func, initial) {
    let keys = Object.keys(obj);
    let accumulator = initial !== undefined ? initial : keys[0];
    let startIndex = initial !== undefined ? 0 : 1;
    for (let i = startIndex; i < keys.length; i++) {
      accumulator = func(accumulator, keys[i]);
    }
    return accumulator;
  }