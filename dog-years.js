function dogYears(name, age) {
    let ageInYears = 0;
  if (name == 'earth') {
    ageInYears = (age / 31557600) * 7;
    return parseFloat(ageInYears.toFixed(2))
  }else if (name == 'mercury') {
    ageInYears = (age / (0.2408467 * 31557600)) * 7;
    return parseFloat(ageInYears.toFixed(2))
  }else if (name == 'venus') {
    ageInYears = (age / (0.61519726 * 31557600)) * 7;
    return parseFloat(ageInYears.toFixed(2))
  }else if (name == 'mars') {
    ageInYears = (age / (31557600 * 1.8808158)) * 7;
    return parseFloat(ageInYears.toFixed(2))
  }else if (name == 'jupiter') {
    ageInYears = (age / (31557600 * 11.862615)) * 7;
    return parseFloat(ageInYears.toFixed(2))
  }else if (name == 'saturn') {
    ageInYears = (age / (31557600 * 29.447498)) * 7;
    return parseFloat(ageInYears.toFixed(2))
  }else if (name == 'uranus') {
    ageInYears = (age / (31557600 * 84.016846)) * 7;
    return parseFloat(ageInYears.toFixed(2))
  }else if (name == 'neptune') {
    ageInYears = (age / (31557600 * 164.79132)) * 7;
    return parseFloat(ageInYears.toFixed(2));
  }
}