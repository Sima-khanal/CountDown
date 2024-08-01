let timerInterval;
let totalSeconds;
let secondsRemaining;
let isPaused = false;

function startTimer() {
  if (!isPaused) {
    const hours = parseInt(document.getElementById('hoursInput').value) || 0;
    const minutes = parseInt(document.getElementById('minutesInput').value) || 0;
    const seconds = parseInt(document.getElementById('secondsInput').value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;
    secondsRemaining = totalSeconds;
  }

  isPaused = false;
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const hours = Math.floor(secondsRemaining / 3600);
  const minutes = Math.floor((secondsRemaining % 3600) / 60);
  const seconds = secondsRemaining % 60;

  const timerDisplay = document.getElementById('timerDisplay');
  timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  if (secondsRemaining === 0) {
    clearInterval(timerInterval);
    alert('Timer finished!');
  } else {
    secondsRemaining--;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isPaused = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  isPaused = false;
  document.getElementById('timerDisplay').textContent = '00:00:00';
  document.getElementById('hoursInput').value = '';
  document.getElementById('minutesInput').value = '';
  document.getElementById('secondsInput').value = '';
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
