const hamburgerElement = document.querySelector('#hamburger-button');
const navElement = document.querySelector('#animateme');


hamburgerElement.addEventListener('click', () => {
navElement.classList.toggle('open');
hamburgerElement.classList.toggle('open');
});


function showFooter() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}



async function getCurrentWeather() {

    const apiKey = '635f3a0057194cd58e3cf90f3df44bb7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dominican%20Republic&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error('weather data could not be fetched');

        const data = await response.json();
        const currentWeatherSection = document.getElementById('current-weather')

        currentWeatherSection.innerHTML = `
        <div class="weather-card">
        <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
                <p>Temperature: ${data.main.temp}°F</p>
                <p>Conditions: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} mph</p>
        </div>
        `

        
    } catch (error) {
        console.error('Error fetching data', error);
    }
}



async function getWeatherForecast() {

    const apiKey = '635f3a0057194cd58e3cf90f3df44bb7';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Dominican%20Republic&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error('weather data could not be fetched');

        const data = await response.json();
        const forecastSection = document.getElementById('forecast');
        const forecast = data.list.filter((item, index) => index % 8 === 0).slice(0, 3);

        forecastSection.innerHTML = forecast.map(day => {
            const date = new Date(day.dt_txt).toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
            return `
                <div class="forecast-card">
                    <h3>${date}</h3>
                    <img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
                    <p>Temperature: ${day.main.temp}°F</p>
                    <p>Conditions: ${day.weather[0].description}</p>
                </div>
            `;
        }).join('');
   
    } catch (error) {
        console.error('Error fetching data', error);
    }
}



async function loadCompanySpotlight() {

    const response = await fetch('members.json');
    if(!response.ok) {
        console.errorrror('could not fetch company data');
        return;
    }
    const jsonData = await response.json();
    const members = jsonData.data;

    const eligibleMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);

    const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() *2) + 3);

    const spotlightSection = document.getElementById('spotlight');

    spotlightSection.innerHTML = selectedMembers.map(member => `
        <div class="spotlight-card">
            <img src="${member.image}" alt="${member.name}" loading="lazy">
            <h3>${member.name}</h3>
            <p>${member.description}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        </div>
    `).join('');

}

document.addEventListener('DOMContentLoaded', () => {
    getCurrentWeather();
    getWeatherForecast();
    loadCompanySpotlight();
    showFooter();
});