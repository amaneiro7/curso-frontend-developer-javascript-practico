const navbar_Email = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navbar_Email.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('click');
    desktopMenu.classList.toggle('inactive');
}

console.log ('JS funcionando')