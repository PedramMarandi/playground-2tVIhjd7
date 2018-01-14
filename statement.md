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

```javascript runnable
function aboutMe(withAge) {
    let name = "Pedram Marandi";
    if(withAge === true) {
        name += " 22";
        console.log("~~ withAge is true and block has Executed");
    }
    if(withAge === false ) {
        console.log("~~ withAge is false and there is not any name")
    }

    return name;
}
console.log(aboutMe(true));
```

```javascript runnable
   function square(a) {
       return a * a;
   }

   console.log(square(5));
```

```javascript runnable
    let result = 0;
    for(let i = 0; i <= 10; i++) {
        console.log("~ current value of result is " + result);
        result = result + i;
    }

    return result;
```

```javascript runnable
    function printMyName() {
        var myName = 'Pedram Marandi';
        console.log(' Inside the function myName value is ~>' + myName);
    }

    console.log('Outside the function myName value is ~>' + myName);
```

```javascript runnable
    var globalVariable = 'I am a global var';
    function accessToGlobal() {
        console.log('Global variable is accessible within the inner functions ~> ' + globalVariable);
    }

    console.log('Global variable is accessible everywhere ~> ' + globalVariable);
```

```javascript runnable
    function myFunction() {
        console.log('This is the first function');
    }
```

```javascript runnable
    function myFunction() {
        console.log('This is the first function');
    }
    myFunction();
```

# Advanced usage

If you want a more complex example (external libraries, viewers...), use the [Advanced Node.js template](https://tech.io/select-repo/442)
