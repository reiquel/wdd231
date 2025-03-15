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