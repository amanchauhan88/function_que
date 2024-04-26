
const testTemperatures = [0, 25, 100, -10, -40];


function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


testTemperatures.forEach(celsius => {
    const fahrenheit = celsiusToFahrenheit(celsius);
    console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
});
