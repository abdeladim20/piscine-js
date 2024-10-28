function invert(obj) {
  var invertObj = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    invertObj[obj[key]] = key;
  }
  return invertObj;
}
