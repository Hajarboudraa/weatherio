let cityName = document.querySelector(".city");
let temperature = document.querySelector(".temp");

const apikey = "5056d0143c1fdd02705473e4f6187dbc";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector("#search");
const searchbtn = document.querySelector(".search i")
const weatherImg = document.querySelector(".weather-img");
const theme = document.querySelectorAll(".theme i");
// const apiurldaily="api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid={API key}";
function light() {
    theme[0].style.display = "none";

    theme[1].style.display = "inline";
    document.querySelector(".weather-app").style.backgroundColor = "white";
    theme[1].style.color = "black";

}

function dark() {
    theme[1].style.display = "none";

    theme[0].style.display = "inline";
    document.querySelector(".weather-app").style.backgroundColor = "black";
    theme[0].style.color = "white";
}

async function checkWeather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    let data = await response.json();
    if (data.cod === `404`) {
        alert("city not found");

    }
    console.log(data);
    cityName.innerHTML = data.name;
    temperature.innerHTML = Math.round(data.main.temp) + `°C`;
    document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + `°C`;
    document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + `°C`;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    switch (data.weather[0].main) {
        case 'Clouds':
            weatherImg.src = "/images/clouds.png";
            break;
        case 'Clear':
            weatherImg.src = "/images/clear.png";
            break;
        case 'Rain':
            weatherImg.src = "/images/rain.png";
            break;
        case 'Mist':
            weatherImg.src = "/images/mist.png";
            break;
        case 'Snow':
            weatherImg.src = "/images/snow.png";
            break;
    }
    document.querySelector(".section").style.display = "block";


}
searchbtn.addEventListener("click", () => {
    checkWeather(searchinput.value);
})