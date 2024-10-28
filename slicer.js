function slice(str, start, end) {
    let result = []
    if (end == undefined) {
        end = str.length
    }
    if (start < 0) {
        start = start + str.length
    }
    if (end < 0) {
        end = end + str.length
    }
    for (let i = start; i < end; i++) {

        if (typeof(str) == 'object') {
            result.push(str[i])  
        
        }else {
            result += str[i];
        }
    }
    return result;
}
