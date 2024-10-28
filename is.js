is.num = function (arg) {
    if (typeof (arg) == 'number') {
        return true
    }
    return false
}

is.nan = function (arg) {
    if (Number.isNaN(arg)) {
        return true
    }
    return false
}

is.str = function (value) {
    if (typeof (value) == 'string') {
        return true
    }
    return false
}

is.bool = function (value) {
    if (typeof (value) == 'boolean') {
        return true
    }
    return false
}

is.undef = function (value) {
    if (typeof (value) == 'undefined') {
        return true
    }
    return false
}

is.def = function (value) {
    if (typeof (value) !== 'undefined') {
        return true
    }
    return false
}

is.arr = function (value) {
    if (Array.isArray(value)) {
        return true
    }
    return false
}

is.obj = function (value) {
    if ((typeof (value) === 'object') && (value !== null) && (Array.isArray(value) == false)) {
        return true
    }
    return false
}

is.fun = function (value) {
    if (typeof (value) == 'function') {
        return true
    }
    return false
}

is.truthy = function (value) {
    if (value) {
        return true
    }
    return false
}

is.falsy = function (value) {
    if (value) {
        return false
    }
    return true
}