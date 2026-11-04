
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