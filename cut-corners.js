function multiply(a, b) {
    if ((a == 0) || (b == 0)) {
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
    return a - result;
}

function round(value) {
    let result1 = 0
    if (value >= 0xfffffffff) {
        value = value - 0xfffffffff
        result1 += 0xfffffffff
        let intPart1 = (value - modulo(value, 1));
        let floatPart1 = (value - intPart1);
        if (floatPart1 >= 0.5) {
            return (result1 + intPart1 + 1);
        } else if (floatPart1 <= -0.5) {
            return (result1 + intPart1 - 1);
        }
        return intPart1 + result1;
    }
    let intPart = (value - modulo(value, 1));
    let floatPart = (value - intPart);

    if (floatPart >= 0.5) {
        return (intPart + 1);
    } else if (floatPart <= -0.5) {
        return (intPart - 1);
    }
    return intPart;
}

function ceil(value) {
    let result1 = 0
    if (value >= 0xfffffffff) {
        value = value - 0xfffffffff
        result1 += 0xfffffffff
        let intPart1 = (value - modulo(value, 1));
        if (value > intPart1) {
            return (result1 + intPart1 + 1);
        }
        return intPart1 + result1;
    }
    let intPart = (value - modulo(value, 1));
    if (value > intPart) {
        return (intPart + 1);
    }
    return intPart;
}

function floor(value) {
    let result1 = 0
    if (value >= 0xfffffffff) {
        value = value - 0xfffffffff
        result1 += 0xfffffffff
        let intPart1 = (value - modulo(value, 1));
        if (value < intPart1) {
            return (result1+intPart1 - 1);
        }
        return intPart1+result1;
    }
    let intPart = (value - modulo(value, 1));
    if (value < intPart) {
        return (intPart - 1);
    }
    return intPart;
}

function trunc(value) {
    let result1 = 0
    if (value >= 0xfffffffff) {
        value = value - 0xfffffffff
        result1 += 0xfffffffff
        let intPart1 = (value - modulo(value, 1));
        return intPart1+result1
    }
    return (value - modulo(value, 1));
}