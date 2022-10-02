const navbar_Email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

navbar_Email.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleAside);

function toggleDesktopMenu() {
    aside.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    // const isAsideClosed = aside.classList.contains('inactive')
    // if (!isAsideClosed) {
    //     aside.classList.add('inactive')
    // }
    aside.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleAside() {
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    // if (!isMobileMenuClosed) {
    //     mobileMenu.classList.add('inactive');
    // }
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

