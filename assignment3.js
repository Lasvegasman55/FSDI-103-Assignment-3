// Function to convert temperature
function convertTemperature(temp, scale) {
    let convertedTemp;
    if (scale === "C") {
        convertedTemp = (temp * 9/5) + 32;
    } else if (scale === "F") {
        convertedTemp = (temp - 32) * 5/9;
    } else {
        return "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
    return convertedTemp;
}

// Function to display the converted temperature
function displayConvertedTemperature() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const scale = document.getElementById('scale').value.toUpperCase();
    const result = convertTemperature(temp, scale);
    let outputText;

    if (typeof result === "string") {
        outputText = result;
    } else {
        outputText = `The converted temperature is ${result.toFixed(2)} degrees.`;
    }

    document.getElementById('output').innerText = outputText;
    console.log(outputText);
}
