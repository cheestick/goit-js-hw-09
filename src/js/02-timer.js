import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  daysComp: document.querySelector('span[data-days]'),
  hoursComp: document.querySelector('span[data-hours]'),
  minutesComp: document.querySelector('span[data-minutes]'),
  secondsComp: document.querySelector('span[data-seconds]'),
};

initInterface();

function initInterface() {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };

  flatpickr('#datetime-picker', options);
  toggleButton(refs.startBtn);
}

function toggleButton(button) {
  button.disabled = !button.disabled;
}

/*  UTILITY FUNCTIONS */

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZeto(value) {
  return value.toString().padStart(2, '0');
}
