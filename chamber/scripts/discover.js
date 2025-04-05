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

const dateTimeField = document.getElementById('date-and-time');
if(dateTimeField) {
    const now = new Date();
    dateTimeField.value = now.toLocaleString();
}

showFooter();

document.addEventListener('DOMContentLoaded', async function(){
    try {
        const response = await fetch('attractions.json');
        if (!response.ok) {
            throw new Error('Response was not found');           
        }
        
        const data = await response.json();
        const gallery = document.getElementById('gallery');

        data.forEach(attraction => {
            const card = document.createElement('article');
            card.className = 'card';
            card.innerHTML = `
                <h2>${attraction.name}</h2>
                <div class="card-row">
                <figure>
                    <img src="${attraction.image}" alt="${attraction.name}" loading="lazy">
                    <figcaption>${attraction.name}</figcaption>
                </figure>
                <div class="card-column-26">
                <p>${attraction.description}</p>
                <address>${attraction.address}</address>
                </div>
                </div>
                <a href="${attraction.URL}" target="_blank" aria-label="Learn more about ${attraction.name}">
                    <button>Learn More</button>
                </a>
            `;

            gallery.appendChild(card);
            
        });
    } catch (error) {
        const gallery = document.getElementById('gallery');
        gallery.innerHTML =`
        <p class="error">Sorry, we could not load the attractions. Please try again later. </p>
        `
    }
})

