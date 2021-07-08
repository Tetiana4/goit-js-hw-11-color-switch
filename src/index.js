import './sass/main.scss';

const buttons = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]')
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

setColorRandom = () => {
    document.body.style.backgroundColor = getRandomHexColor()
};

let interval = undefined;

buttons.start.addEventListener('click', evt => interval = interval ?
    interval : 
    setInterval(() => getRandomHexColor(), 1000))

buttons.stop.addEventListener('click', evt => clearInterval(interval))

