import { renderCartItems,setupCheckout, updateCart} from "./cart.js";
import { renderProducts } from "./clothing.js";
import { setupOrderConfirmation } from "./confirmation.js";

document.addEventListener('DOMContentLoaded', () =>{
    updateCart();

    
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    const sideNav = document.getElementById('sideNavbar');
    const openNav = document.getElementById('openNav');
    const closeNav = document.getElementById('closeNav');

    if (openNav) {
        openNav.addEventListener('click', () => {
            sideNav.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (closeNav) {
        closeNav.addEventListener('click', () => {
            sideNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.side-navbar') && 
            !e.target.closest('.nav-toggle') &&
            sideNav.classList.contains('active')) {
          sideNav.classList.remove('active');
          document.body.style.overflow = '';
        }
      });

      const path = window.location.pathname.split('/').pop();

      switch(path) {
        case 'index.html':
        case '':
            renderProducts('men', 'clothing-container');
            renderProducts('women', 'clothing-container');
            renderProducts('accessories', 'shoe-container');
            break;
        case 'cart.html':
            renderCartItems();
            setupCheckout();
            break;
        case 'confirmation.html':
            setupOrderConfirmation();
            break;
        default:
            renderProducts();
      }

})
