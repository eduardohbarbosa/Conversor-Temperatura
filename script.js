var radioCelsius = document.querySelector("#conversorCelsius")
var radioFahrenheit = document.querySelector("#conversorFahrenheit")
var radioKelvin = document.querySelector("#conversorKelvin")

var divCelsius = document.querySelector("#celsius")
var divFahrenheit = document.querySelector("#fahrenheit")
var divKelvin = document.querySelector("#kelvin")

if (radioCelsius.checked){
    conversor()
}

function conversor(){
    if (radioCelsius.checked){
        divCelsius.innerHTML = '<input type="number" id="numCelsius"> °C'
        divFahrenheit.innerHTML = ''
        divKelvin.innerHTML = ''
    }else if (radioFahrenheit.checked){
        divFahrenheit.innerHTML = '<input type="number" id="numFahrenheit"> °F'
        divCelsius.innerHTML = ''
        divKelvin.innerHTML = ''
    }else if (radioKelvin.checked){
        divKelvin.innerHTML = '<input type="number" id="numKelvin"> °K'
        divCelsius.innerHTML = ''
        divFahrenheit.innerHTML = ''
    }
}

function converter(){
    if (radioCelsius.checked){
        var celsius = Number(document.querySelector("#numCelsius").value)
        var fahrenheit = (celsius * 9/5) + 32
        var kelvin = celsius + 273.15

        divFahrenheit.innerHTML = `<p>${celsius}°C é igual a ${fahrenheit}°F</p>`
        divKelvin.innerHTML = `<p>${celsius}°C é igual a ${kelvin}°K</p>`
    }else if (radioFahrenheit.checked){
        var fahrenheit = Number(document.querySelector("#numFahrenheit").value)
        var celsius = (fahrenheit - 32) * 5/9
        var kelvin = (fahrenheit - 32) * 5/9 + 273.15

        divCelsius.innerHTML = `<p>${fahrenheit}°F é igual a ${celsius}°C</p>`
        divKelvin.innerHTML = `<p>${fahrenheit}°F é igual a ${kelvin}°C</p>`
    }else if (radioKelvin.checked){
        var kelvin = Number(document.querySelector("#numKelvin").value)
        var celsius = kelvin - 273.15
        var fahrenheit = (kelvin - 273.15) * 9/5 + 32

        divCelsius.innerHTML = `<p>${kelvin}°K é igual a ${celsius.toFixed(2)}°C</p>`
        divFahrenheit.innerHTML = `<p>${kelvin}°K é igual a ${fahrenheit.toFixed(2)}°F</p>`
    }
}