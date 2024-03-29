export default class Utils {
  static convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Utils.addLeadingZeto(Math.floor(ms / day));
    // Remaining hours
    const hours = Utils.addLeadingZeto(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = Utils.addLeadingZeto(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = Utils.addLeadingZeto(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
  }

  static addLeadingZeto(value) {
    return value.toString().padStart(2, '0');
  }
}
