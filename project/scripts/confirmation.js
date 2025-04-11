export function setupOrderConfirmation() {
    const urlParams = new URLSearchParams(window.location.search);
    let total = urlParams.get('total') || localStorage.getItem('lastOrderTotal') || '0.00';

    total = parseFloat(total).toFixed(2);

    document.getElementById('orderTotal').textContent = total;

    document.getElementById('orderNumber').textContent = Math.floor(Math.random() * 1000000);

    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    document.getElementById('orderDate').textContent = new Date().toLocaleDateString('en-US', options);

    document.getElementById('cart-count').textContent = '0';
}

