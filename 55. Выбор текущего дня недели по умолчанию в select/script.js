let currentDay = document.querySelector('.currentDay');

function choiceDay() {
  let now = new Date().getDay();
  currentDay.value = now;
}

window.onload = choiceDay;