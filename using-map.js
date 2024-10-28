function citiesOnly(arr) {
  const result = arr.map((cities) => cities.city);
  return result;
}

function upperCasingStates(arr) {
  const result = arr.map((arr1) => capitalize(arr1));
  return result;
}

function capitalize(str) {
  let result = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  return result;
}

function fahrenheitToCelsius(arr) {
  // let celsius = (fahr - 32) / 1.8
  const result = arr.map(
    (arrF) => Math.floor((Number(arrF.replace("°F", "")) - 32) / 1.8) + "°C"
  );
  return result;
}

function trimTemp(arr) {
  let result = arr.map((arr1) => ({
    city: arr1.city,
    region: arr1.region,
    state: arr1.state,
    temperature: arr1.temperature.replace(/\s+/g, ""),
  }));
  return result;
}

function tempForecasts(arr) {
  const result = arr.map(
    (arr1) =>
      Math.floor(
        (Number(arr1.temperature.replace(/\s+/g, "").replace("°F", "")) - 32) /
          1.8
      ) +
      "°Celsius in " +
      capitalize(arr1.city) +
      ", " +
      capitalize(arr1.state)
  );
  return result;
}
