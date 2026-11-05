
new Splide('.gallery__slider', {
    type: 'loop',
    drag: 'free',
    gap: '40px',
    autoWidth: true,
    arrows: false,
    pagination: false,
    autoScroll: {
        speed: 1,
        pauseOnHover: false,
    },
}).mount(window.splide.Extensions);

const menuBtn = document.querySelector('.header__menu');
const burgerMenu = document.querySelector('.header__menu-burger');
const closeBtn = document.querySelector('.header__burger-close');

menuBtn.addEventListener('click', () => {
    burgerMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
});

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('header--scrolled', window.scrollY > 50);
});