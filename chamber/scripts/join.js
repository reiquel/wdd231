document.addEventListener("DOMContentLoaded", () => {
    const openbuttons = document.querySelectorAll('.open-button');
    const closebuttons = document.querySelectorAll('.close-button');

    openbuttons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if(modal) {
                modal.showModal();
            }
        });
    });

    closebuttons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").close();
        });
    });


});

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

showFooter();