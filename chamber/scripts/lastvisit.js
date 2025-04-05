document.addEventListener('DOMContentLoaded', async function() {
    try {
        const visitMessage = document.getElementById('visit-message');
        const lastVisit = localStorage.getItem('lastVisit');
        const currentDate = Date.now();

        if (!lastVisit) {
            visitMessage.textContent = "Welcome! Let us know if you have any questions.";
        } else {
            const daysBetween = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
            
            if(daysBetween === 0) {
                visitMessage.textContent = "Back so soon! Awesome!";
            } else {
                const dayText = daysBetween === 1 ? "day": "days";
                visitMessage.textContent = `You last visited ${daysBetween} ${dayText} ago.`
            }
        }

        localStorage.setItem('lastVisit', currentDate);
    } catch (error) {
        const visitMessage = document.getElementById('visit-message');
        visitMessage.textContent = 'Welcome to our discover page!';
    }
});