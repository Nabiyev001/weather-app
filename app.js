

const input = document.getElementById("input-text")
const search = document.querySelector(".search")


const card = document.querySelector(".card")
const weatherImg = document.querySelector(".weather-img")
const humidty = document.querySelector(".humidy-procent")
const windSpeed = document.querySelector(".wind-speed")
const cityName = document.querySelector(".city-name")
const temp = document.querySelector(".temp")

// !API

// ?

async function task() {
    const apiKey = "3a4c6078c3d0465c816165642242911"
    const api = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=Baku`
    const response = await fetch(api)
    const data = await response.json()
    console.log(data);
}
task()


search.addEventListener("click", async () => {
    const apiKey = "3a4c6078c3d0465c816165642242911"
    const api = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${input.value.trim()}`
    const response = await fetch(api)
    const data = await response.json()
    console.log(data.current)

    cityName.textContent = data.location.name
    temp.textContent = data.current.temp_c + "°C"
    windSpeed.textContent = data.current.wind_kph + " km/h"
    humidty.textContent = data.current.humidity + " %"

    if (data.current.condition.text.includes("cloudy")) {
        card.style.backgroundColor = "#B0BEC5"
        weatherImg.src = "cloudy.png"

    } else if (data.current.condition.text.includes("clearly")) {
        card.style.backgroundColor = "#FFDD00"
        weatherImg.src = "sunny.webp"
    } else if (data.current.condition.text.includes("sunny")) {
        card.style.backgroundColor = "#FFDD00"
        weatherImg.src = "sunny.webp"
    }


})