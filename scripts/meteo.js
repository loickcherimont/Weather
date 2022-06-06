// MAIN
let body = document.querySelector("body");
let loc = document.querySelector("#loc");
let condition = document.querySelector("#condition"); 
let temperature = document.querySelector("#temperature");
let icon = document.querySelector("#icon");
let header = document.querySelector("#header");
let searchBar = document.querySelector("#searchBar");
let handlerBtn = document.querySelector("#handlerBtn");
let filterForm = document.querySelector("#filterForm");
const APIKEY = "<APIKEY>";

let lat = -20.920271083905583;
let lon = 55.529895768669526;

window.addEventListener('load', displayMeteo);

// FUNCTION
function displayMeteo() {

    // if(navigator.geolocation) {
    //     // For GEOLOCATION
    //     var options = {
    //         enableHighAccuracy: true,
    //         timeout: 5000,
    //         maximumAge: 0
    //     };
  
    //     function success(pos) {
    //         var crd = pos.coords;

    //         lat = crd.latitude;
    //         lon = crd.longitude;
    //         console.log(lat);
    //         console.log(lon);
    //     }
  
    //     function error(err) {
    //         console.warn(`ERROR(${err.code}): ${err.message}`);
    //     }
  
    //     navigator.geolocation.getCurrentPosition(success, error, options);
    // } else {
    //     alert("Geolocation is not supported for this browser!");
    // }

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`).then(response => response.json()).then(data => {
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