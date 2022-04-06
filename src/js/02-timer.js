import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Timer from './CDTimer';
import refs from './refs';

const REFRESH_RATE = 1000;
const cdTimer = new Timer();

initInterface();
refs.startBtn.addEventListener('click', () => {
  toggleButton(refs.startBtn);
  setInterval(onTimerStart, REFRESH_RATE);
});

function initInterface() {
  toggleButton(refs.startBtn);

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      cdTimer.endTime = selectedDates[0].getTime();
      if (!cdTimer.setted) {
        alert('Please choose a date in the future!');
        return;
      }
      toggleButton(refs.startBtn);
      updateTimerUI(refs, cdTimer.processedDate());
    },
  };

  flatpickr('#datetime-picker', options);
}

function toggleButton(button) {
  button.disabled = !button.disabled;
}

function updateTimerUI(timerUIRefs, dateData) {
  const { days, hours, mins, secs } = timerUIRefs;

  days.innerText = dateData.days;
  hours.innerText = dateData.hours;
  mins.innerText = dateData.minutes;
  secs.innerText = dateData.seconds;
}

function onTimerStart() {
  updateTimerUI(refs, cdTimer.processedDate());
}
