function ionOut(str){
    const pattern = /\b\w*t(?=ion)\w*\b/g;
    let match = str.match(pattern);
    if (match == null || match == []) {
        return []
    }
    for (let i = 0; i < match.length; i++) {
        match[i] = match[i].replace('ion', '')
    }
    return match;
}