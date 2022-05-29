let loc = document.querySelector("#loc");
let condition = document.querySelector("#condition"); 
let temperature = document.querySelector("#temperature");
let icon = document.querySelector("#icon");

const KEY = "<APIKEY>";
let city = "Sainte-Clotilde,RE";

function displayMeteo() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric&lang=fr`).then(response => response.json()).then(data => {
        console.log(data);
        loc.innerHTML = data.name; // City name
        condition.innerHTML = data.weather[0].main+ " " + data.weather[0].description;
        temperature.innerHTML = `${data.main.temp} °C`;

        let iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        icon.innerHTML = `<img src="${iconSrc}">`;
        icon.style.display = "inline-block";
        icon.style.padding = "3em";
        icon.style.backgroundColor = "#333";
    });
}