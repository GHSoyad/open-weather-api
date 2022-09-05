// Never put API key like this in here
const API_KEY = '259c42f6a252ff8827dc6d6f8b0b8f5d';

const loadWeatherData = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayWeatherData(data);
    } catch (error) {
        console.log(error)
    }
}

loadWeatherData('dhaka');

const displayWeatherData = (city) => {

    if (city.cod && city.cod == 404) {
        return alert(`${city.message}!!`)
    }
    console.log(city)

    const cityName = document.getElementById('city-name');
    cityName.innerText = `${city.name}`;

    const cityTemp = document.getElementById('city-temp');
    cityTemp.innerText = `${city.main.temp}`;

    const cityWeather = document.getElementById('city-weather');
    cityWeather.innerHTML = '';
    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.innerHTML = '';

    city.weather.forEach(weather => {
        const p = document.createElement('p');
        p.classList.add('d-inline-block', 'mx-3')
        p.innerText = `${weather.main}`;
        cityWeather.appendChild(p)

        const img = document.createElement('img')
        img.setAttribute('src', `https://openweathermap.org/img/wn/${weather.icon}@2x.png`);
        weatherIcon.appendChild(img);
    });
}
