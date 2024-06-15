const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    // Toggle active class on burger and nav-links
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});
