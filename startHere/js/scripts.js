// const getString = window.location.search

// console.log(getString)

const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo)


console.log(myInfo.get('first'));
console.log(myInfo.get('last'));
console.log(myInfo.get('ordinace'));
console.log(myInfo.get('date'));
console.log(myInfo.get('location'));
console.log(myInfo.get('phone'));
console.log(myInfo.get('email'));

document.querySelector('#results').innerHTML = `
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Proxy ${myInfo.get('ordinance')} on ${myInfo.get('date')} in the city of ${myInfo.get('location')}</p>
<p>Appointment for ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p><strong>Phone:</strong> ${myInfo.get('phone')}</p>
<p><strong>E-mail:</strong> ${myInfo.get('email')}</p>
`