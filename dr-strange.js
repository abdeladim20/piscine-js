function addWeek(date) {
  const epoch = new Date("0001-01-01").getTime();
  const presentDay = date.getTime();
  const daysSinceEpoch = Math.floor((presentDay - epoch) / (1000 * 60 * 60 * 24));
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday", 
    "Friday", 
    "Saturday", 
    "Sunday", 
    "secondMonday", 
    "secondTuesday",
    "secondWednesday", 
    "secondThursday", 
    "secondFriday", 
    "secondSaturday", 
    "secondSunday", 
  ];

  const dayIndex = daysSinceEpoch % 14;

  return weekDays[dayIndex];
}

function timeTravel(object) {
    object.date.setHours(object.hour)
    object.date.setMinutes(object.minute)
    object.date.setSeconds(object.second)
    return object.date;
}