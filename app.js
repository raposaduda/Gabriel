'use strict'
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');

    const isLight = document.body.classList.contains('light-theme');
    btn.textContent = isLight ? 'Dark' : 'Light';
});

