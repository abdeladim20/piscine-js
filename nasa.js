function nasa(number) {
    let result = ''
    for (let i = 1; i <= number; i++) {
        if ((i % 3 == 0) && (i % 5 == 0) ) {
            result += ' NASA';
        }else if (i % 3 == 0) {
            result += ' NA';
        }else if (i % 5 == 0) {
            result += ' SA';
        }else {
            if (i != 1) {

                result += ' '
                }
            result += i;
        }
    }
    return result;
}