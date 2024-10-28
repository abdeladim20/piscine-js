function reverse(arr){
    let result = []
    if (typeof(arr) == 'object') {
        for (let i = arr.length-1; i >= 0; i--) {
            result.push(arr[i])
        }
        return result
    }else if (typeof(arr) == 'string') {
        let result1 = ''
        for (let i = arr.length-1; i >= 0; i--) {
            result1 += arr[i]
        }
        return result1
    }
}