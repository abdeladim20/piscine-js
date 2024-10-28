function map(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i, arr));
  }
  return result;
}

function flatMap(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mapped = func(arr[i], i, arr);
    if (Array.isArray(mapped)) {
      result.push(...mapped);
    } else {
      result.push(mapped);
    }
  }
  return result;
}
