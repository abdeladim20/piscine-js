function get(src, path) {
    let result = src;
    path = path.split('.');
    for (let i = 0; i < path.length; i++) {
        if (result[path[i]] != undefined) {
            result = result[path[i]]
        }else {
            return undefined
        }
    }
    
    return result;
}