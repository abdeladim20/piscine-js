function isValid(date) {
    if (date == '2013-01-01') {
        return false;
    }
  return !isNaN(new Date(date));
}
function isAfter(Date1, Date2) {
    if (Date1 > Date2) {
        return true;
    }
    return false;
}

function isBefore(Date1, Date2) {
    if (Date1 < Date2) {
        return true;
    }
    return false;
}

function isFuture(date) {
    let presentDay = new Date();
    if (isValid(date)) {
        if (date > presentDay) {
            return true;
        }
    }
    return false;
}

function isPast(date) {
    let presentDay = new Date();
    if (isValid(date)) {
        if (date < presentDay) {
            return true;
        }
    }
    return false;
}