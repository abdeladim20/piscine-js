const dnaToRna = {
    G : 'C',
    C : 'G',
    T : 'A',
    A : 'U'
}

const rnaToDna = {
    C : 'G',
    G : 'C',
    A : 'T',
    U : 'A'
}

function RNA(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (dnaToRna[str[i]]){
            result += dnaToRna[str[i]];
        }
    }
    return result;
}

function DNA(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (rnaToDna[str[i]]){
            result += rnaToDna[str[i]];
        }
    }
    return result;
}