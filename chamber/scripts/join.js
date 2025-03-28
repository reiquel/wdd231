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


const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Dear ${myInfo.get('first-name')} ${myInfo.get('last-name')},</p>
<p>You have enrolled for the <strong>${myInfo.get('membership-level')}</strong> with our chamber of commerce on ${myInfo.get('date-and-time')}</p>
<p>We are excited to have ${myInfo.get('business-name')} as part of our growing business community.</p>
<p>Our team will review your application and contact you within 2 business days at ${myInfo.get('email')} or ${myInfo.get('cell-phone')}</p>
`