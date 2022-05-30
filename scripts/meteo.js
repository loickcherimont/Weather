// MAIN
let body = document.querySelector("body");
let loc = document.querySelector("#loc");
let condition = document.querySelector("#condition"); 
let temperature = document.querySelector("#temperature");
let icon = document.querySelector("#icon");
let header = document.querySelector("#header");

const APIKEY = "<APIKEY>";
let city = "Sainte-Marie,RE";
 
window.addEventListener('load', displayMeteo);

// FUNCTION
function displayMeteo() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`).then(response => response.json()).then(data => {
        console.log(data);
        setInterval(showTime, 1000);
        loc.innerHTML = `<i class="fas fa-location-arrow"></i> ${data.name}`; // City name
        condition.innerHTML = `${data.weather[0].main}`; // ${data.weather[0].description}

        temperature.innerHTML = `<i class="fas fa-thermometer-half icon"></i> ${Math.ceil(data.main.temp)}<sup>°C</sup>`;

        let iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        icon.innerHTML = `<img src="${iconSrc}">`;
    });
}

const showTime = function() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = "AM";
    

    if(hours > 12) {
        hours %= 12;
        period = "PM"; 
    }

    minutes = (minutes < 10) ? `0${minutes}`:minutes;

    header.innerHTML = `<h2>${hours}:${minutes} ${period}<h2>`;
};