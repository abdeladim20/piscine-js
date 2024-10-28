function filter(arr, func) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

function reject(arr, func){
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(func(arr[i], i, arr))) {
            result.push(arr[i]);
        }
    }
    return result;
}

function partition(arr, func) {
    let result1 = [];
    let result2 = [];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if ((func(arr[i], i, arr))) {
            result1.push(arr[i]);
        }else {
            result2.push(arr[i]);
        }
    }
    result.push(result1);
    result.push(result2);
    return result;
}
