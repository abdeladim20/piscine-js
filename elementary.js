function multiply(a, b) {
    if ((a ==0) || (b == 0)) {
        return 0
    }
    let result = 0;
    let isNegative = false;
    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        isNegative = true;
    }

    a = Math.abs(a);
    b = Math.abs(b);

    for (let i = 0; i < b; i++) {
        result += a;
    }
    if (isNegative) {
        result = -result;
    }
    return result;
}

function divide(a, b) {
    if (b === 0) {
        return Infinity
    }

    let result = 0;
    let isNegative = false;

    if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        isNegative = true;
    }
    a = Math.abs(a);
    b = Math.abs(b);

    while (a >= b) {
        a -= b;
        result++;
    }

    if (isNegative) {
        result = -result;
    }

    return result;
}
function modulo(a, b) {
    if (a > 0 && b > 0 && a < b) {
        return a
    }
    let d = divide(a, b)
    let result = multiply(d, b)
    return a-result;
}