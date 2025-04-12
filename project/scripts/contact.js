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
        const formData = new FormData(partnershipForm);
        localStorage.setItem('lastApplication', JSON.stringify(Object.fromEntries(FormData)));
        const params = new URLSearchParams(formData).toString();
        window.location.href = `form-submission.html?${params}`;
        partnershipForm.reset();
    });
   }
if (window.location.pathname.includes('form-submission.html')) {
    const params = new URLSearchParams(window.location.search);
    const fields = [
        {id:'firstName', param: 'first'},
        {id:'lasttName', param: 'last'},
        {id:'businessName', param: 'business'},
        {id:'email', param: 'email'},
        {id:'phone', param: 'phone'},
        {id:'location', param: 'location'}
    ];

    fields.forEach(field => {
        const element = document.getElementById(field.id);
        if(element) {
            element.textContent = params.get(field.param) || 'N/A';
        }
    });
}

});


