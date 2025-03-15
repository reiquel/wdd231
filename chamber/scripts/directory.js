const hamburgerElement = document.querySelector('#hamburger-button');
const navElement = document.querySelector('#animateme');


hamburgerElement.addEventListener('click', () => {
navElement.classList.toggle('open');
hamburgerElement.classList.toggle('open');
});


fetch('data/members.json')
.then(response => response.json())
.then(data => {
const resorts = data.data;
const display = document.getElementById('resort-display');


function createElement(resort) {
const resortSection = document.createElement('section');

const resortImage = document.createElement('img');
resortImage.src = resort.image;
resortImage.alt = resort.name;

const resortDetails = document.createElement('div');
resortDetails.classList.add('resort-details');
resortDetails.innerHTML=`
<h3>${resort.name}</h3>
<p>${resort.description}</p>
<p><strong>Address:</strong>${resort.address}</p>
<p><strong>Phone:</strong>${resort.phone}</p>
<a href="${resort.website}" target="_blank">Visit Website</a>
`;

resortSection.append(resortImage, resortDetails);
return resortSection;
}
resorts.forEach(resort => {
const resortElement = createElement(resort);
display.appendChild(resortElement);
});

const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

gridButton.addEventListener('click', () => {
display.classList.add('grid');
display.classList.remove('list');
});

listButton.addEventListener('click', () => {
display.classList.add('list');
display.classList.remove('grid');
});
})

.catch(error => console.error('Error loading data', error));

function showFooter() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}

showFooter()