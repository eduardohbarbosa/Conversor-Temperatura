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
        divFahrenheit.innerHTML = '°F'
        divKelvin.innerHTML = '°K'
    }else if (radioFahrenheit.checked){
        divFahrenheit.innerHTML = '<input type="number" id="numFahrenheit"> °F'
        divCelsius.innerHTML = '°C'
        divKelvin.innerHTML = '°K'
    }else if (radioKelvin.checked){
        divKelvin.innerHTML = '<input type="number" id="numKelvin"> °K'
        divCelsius.innerHTML = '°C'
        divFahrenheit.innerHTML = '°F'
    }
}

function converter(){
    if (radioCelsius.checked){
        var celsius = Number(document.querySelector("#numCelsius").value)
        var fahrenheit = (celsius * 9/5) + 32
        var kelvin = celsius + 273.15

        divFahrenheit.innerHTML = `<p>${celsius.toFixed(2)} °C é igual a ${fahrenheit.toFixed(2)} °F</p>`
        divKelvin.innerHTML = `<p>${celsius.toFixed(2)} °C é igual a ${kelvin.toFixed(2)} °K</p>`
    }else if (radioFahrenheit.checked){
        var fahrenheit = Number(document.querySelector("#numFahrenheit").value)
        var celsius = (fahrenheit - 32) * 5/9
        var kelvin = (fahrenheit - 32) * 5/9 + 273.15

        divCelsius.innerHTML = `<p>${fahrenheit.toFixed(2)} °F é igual a ${celsius.toFixed(2)} °C</p>`
        divKelvin.innerHTML = `<p>${fahrenheit.toFixed(2)} °F é igual a ${kelvin.toFixed(2)} °C</p>`
    }else if (radioKelvin.checked){
        var kelvin = Number(document.querySelector("#numKelvin").value)
        var celsius = kelvin - 273.15
        var fahrenheit = (kelvin - 273.15) * 9/5 + 32

        divCelsius.innerHTML = `<p>${kelvin.toFixed(2)} °K é igual a ${celsius.toFixed(2)} °C</p>`
        divFahrenheit.innerHTML = `<p>${kelvin.toFixed(2)} °K é igual a ${fahrenheit.toFixed(2)} °F</p>`
    }
}