// Variables
let loc = document.querySelector("#loc");
let condition = document.querySelector("#condition"); 
let temperature = document.querySelector("#temperature");
let icon = document.querySelector("#icon");
let header = document.querySelector("#header");
let latitude, longitude;
const APIKEY = "<APIKEY>";

// MAIN HANDLING: Get user location
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(success, error);
});

// USEFUL FUNCTIONS
const success = (position) => {
    const coordinates = position.coords;
    latitude = coordinates.latitude;
    console.log(latitude);
    longitude = coordinates.longitude;

    // Fetch conditions in user location
    // if he/she allows it
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric`).then(response => response.json()).then(data => {
        console.log(data);
        setInterval(showTime, 1000);
        loc.innerHTML = `<i class="fas fa-location-arrow"></i> ${data.name}`; // City name
        condition.innerHTML = `${data.weather[0].main}`;

        temperature.innerHTML = `<i class="fas fa-thermometer-half icon"></i> ${Math.ceil(data.main.temp)}<sup>°C</sup>`;

        let iconSrc = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

        icon.innerHTML = `<img src="${iconSrc}">`;
    });
}

// User denied to get its location
const error = () => {
    loc.textContent = "This API won't run without your location!"; 
    return;
}

// Show current time in format AM/PM
const showTime = () => {
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