
if (document.querySelector('.gallery__slider')) {
    new Splide('.gallery__slider', {
        type: 'loop',
        drag: 'free',
        gap: '40px',
        breakpoints: {
            650: {
                gap: '13px',
            },
        },
        autoWidth: true,
        arrows: false,
        pagination: false,
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
        },
    }).mount(window.splide.Extensions);
}

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

const slider = document.querySelector('.map__content');

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX;
    scrollLeft = slider.scrollLeft;
});

window.addEventListener('mouseup', () => {
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;

    e.preventDefault();
    slider.scrollLeft = scrollLeft - (e.pageX - startX);
});


const projectNav = document.querySelector('.project__nav-content');

let navIsDown = false;
let navStartX;
let navScrollLeft;

projectNav.addEventListener('mousedown', (e) => {
    navIsDown = true;
    navStartX = e.pageX;
    navScrollLeft = projectNav.scrollLeft;
});

window.addEventListener('mouseup', () => {
    navIsDown = false;
});

window.addEventListener('mousemove', (e) => {
    if (!navIsDown) return;

    e.preventDefault();
    projectNav.scrollLeft = navScrollLeft - (e.pageX - navStartX);
});

projectNav.addEventListener('dragstart', (e) => {
    e.preventDefault();
});