function cutFirst(str) {
    return str.slice(2)
}

function cutLast(str) {
    return str.slice(0, str.length-2)
}

function cutFirstLast(str) {
    return str.slice(2, str.length-2)
}

function keepFirst(str) {
    return str.slice(0, 2)
}

function keepLast(str) {
    return str.slice(str.length-2)
}

function keepFirstLast(str) {
    let result = ''
    if (str.length >= 4) {
        result = keepFirst(str) + keepLast(str)
    }else {
        return str
    }
    return result
}