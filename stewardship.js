document.querySelectorAll('.gallery__imgs').forEach(item => {
    const range = item.querySelector('.gallery__range');
    const after = item.querySelector('.gallery__item-after');
    const btn = item.querySelector('.gallery__range-btn');

    range.addEventListener('input', () => {
        after.style.clipPath = `inset(0 0 0 ${range.value}%)`;
        btn.style.left = `${range.value}%`;
    });
});
