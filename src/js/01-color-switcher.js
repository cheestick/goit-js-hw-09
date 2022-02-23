const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let intervalID = null;

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

initInterfaceState();

function onStartBtnClick(e) {
  changeBodyColorByInterval();
  toggleButton(e.target);
  toggleButton(refs.stopBtn);
}

function onStopBtnClick(e) {
  stopBodyColorChange();
  toggleButton(e.target);
  toggleButton(refs.startBtn);
}

function initInterfaceState() {
  toggleButton(refs.stopBtn);
}

function changeBodyColorByInterval(delay = 1000) {
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, delay);
}

function stopBodyColorChange() {
  clearInterval(intervalID);
}

function toggleButton(button) {
  button.disabled = !button.disabled;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}
