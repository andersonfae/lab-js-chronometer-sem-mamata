const chronometer = new Chronometer();

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  minDec.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[0];

  minUni.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getMinutes()
  )[1];
}

function printSeconds() {
  secDec.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[0];

  secUni.innerHTML = chronometer.computeTwoDigitNumber(
    chronometer.getSeconds()
  )[1];
}

function printMilliseconds() {
  // milDec.innerHTML = chronometer.computeTwoDigitNumber(
  //   chronometer.getMilliseconds()
  // )[0];
  // milUni.innerHTML = chronometer.computeTwoDigitNumber(
  //   chronometer.getMilliSeconds()
  // )[1];
}

function printSplit() {
  let splitLi = document.createElement('li');
  splitLi.innerText = chronometer.split();
  splits.appendChild(splitLi);
}

function clearSplits() {}

function setStopBtn() {
  btnLeft.innerText = 'STOP';
  btnLeft.className = 'btn stop';
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT';
  btnRight.className = 'btn split';
}

function setStartBtn() {
  btnLeft.innerText = 'START';
  btnLeft.className = 'btn start';
}

function setResetBtn() {
  btnRight.innerText = 'RESET';
  btnRight.className = 'btn reset';
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.innerText === 'START') {
    chronometer.start(printTime);
    setSplitBtn();
    setStopBtn();
  } else {
    setResetBtn();
    setStartBtn();
    chronometer.stop(printTime);
  }
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.innerText === 'RESET') {
    chronometer.reset();
    printTime();
  } else {
    printSplit();
  }
});
