function countLeapYears(date) {
  let counter = 0;
  const year = date.getFullYear();
  for (let i = 1; i < year; i++) {
    if (leapYear(i)) {
      counter++;
    }
  }
  return counter;
}

function leapYear(i) {
  const ndate = new Date(i, 2, 0);
  let days = ndate.getDate();
  if (days == 29) {
    return true;
  }
  return false;
}
