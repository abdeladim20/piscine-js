function chunk(arr, size) {
    let result = [];
    if (size == 0) {
        return arr
    }
    if (arr == []) {
        return [[]]
    }
    for (let i = 0; i < arr.length; i++) {
        let counter = 1;
        if (counter <= size) {
            result.push(arr.slice(i, i+size))
            counter = 1
            i+=size-1
        }else {
            counter++
        }
    }
    return result;
}