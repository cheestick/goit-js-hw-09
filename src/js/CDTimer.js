import Utils from './Utils';

export default class CDTimer {
  constructor(endTime = Date.now()) {
    this.startTime = this.currentTime;
    this.endTime = endTime;
    this.setted = this.estimatedTime() > 0;
    this.stopped = this.estimatedTime() < 1;
  }

  set startTime(newTime = this.currentTime) {
    this._startTime = newTime;
  }

  get startTime() {
    return this._startTime;
  }

  set endTime(newEndTime) {
    this._endTime = newEndTime;
    this.setted = this.estimatedTime() > 0;
    this.stopped = this.estimatedTime() < 1;
  }

  get endTime() {
    return this._endTime;
  }

  set setted(isSetted) {
    this._setted = isSetted;
  }

  get setted() {
    return this._setted;
  }

  get currentTime() {
    return Date.now();
  }

  estimatedTime() {
    const estTime = this.endTime - this.currentTime;
    if (estTime <= 0) {
      this.stopped = true;
      return 0;
    }
    return estTime;
  }

  processedDate() {
    return Utils.convertMs(this.estimatedTime());
  }
}
