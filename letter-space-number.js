function letterSpaceNumber(str) {
    const pattern = /[a-zA-Z]\s\d(?!\d)(?![a-zA-Z])/g;
    let result = str.match(pattern);
    if (result == '' || result == null) {
        return [];
    }
    return result;
}