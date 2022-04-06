import Utils from './Utils';

export default class CDTimer {
  constructor(endTime) {
    this.startTime = Date.now();
    this.endTime = endTime;
    this.setted = this.estimatedTime() > 0 ? true : false;
  }

  estimatedTime() {
    return this.endTime - Date.now();
  }

  processedTime() {
    return Utils.convertMs(this.estimatedTime());
  }
}
