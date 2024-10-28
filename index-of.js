function indexOf(arr, value, num) {
    let i = 0
    if (num != undefined) {
        i = num
    }
    for (; i < arr.length ; i++) {
        if (value == arr[i]) {
            return i
        }
    }
    return -1
}

function lastIndexOf(arr, value, num) {
    let i = arr.length
    if (num != undefined) {
        i = num
    }
    for (; i >= 0; i--) {
        if (arr[i] == value) {
            return i
        }
    }
    return -1;

}

function includes(arr, value, num) {
    let i = 0
    if (num != undefined) {
        i = num
    }
    for (let i = 0; i < arr.length; i++) {
        if (value == arr[i]) {
            return true
        }
    }
    return false
}