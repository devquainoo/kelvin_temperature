// Represents the temperature in kelvin scale
const kelvin = 0;
// converts kelvin to celcius
let celcius = kelvin - 273;
//converts celcius to fahrenheit 
let fahrenheit = celcius * (9 / 5) + 32;
// rounds down to the nearest lower in integer 
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`);