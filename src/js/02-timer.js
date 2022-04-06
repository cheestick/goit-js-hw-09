import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Timer from './CDTimer';
import Utils from './Utils';
import refs from './refs';

const REFRESH_RATE = 1000;

initInterface();

function initInterface() {
  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.dir(selectedDates[0].getTime());
      const cdTimer = new Timer(selectedDates[0].getTime());
      console.log(cdTimer);
      const interval = setInterval(() => {
        const date = cdTimer.processedTime();
        refs.daysComp.innerText = Utils.addLeadingZeto(date.days);
        refs.hoursComp.innerText = Utils.addLeadingZeto(date.hours);
        refs.minutesComp.innerText = Utils.addLeadingZeto(date.minutes);
        refs.secondsComp.innerText = Utils.addLeadingZeto(date.seconds);
      }, REFRESH_RATE);
    },
  };

  const fp = flatpickr('#datetime-picker', options);
  toggleButton(refs.startBtn);
}

function toggleButton(button) {
  button.disabled = !button.disabled;
}
