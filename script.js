function atualizar(){
    var radioCelsius = document.querySelector("#radioCelsius")
    var radioFahrenheit = document.querySelector("#radioFahrenheit")
    var radioKelvin = document.querySelector("#radioKelvin")
    var inputCelsius = document.querySelector("#celsius")
    var inputFahrenheit = document.querySelector("#fahrenheit")
    var inputKelvin = document.querySelector("#kelvin")

    if(radioCelsius.checked){
        inputCelsius.style.display = "initial";
        inputFahrenheit.style.display = "none";
        inputKelvin.style.display = "none";
    }else if(radioFahrenheit.checked){
        inputFahrenheit.style.display = "initial";
        inputCelsius.style.display = "none";
        inputKelvin.style.display = "none";
    }else if(radioKelvin.checked){
        inputKelvin.style.display = "initial";
        inputCelsius.style.display = "none";
        inputFahrenheit.style.display = "none";
}}