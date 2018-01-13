function getHumidity() {
  // function's logic is not ready yet, so we just write a valid value
  return 78;
}
function getTemp() {
  // Same here, the temprature sensors are not ready yet
  return 35;
}
function showWeather() {
  const weather = {
    temp: getTemp(), // value of 35
    humidity: getHumidity() // value of 78
  };
  return weather;
}

showWeather();
