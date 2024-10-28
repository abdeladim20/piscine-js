function sameAmount(str, rex1, rex2) {
    const match1 = str.match(new RegExp(rex1.source, 'g'));
    const match2 = str.match(new RegExp(rex2.source, 'g'));
    let counter1 = 0;
    let counter2 = 0;
        if (match1) {
            counter1 = match1.length;
        }
        if (match2) {
            counter2 = match2.length;
        }
    return counter1 === counter2
}