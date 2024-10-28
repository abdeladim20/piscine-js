function pick(obj, arr) {
  let newObject = {};
  if (typeof arr === "string") {
    arr = [arr];
  }
  const keysToPick = new Set(arr);
  for (let key of Object.keys(obj)) {
    if (keysToPick.has(key)) {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}

function omit(obj, arr) {
  let newObject = {};
  for (let key of Object.keys(obj)) {
    if (!arr.includes(key)) {
      newObject[key] = obj[key];
    }
  }
  return newObject;
}
