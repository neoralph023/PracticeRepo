let minutes = 00;
let seconds = 00;
let miliseconds = 00;
let interval;

function setTimerValue() {
  document.getElementById("miliseconds").innerHTML = miliseconds.toString().padStart(2, "0");
  document.getElementById("seconds").innerHTML = seconds.toString().padStart(2, "0");
  document.getElementById("minutes").innerHTML = minutes.toString().padStart(2, "0");
}

function setTimerToDefaultValue() {
  minutes = 00;
  seconds = 00;
  miliseconds = 00;
}

function startTimer() {
  miliseconds++;
  if (miliseconds > 99) {
    seconds++;
    miliseconds = 0;
  }
  if (seconds >= 59) {
    minutes++;
    seconds = 0;
  }
  setTimerValue();
}

function startBtnCLicked() {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
}

function stopBtnCLicked() {
  clearInterval(interval);
}

function resetBtnCLicked() {
  clearInterval(interval);
  setTimerToDefaultValue();
  setTimerValue();
}

function setEventListener() {
  document.getElementById("startBtn").addEventListener("click", startBtnCLicked);
  document.getElementById("stopBtn").addEventListener("click", stopBtnCLicked);
  document.getElementById("resetBtn").addEventListener("click", resetBtnCLicked);
}

document.addEventListener("DOMContentLoaded", () => {
  setEventListener();
});
