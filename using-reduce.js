function adder(arr, n) {
  if (n == undefined) {
    n = 0;
  }
  return arr.reduce(add, n);
}

function add(sum, num) {
  return sum + num;
}

function sumOrMul(arr, n) {
  if (n == undefined) {
    n = 0;
  }
  return arr.reduce(EvenOrOdd, n);
}

function EvenOrOdd(sum, num) {
  if (num % 2 == 0) {
    return sum * num;
  } else {
    return sum + num;
  }
}

function funcExec(arr, n) {
  if (n === undefined) {
    n = 0;
  }
  return arr.reduce((accumulator, currentFunction) => {
    return currentFunction(accumulator);
  }, n);
}
