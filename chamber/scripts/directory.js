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

showFooter()



async function getWeatherForecast() {

    const apiKey = '635f3a0057194cd58e3cf90f3df44bb7';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=Dominican%20Republic&appid=${apiKey}&units=imperial`;

    try {
        const response = await fetch(url);
        if(!response.ok) throw new Error('weather data could not be fetched');

        const data = await response.json();
        

        const forecast = data.list.filter((item, index) => index % 8 === 0).slice(0,3);

        const main = document.querySelector('.info-container');
        const weatherSection = document.createElement('section');
        weatherSection.classList.add('weather-forecast');
        weatherSection.innerHTML = `<h2> 3-day Weather Forecast</h2>`;

        forecast.forEach((day, i) => {
            const weatherCard = document.createElement('div');
            weatherCard.classList.add('weather-card');

            const date = new Date(day.dt_txt).toLocaleString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

            weatherCard.innerHTML = `
            <h3>${date}</h3>
            <img src="http://openweathermap.org/img/w/${day.weather[0].icon}.png" alt="${day.weather[0].description}">
            <p>Temperature: ${day.main.temp}°F</p>
            <p>Conditions: ${day.weather[0].description}</p>
            `;

            weatherSection.appendChild(weatherCard);
        });
        
        main.appendChild(weatherSection);
    } catch (error) {
        console.error('Error fetching data', error);
    }
}

document.addEventListener('DOMContentLoaded',getWeatherForecast);

async function loadCompanySpotlight() {

    const response = await fetch('members.json');
    if(!response.ok) {
        console.errorrror('could not fetch company data');
        return;
    }
    const jsonData = await response.json();
    const members = jsonData.data;

    const eligibleMembers = members.filter(member => member.membership_level === 2 || member.membership_level === 3);

    const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() *2) + 2);

    const main = document.querySelector('.info-container');
    const spotlightSection = document.createElement('section');
    spotlightSection.classList.add('company-spotlight');
    spotlightSection.innerHTML = `<h2>Company Spotlight</h2>`;

    selectedMembers.forEach(member =>{
        const memberCard = document.createElement('div');
        memberCard.classList.add('spotlight-card');

        memberCard.innerHTML = `
        <img src="${member.image}" alt="${member.name}" loading="lazy">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        `;
        spotlightSection.appendChild(memberCard);
    })

    main.appendChild(spotlightSection);
}

document.addEventListener('DOMContentLoaded', loadCompanySpotlight);