const mobileNav = document.querySelector('.mobile-navbar-btn');
const navHeader = document.querySelector('.header');

const toggleNavbar = () => {
  navHeader.classList.toggle('active');
};

mobileNav.addEventListener('click', () => toggleNavbar());