import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Timer from './CDTimer';
import Utils from './Utils';
import refs from './refs';

const REFRESH_RATE = 1000;

initInterface();

function initInterface() {
  toggleButton(refs.startBtn);

  const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const cdTimer = new Timer(selectedDates[0].getTime());
      updateTimerUI(refs, cdTimer.processedDate());
      const interval = setInterval(() => {
        updateTimerUI(refs, cdTimer.processedDate());
      }, REFRESH_RATE);
    },
  };

  flatpickr('#datetime-picker', options);
}

function toggleButton(button) {
  button.disabled = !button.disabled;
}

function updateTimerUI(timerUIRefs, dateData) {
  const { days, hours, mins, secs } = timerUIRefs;

  days.innerText = Utils.addLeadingZeto(dateData.days);
  hours.innerText = Utils.addLeadingZeto(dateData.hours);
  mins.innerText = Utils.addLeadingZeto(dateData.minutes);
  secs.innerText = Utils.addLeadingZeto(dateData.seconds);
}
