function isFriday(date) {
    let day = date.getDay()
    return day === 5;
}


function isWeekend(date) {
    let day = date.getDay()
    return (day === 6 || day === 0)
}


function isLeapYear(date) {
   let x = new Date(date)
   let y = new Date(date)
   if (x.getFullYear() < 1900){
        // x.setMonth(10)
        // x.setDate(30)
        // y.setMonth(0)
        // y.setDate(0) 
        return true
    }else {
        x.setMonth(11) 
        y.setMonth(0)
        x.setDate(31) 
        y.setDate(1)
    }
    return (((x-y)/(1000*3600*24)) == 365)
}

function isLastDayOfMonth(date) {
    let x = new Date(date)
    let y = date.getDate()
    x.setDate(y+1)
    return (date.getMonth() != x.getMonth())
}


console.log(isLeapYear(new Date('1804-02-01')))
console.log(isLeapYear(new Date('2008-02-01')))
console.log(isLeapYear(new Date('2216-02-01')))
console.log(!isLeapYear(new Date('1993-02-01')))
console.log(!isLeapYear(new Date('1999-02-01')))