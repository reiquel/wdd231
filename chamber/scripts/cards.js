async function getData() {
  try {
    const response = await fetch('members.json')
    const data = await response.json();
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
    <div class=inline-info>
    <p id='resort-description'>${resort.description}</p>
    <p><strong>Address:</strong>${resort.address}</p>
    <p><strong>Phone:</strong>${resort.phone}</p>
    <a href="${resort.website}" target="_blank" class=:"website" >Visit Website</a>
    </div>
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
    
}  catch(error)  {
    console.error('Error loading data', error);
}
} 

getData();