//Radios button
var radioCelsius = document.querySelector("#radioCelsius")
var radioFahrenheit = document.querySelector("#radioFahrenheit")
var radioKelvin = document.querySelector("#radioKelvin")

//Input para inserir os valores
var inputCelsius = document.querySelector("#celsius")
var inputFahrenheit = document.querySelector("#fahrenheit")
var inputKelvin = document.querySelector("#kelvin")

//Paragrafo para saida dos resultados
var resCelsius = document.querySelector("#resCelsius")
var resFahrenheit = document.querySelector("#resFahrenheit")
var resKelvin = document.querySelector("#resKelvin")

//Atualiza a div de acordo com os radios selecionados
function atualizar(){
    if(radioCelsius.checked){
        /*inputCelsius.style.display = "initial";
        inputFahrenheit.style.display = "none";
        inputKelvin.style.display = "none";

        inputFahrenheit.value = 0
        inputKelvin.value = 0

        resCelsius.innerHTML = '°C'
        resFahrenheit.innerHTML = '°F'
        resKelvin.innerHTML = '°K'*/
        

    }else if(radioFahrenheit.checked){
        inputFahrenheit.style.display = "initial";
        inputCelsius.style.display = "none";
        inputKelvin.style.display = "none";

        inputCelsius.value = 0
        inputKelvin.value = 0

        resCelsius.innerHTML = '°C'
        resFahrenheit.innerHTML = '°F'
        resKelvin.innerHTML = '°K'
    }else if(radioKelvin.checked){
        inputKelvin.style.display = "initial";
        inputCelsius.style.display = "none";
        inputFahrenheit.style.display = "none";

        inputCelsius.value = 0
        inputFahrenheit.value = 0

        resCelsius.innerHTML = '°C'
        resFahrenheit.innerHTML = '°F'
        resKelvin.innerHTML = '°K'
    }
}


/*function converter(){
    if (radioCelsius.checked){
        var c = Number(inputCelsius.value)
        var f = (c * 9/5) + 32
        var k = c + 273.15

        resFahrenheit.innerHTML = `<p>${f} °F</p>`
        resKelvin.innerHTML = `<p>${k} °K`

    }else if(radioFahrenheit.checked){
        var f = Number(inputFahrenheit.value)
        var c = (f - 32) * 5/9
        var k = (f - 32) * 5/9 + 273.15
    }else if(radioCelsius.checked){
        var k = Number(inputKelvin.Value)
    }
}*/