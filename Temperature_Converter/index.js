// let convertBtn = document.getElementById("convertBtn");
// convertBtn.addEventListener("click",convertTemperature());
function convertTemperature(){
  let celsiusBtn = document.getElementById("celsiusBtn");
  let fahrenheitBtn = document.getElementById("fahrenheitBtn");
  let kelvinBtn = document.getElementById("kelvinBtn");
  let inputValue = document.getElementById("inputValue");
  let celsiusResult = document.getElementById("celsiusResult");
  let fahrenheitResult = document.getElementById("fahrenheitResult");
  let kelvinResult = document.getElementById("kelvinResult");
  let display = document.getElementById("display");
  
  let result = 0;
  if (celsiusBtn.checked && fahrenheitResult.checked) {
    result = celsiusToFahrenheit(celsiusBtn, fahrenheitResult, inputValue.value);
    display.value = result.toFixed(1) + '°F';
  }else if(celsiusBtn.checked && kelvinResult.checked){
    result = celsiusToKelvin(celsiusBtn, kelvinResult, inputValue.value);
    display.value = result.toFixed(1) + 'K';
  }else if(fahrenheitBtn.checked && celsiusResult.checked){
    result = fahrenheitToCelsius(fahrenheitBtn, celsiusResult, inputValue.value);
    display.value = result.toFixed(1) + '°C';
  }else if(fahrenheitBtn.checked && kelvinResult.checked){
    result = fahrenheitToKelvin(fahrenheitBtn, kelvinResult, inputValue.value);
    display.value = result.toFixed(1) + 'K';
  }else if(kelvinBtn.checked && celsiusResult.checked){
    result = kelvinToCelsius(kelvinBtn, celsiusResult, inputValue.value);
    display.value = result.toFixed(1) + '°C';
  }else if(kelvinBtn.checked && fahrenheitResult.checked){
    result = kelvinToFahrenheit(kelvinBtn, fahrenheitResult, inputValue.value);
    display.value = result.toFixed(1) + '°F';
  }else{
    alert("Please select one option from both input and result!");
  }
}

function celsiusToFahrenheit(celsiusBtn, fahrenheitResult, inputValue){
  // Celsius to Fahrenheit
  let fahrenheit;
  try {
    let input = Number(inputValue);
    if (celsiusBtn.checked && fahrenheitResult.checked) {
      if (typeof(input) === "number") {
        fahrenheit = (input * 9/5)+32;
        return fahrenheit;
      }else{
        throw new Error("Please enter only numbers!");
      }
    }
  } catch (error) {
    alert(`ERROR: ${error}`);
  }
  return 0;
}

function celsiusToKelvin(celsiusBtn, kelvinResult, inputValue){
  // Celsius to Kelvin
  let kelvin;
  try {
    let input = Number(inputValue);
    if (celsiusBtn.checked && kelvinResult.checked) {
      if (typeof(input) === "number") {
        kelvin = (input + 273.15);
        return kelvin;
      }else{
        throw new Error("Please enter only numbers!");
      }
    }
  } catch (error) {
    alert(`ERROR: ${error}`);
  }
  return 0;
}

function fahrenheitToCelsius(fahrenheitBtn, celsiusResult, inputValue){
  // Fahrenheit to Celsius
  let celsius;
  try {
    let input = Number(inputValue);
    if (fahrenheitBtn.checked && celsiusResult.checked) {
      if (typeof(input) === "number") {
        celsius = (input - 32)*5/9;
        return celsius;
      }else{
        throw new Error("Please enter only numbers!");
      }
    }
  } catch (error) {
    alert(`ERROR: ${error}`);
  }
  return 0;
}

function fahrenheitToKelvin(fahrenheitBtn, kelvinResult, inputValue){
  // Fahrenheit to Kelvin
  let kelvin;
  try {
    let input = Number(inputValue);
    if (fahrenheitBtn.checked &&  kelvinResult.checked) {
      if (typeof(input) === "number") {
        kelvin = (input - 32)* 5/9 + 273.15;
        return kelvin;
      }else{
        throw new Error("Please enter only numbers!");
      }
    }
  } catch (error) {
    alert(`ERROR: ${error}`);
  }
  return 0;
}

function kelvinToCelsius(kelvinBtn, celsiusResult, inputValue){
  // Kelvin to celsius
  let celsius;
  try {
    let input = Number(inputValue);
    if (kelvinBtn.checked &&  celsiusResult.checked) {
      if (typeof(input) === "number") {
        celsius = (input - 273.15);
        return celsius;
      }else{
        throw new Error("Please enter only numbers!");
      }
    }
  } catch (error) {
    alert(`ERROR: ${error}`);
  }
  return 0;
}

function kelvinToFahrenheit(kelvinBtn, fahrenheitResult, inputValue){
  // Kelvin to fahrenheit
  let fahrenheit;
  try {
    let input = Number(inputValue);
    if (kelvinBtn.checked && fahrenheitResult.checked) {
      if (typeof(input) === "number") {
        fahrenheit = (input - 273.15)*9/5+32;
        return fahrenheit;
      }else{
        throw new Error("Please enter only numbers!");
      }
    }
  } catch (error) {
    alert(`ERROR: ${error}`);
  }
  return 0;
}