import Timer from './timer.js';
import TimeDisplay from './timeDisplay.js';
import Converter from './converter.js';

const focusButton = document.getElementById("focus-button");
const shortBreakButton = document.getElementById("short-break-button");
const longBreakButton = document.getElementById("long-break-button");
const stopButton = document.getElementById("stop-button");

const timeText = new TimeDisplay(new Converter());
const timer = new Timer(timeText);

focusButton.onclick = function () {
  timer.startCounting(25 * 60);
};

shortBreakButton.onclick = function () {
  timer.startCounting(5 * 60);
};

longBreakButton.onclick = function () {
  timer.startCounting(30 * 60);
};

stopButton.onclick = function() {
  timer.stopCounting();
}
