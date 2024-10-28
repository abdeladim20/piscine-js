function filterValues(obj, func) {
  let result = {};
  for (let i = 0; i < Object.entries(obj).length; i++) {
    let keys = Object.keys(obj);
    if (func(obj[keys[i]])) {
      result[keys[i]] = obj[keys[i]];
    }
  }
  return result;
}

function mapValues(obj, func) {
  let result = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < Object.entries(obj).length; i++) {
    result[keys[i]] = func(obj[keys[i]]);
  }
  return result;
}

function reduceValues(obj, func, initial) {
  let keys = Object.keys(obj);
  let accumulator;
  if (initial !== undefined) {
    accumulator = initial;
  } else {
    accumulator = obj[keys[0]];
  }
  let startIndex;
  if (initial !== undefined) {
    startIndex = 0;
  } else {
    startIndex = 1;
  }
  for (let i = startIndex; i < keys.length; i++) {
    accumulator = func(accumulator, obj[keys[i]]);
  }
  return accumulator;
}
