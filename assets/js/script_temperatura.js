// Get DOM elements
const temperatureInput = document.getElementById('temperature');
const temperatureOneSelect = document.getElementById('temperature_one');
const temperatureTwoSelect = document.getElementById('temperature_two');
const resultOutput = document.getElementById('result');
const convertButton = document.getElementById('convert');

// Conversion function
function convertTemperature() {
  // Get selected units and input temperature value
  const fromUnit = temperatureOneSelect.value;
  const toUnit = temperatureTwoSelect.value;
  const temperature = Number(temperatureInput.value);

  // Convert temperature to Celsius
  let celsius = temperature;
  if (fromUnit === 'kelvin') {
    celsius = temperature - 273.15;
  } else if (fromUnit === 'fahrenheit') {
    celsius = (temperature - 32) * 5 / 9;
  }

  // Convert Celsius to target units
  let targetTemperature = celsius;
  if (toUnit === 'kelvin') {
    targetTemperature = celsius + 273.15;
  } else if (toUnit === 'fahrenheit') {
    targetTemperature = celsius * 9 / 5 + 32;
  }

  // Display result
  resultOutput.textContent = targetTemperature.toFixed(2);
}

// Add event listener to convert button
convertButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent form submission
  convertTemperature(); // Convert temperature and display result
});
