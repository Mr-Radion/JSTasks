let counter = document.querySelector('.counter');
let increase = document.querySelector('.click_increase');
let decrease = document.querySelector('.click_decrease');

increase.addEventListener('click', addCounterIn());

decrease.addEventListener('click', addCounterD());

function addCounterIn() {
  Number(counter.value);
  return function() {
    counter.value++;  
  }
}

function addCounterD() {
  Number(counter.value);
  return function() {
    if (counter.value != 0)
    counter.value--;  
  }
  console.log(counter.value);  
}