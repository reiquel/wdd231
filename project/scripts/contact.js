document.addEventListener("DOMContentLoaded", () => {
    const openButtons = document.querySelectorAll('.open-button');
    const closeButtons = document.querySelectorAll('.close-button');

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const modalId = button.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            if(modal) {
                modal.showModal();
            }
        });
        
    });

    closeButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.closest(".modal").close();
        });
    });

    const partnershipForm = document.querySelector(".membership-form");
if (partnershipForm) {
    partnershipForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your partnership request! We'll get back to you soon.");
        partnershipForm.reset();
    });
   }
});


