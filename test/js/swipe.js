const container = document.querySelector('.container-swipe');

document.querySelector('.slider').addEventListener ('input', (e) => {
    container.style.setProperty('--position', `${e.target.value}%`)
})