import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Timer from './CDTimer';
import refs from './refs';

const REFRESH_RATE = 1000;
const cdTimer = new Timer();
let intervalId = null;

initInterface();
refs.startBtn.addEventListener('click', () => {
  disableStartButton();
  updateTimerUI(refs, cdTimer.processedDate());
  intervalId = setInterval(onTimerStart, REFRESH_RATE);
});

function initInterface() {
  disableStartButton();

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      cdTimer.endTime = selectedDates[0].getTime();
      if (!cdTimer.setted) {
        disableStartButton();
        alert('Please choose a date in the future!');
        return;
      }
      enableStartButton();
    },
  };

  flatpickr('#datetime-picker', options);
}

function updateTimerUI(timerUIRefs, dateData) {
  const { days, hours, mins, secs } = timerUIRefs;

  days.innerText = dateData.days;
  hours.innerText = dateData.hours;
  mins.innerText = dateData.minutes;
  secs.innerText = dateData.seconds;
}

function onTimerStart() {
  if (cdTimer.stopped) {
    clearInterval(intervalId);
    return;
  }
  updateTimerUI(refs, cdTimer.processedDate());
}

function enableStartButton() {
  refs.startBtn.disabled = false;
}

function disableStartButton() {
  refs.startBtn.disabled = true;
}

function toggleButton(button) {
  button.disabled = !button.disabled;
}
