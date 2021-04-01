class Chronometer {
  constructor() {
    this.tenthmiliSeconds = 0;
    this.currentTime = 0;
    this.intervalId = 0;
    this.isTicking = false;
  }
  startClick(callBack) {
    if (this.isTicking === false) {
      this.isTicking = true;
      this.intervalId = setInterval(() => {
        this.tenthmiliSeconds++;
        if (this.tenthmiliSeconds % 100 == 0) {
          this.currentTime++;
        }
        if (callBack) {
          callBack();
        }
      }, 10);
    }
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60);
  }
  getSeconds() {
    return Math.floor(this.currentTime % 60);
  }
  getMilliseconds() {
    return this.tenthmiliSeconds % 100;
  }
  twoDigitsNumber(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value.toString();
    }
  }
  stopClick() {
    this.isTicking = false;
    clearInterval(this.intervalId);
  }
  resetClick(callBack) {
    this.currentTime = 0;
    this.tenthmiliSeconds = 0;
    if (callBack) {
      callBack();
    }
  }
  splitClick() {
    let result = `${this.twoDigitsNumber(
      this.getMinutes()
    )}:${this.twoDigitsNumber(this.getSeconds())}:${this.twoDigitsNumber(
      this.getMilliseconds()
    )}`;
    console.log(result);
    return result;
  }
}
