function triangle(str, num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            result += str
            }
            if (i != num) {

                result += '\n'
            }
    }
    return result
}