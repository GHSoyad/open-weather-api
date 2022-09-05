// Never put API key like this in here
const API_KEY = '259c42f6a252ff8827dc6d6f8b0b8f5d';

const loadWeatherData = async (city = 'dhaka') => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}

loadWeatherData();

document.getElementById('search-btn').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    const searchFieldCity = searchField.value;

    if (searchFieldCity === '') {
        return alert('Please Enter a city name first!!')
    }

    loadWeatherData(searchFieldCity);
})