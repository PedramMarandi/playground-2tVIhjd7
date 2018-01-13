# Welcome!

This Node.js template lets you get started quickly with a simple one-page playground.

```javascript runnable
console.log('Hello World!');
```

```javascript runnable
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

console.log(showWeather());
```

# Advanced usage

If you want a more complex example (external libraries, viewers...), use the [Advanced Node.js template](https://tech.io/select-repo/442)
