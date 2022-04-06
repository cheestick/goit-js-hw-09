import Utils from './Utils';

const REFRESH_RATE = 1000;

export default class CDTimer {
  constructor(endTime = Date.now()) {
    this.startTime = this.currentTime;
    this.endTime = endTime;
    this.setted = this.estimatedTime() > 0 ? true : false;
  }

  startTimer() {}

  stopTimer() {}

  set startTime(newTime = this.currentTime) {
    this._startTime = newTime;
  }

  get startTime() {
    return this._startTime;
  }

  set endTime(newEndTime) {
    this._endTime = newEndTime;
  }

  get endTime() {
    return this._endTime;
  }

  get currentTime() {
    return Date.now();
  }

  estimatedTime() {
    return this.endTime - this.currentTime;
  }

  processedDate() {
    return Utils.convertMs(this.estimatedTime());
  }
}
