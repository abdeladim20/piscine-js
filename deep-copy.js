function deepCopy(value) {
  if (Array.isArray(value)) {
    return value.map(deepCopy);
  } else if (value instanceof RegExp) {
    return new RegExp(value);
  } else if (value !== null && typeof value === "object") {
    const copy = {};
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        copy[key] = deepCopy(value[key]);
      }
    }
    return copy;
  } else {
    return value;
  }
}
