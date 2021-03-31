const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById("minDec");
let minUni = document.getElementById("minUni");
let secDec = document.getElementById("secDec");
let secUni = document.getElementById("secUni");
let milDec = document.getElementById("milDec");
let milUni = document.getElementById("milUni");
let splits = document.getElementById("splits");

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  let result = chronometer.getMinutes();
  minUni.innerText = result % 10;
  minDec.innerText = Math.floor(result / 10);
}

function printSeconds() {
  let result = chronometer.getSeconds();
  secUni.innerText = result % 10;
  secDec.innerText = Math.floor(result / 10);
}

// ==> BONUS
function printMilliseconds() {
  let result = chronometer.getMilliseconds();
  milUni.innerText = result % 10;
  milDec.innerText = Math.floor(result / 10);
}

function printSplit() {
  let result = chronometer.splitClick();
  console.log(result);
}

function clearSplits() {
  splits.innerText = "";
}

function setStopBtn() {
  btnLeft.innerText = "STOP";
  btnLeft.className = `btn stop`;
}

function setSplitBtn() {
  btnRight.innerText = "SPLIT";
  btnRight.className = `btn split`;
}

function setStartBtn() {
  btnLeft.innerText = "START";
  btnLeft.className = `btn start`;
}

function setResetBtn() {
  btnRight.innerText = "RESET";
  btnRight.className = `btn reset`;
}

// Start/Stop Button
btnLeft.addEventListener("click", () => {
  if (!chronometer.isTicking) {
    chronometer.startClick(printTime);
    setStopBtn();
    setSplitBtn();
  } else {
    chronometer.stopClick();
    setStartBtn();
    setResetBtn();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", () => {
  if (!chronometer.isTicking) {
    clearSplits();
    chronometer.currentTime = 0;
    chronometer.resetClick(printTime);
  } else {
    let newSplit = document.createElement("li");
    newSplit.innerText = chronometer.splitClick();
    splits.appendChild(newSplit);
  }
});
