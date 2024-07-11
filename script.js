// Stopwatch functionality
let startTime;
let elapsedTime = 0;
let timerInterval;

const timeDisplay = document.getElementById('timeDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapList = document.getElementById('lapList');

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        formatTime(elapsedTime);
    }, 10);
    startBtn.disabled = true;
    pauseBtn.disabled = false;
}

function pauseTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    elapsedTime = 0;
    formatTime(elapsedTime);
    lapList.innerHTML = '';
}

function formatTime(milliseconds) {
    const date = new Date(milliseconds);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const centiseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}.${centiseconds}`;
}

function lapTime() {
    const lapTime = elapsedTime;
    const listItem = document.createElement('li');
    const date = new Date(lapTime);
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    const centiseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
    listItem.textContent = `${minutes}:${seconds}.${centiseconds}`;
    lapList.appendChild(listItem);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
