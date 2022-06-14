const container = document.querySelector('.container');
const showDiv = document.querySelector('.surprise');
const showMain = document.querySelector('main');
const scrollContainer = document.querySelector('.hi');

container.addEventListener('animationend', () => {
    showDiv.style.display = 'block';
    setInterval(() => {
        showMain.style.display = 'block';
    }, 4000);
})

scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
})