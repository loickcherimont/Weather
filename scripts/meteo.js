// MAIN
let body = document.querySelector("body");
let loc = document.querySelector("#loc");
let condition = document.querySelector("#condition"); 
let temperature = document.querySelector("#temperature");
let icon = document.querySelector("#icon");
let header = document.querySelector("#header");

const APIKEY = "<APIKEY>";
let city = "Sainte-Marie,RE";

// TODO: Find how to run script when user opens the browser 
window.addEventListener('load', displayMeteo);

// *** TEST ***
// let testAPI = document.querySelector("#test");
// testAPI.addEventListener("click", displayMeteo);
// *** *** ***

// FUNCTION
function displayMeteo() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`).then(response => response.json()).then(data => {
        console.log(data);
        header.innerHTML = `<h1>${new Date()}</h1>`;
        loc.innerHTML = `<i class="fas fa-location-arrow"></i> ${data.name}`; // City name
        condition.innerHTML = `${data.weather[0].main}`; // ${data.weather[0].description}

        temperature.innerHTML = `<i class="fas fa-thermometer-half icon"></i> ${Math.ceil(data.main.temp)}<sup>°C</sup>`;

        // <i class="fas fa-thermometer-half icon"></i>30<sup>°C</sup>

        let iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        icon.innerHTML = `<img src="${iconSrc}">`;
        // icon.style.display = "inline-block";
        // icon.style.padding = "3em";
        // icon.style.backgroundColor = "#333";
    });
}