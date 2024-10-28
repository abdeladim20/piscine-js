function longWords(arr) {
    const result = (currentValue) => currentValue.length >= 5;
    return arr.every(result);
}

function oneLongWord(arr) {
    const result = (current) => current.length >= 10;
    return arr.some(result);
}

function noLongWords(arr) {
    const result = (current) => current.length < 7;
    return arr.every(result);
}
