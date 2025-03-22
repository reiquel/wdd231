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
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].description}">
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
                    <p>${date}: ${day.main.temp}°F</p>
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

    const isLargeview = window.matchMedia('min-width: 768px').matches;
    const numberOfCompanies = isLargeview ? 3 : 2;

    const eligibleMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);

    const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, numberOfCompanies);

    const spotlightContainer = document.querySelector('.company-spotlights');

    selectedMembers.forEach(member => {
        const section = document.createElement('section');
        section.className = 'company-spotlight';
        section.innerHTML = `
                <h3>${member.name}</h3>
                <hr class="company-divider">
                <div class="company-row">
                    <img src="${member.image}" alt="${member.name}" loading="lazy" width="300" height="200">
                    <div class="company-info">
                        <p class="tagline">${member.tagline || 'Quality Service Guaranteed'}</p>
                        <p><strong>Email:</strong> ${member.email}</p>
                        <p><strong>phone:</strong> ${member.phone}</p>
                        <a href="${member.website}" target="_blank">Visit Website</a>
                    <div>
                </div>
                `;
        spotlightContainer.appendChild(section);
    });

}


document.addEventListener('DOMContentLoaded', () => {
    getCurrentWeather();
    getWeatherForecast();
    loadCompanySpotlight();
    showFooter();
});