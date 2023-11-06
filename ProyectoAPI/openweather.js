const apiKey = "7b93b02a677c177ac39a54e519a9a626";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const boredApiURL = "http://www.boredapi.com/api/activity?participants=1";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const background = document.body;

const savedCity = localStorage.getItem("lastSearchedCity");

if (savedCity) {
    searchBox.value = savedCity;
    updateWeather(savedCity);
}

function updateWeather(city) {
    checkWeather(city);
    getFiveDayForecast(city);
    giveActivity();
}

async function checkWeather(city) {
    const response = await fetch (apiURL + city + `&appid=${apiKey}`); 

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();  

        weatherIcon.src = forecastIcon(data.weather[0].main);
        background.style.background = forecastBackground(data.weather[0].main);
        //background.style.animation = forecastBackgroundAnimation(data.weather[0].main);
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".feelslike").innerHTML = Math.round(data.main.feels_like) + "ºC";
    }
}

searchBtn.addEventListener("click", () => {
    const city = searchBox.value;
    updateWeather(city);
    localStorage.setItem("lastSearchedCity", city);
});

searchBox.addEventListener("keyup", () => {
    if (event.key === "Enter") 
    {
        const city = searchBox.value;
        updateWeather(city);
        localStorage.setItem("lastSearchedCity", city);
    }
});


async function getFiveDayForecast(city) {
    const forecastAPIURL = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    try {
        const forecastPerDay = 8; 
        const response = await fetch(forecastAPIURL + city + `&appid=${apiKey}&cnt=${forecastPerDay*5}`);
        const data = await response.json();

        if (data.cod !== "200") {
            document.querySelector(".error").style.display = "block";
            return;
        }

        const forecastList = data.list;

        for (let i = 0; i < forecastList.length; i += forecastPerDay) { 
            const day = i / forecastPerDay + 1;
            const date = new Date(forecastList[i].dt * 1000); // Convertir la fecha UNIX a una fecha legible
            const opciones = { weekday: 'long' }; 
            const nombreDia = date.toLocaleDateString('es-ES', opciones).toString(); 

            const temperature = forecastList[i].main.temp;
            document.querySelector(`#day${day}Max`).innerHTML = Math.round(forecastList[i].main.temp_max) + "ºC";
            document.querySelector(`#day${day}Min`).innerHTML = Math.round(forecastList[i].main.temp_min) + "ºC";
            document.querySelector(`#icon${day}`).src = forecastIcon(forecastList[i].weather[0].main);
            document.querySelector(`#day${day}`).innerHTML = nombreDia.charAt(0).toUpperCase() + nombreDia.slice(1);
        }

    } catch (error) {
        console.error("Error al obtener el pronóstico de 5 días:", error);
    }
}

function forecastIcon(weather) {
    if(weather == "Clouds") {
        return "./iconos/cloud.png";
    }
    else if (weather == "Clear") {
        return "./iconos/clear-night.png";
    }
    else if (weather == "Rain") {
        return "./iconos/raining.png";
    }
    else if (weather == "Drizzle") {
        return "./iconos/drizzle.png";
    }
    else if (weather == "Mist") {
        return "./iconos/mist.png";
    }
    else if (weather == "Snow") {
        return "./iconos/snow.png";
    }
    return "./iconos/wind(2).png";
}


function forecastBackground(weather) {

    if(weather == "Clouds") {
        return "linear-gradient(90deg, rgba(255,172,254,1) 0%, rgba(208,208,246,1) 30%, rgba(132,190,201,1) 62%)";
    }
    else if (weather == "Clear") {
        return "linear-gradient(90deg, rgba(255,188,145,1) 0%, rgba(246,245,208,1) 30%, rgba(170,201,132,1) 62%)";
    }
    else if (weather == "Rain") {
        return "linear-gradient(90deg, rgba(130,120,124,1) 0%, rgba(148,187,233,1) 100%)";
    }
    else if (weather == "Drizzle") {
        return "linear-gradient(90deg, rgba(156,151,153,1) 5%, rgba(196,226,255,1) 60%)";
    }
    else if (weather == "Mist") {
        return "linear-gradient(90deg, rgba(156,151,153,1) 0%, rgba(148,187,233,1) 100%)";
    }
    else if (weather == "Snow") {
        return "linear-gradient(90deg, rgba(156,151,153,1) 0%, rgba(223,196,255,1) 56%)";
    }
    return "linear-gradient(135deg, #5edcffee, #f7f7f7ea)";

}

function forecastBackgroundAnimation(weather) {

    if(weather == "Clouds") {
        return "animation: gradient 5s ease infinite;";
    }
    else if (weather == "Clear") {
        return "animation: gradient 1s ease infinite;";
    }
    else if (weather == "Rain") {
        return "animation: gradient 1s ease infinite;";
    }
    else if (weather == "Drizzle") {
        return "animation: gradient 1s ease infinite;";
    }
    else if (weather == "Mist") {
        return "animation: gradient 1s ease infinite;";
    }
    else if (weather == "Snow") {
        return "animation: gradient 1s ease infinite;";
    }
    return "animation: gradient 1s ease infinite;";

}



async function giveActivity() {
    const response = await fetch (boredApiURL); 

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
    } else {
        const data = await response.json();  
        document.querySelector(".footer").innerHTML = "¿No sabes qué hacer? Try this: " +  data.activity + " ;)";
    }

}






