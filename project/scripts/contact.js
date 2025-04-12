const partnershipForm = document.querySelector(".membership-form");
if (partnershipForm) {
    partnershipForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Thank you for your partnership request! We'll get back to you soon.");
        partnershipForm.reset();
    });
}