function first(arg) {
    return arg[0];
}

function last(arg) {
    return arg[arg.length-1];
}

function kiss(arg) {
    const result = [arg[arg.length-1], arg[0]];
    return result;
}