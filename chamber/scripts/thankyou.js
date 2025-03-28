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

const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Dear ${myInfo.get('first-name')} ${myInfo.get('last-name')},</p>
<p>You have enrolled for the <strong>${myInfo.get('membership-level')}</strong> membership with our chamber of commerce on ${myInfo.get('date-and-time')}</p>
<p>We are excited to have ${myInfo.get('business-name')} as part of our growing business community.</p>
<p>Our team will review your application and contact you within 2 business days at ${myInfo.get('email')} or ${myInfo.get('cell-phone')}</p>
`
showFooter()