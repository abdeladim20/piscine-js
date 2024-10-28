const firstDayWeek = (numberOfWeek, year) => {
    if (numberOfWeek == 1 ) {
        return '01-01-'+year;
    }
    let date = new Date(year)
    let t = date.getTime() + ((numberOfWeek-1)*7*24*60*60*1000);
    let k = new Date(t);
    console.log(k);
    while (k.getDay() !== 1 ) {
        k.setDate(k.getDate()-1);
    }
    return k.toISOString().split('T')[0].split('-').reverse().join('-');
}