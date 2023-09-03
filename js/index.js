const key = "9976fda091ce59ab7cd4df290e4b6857";

//Exibindo na tela
function htmlInner (data) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + data.name;
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C" ;
    document.querySelector(".descricao").innerHTML = data.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: "+ data.main.humidity + "%";
    document.querySelector(".icone").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;    
}   
//Mandar os dados pego no front e mandar pra API
async function seekCity (getData) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getData}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json());
    console.log(data)
    htmlInner(data);
}
//Pegar os dados do front
function transferData () {
    const getData = document.querySelector('.input-cidade').value;
    seekCity(getData);
}