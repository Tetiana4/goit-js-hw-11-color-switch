import './sass/main.scss';

const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
    body: document.body,
}

const INTERVAL_DELAY = 1000;
let interval = null;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.start.addEventListener('click', changeColor);
refs.stop.addEventListener('click', stopColor);


function changeColor() {
    interval = setInterval(() => {
        refs.body.style.background = getRandomHexColor();
    }, INTERVAL_DELAY);
    refs.start.disabled = true;
};

function stopColor() {
    clearInterval(interval);
    refs.start.disabled = false;
}


