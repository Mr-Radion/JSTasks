let number = document.querySelectorAll('.number');
let result = document.querySelector('.result');
let button = document.querySelector('.btn-result');

//console.log(button);

button.addEventListener('click', () => {
  let sum = 0;
  
  for (elem of number) {
    sum+= Number(elem.value);
  }
    
  result.innerHTML = sum;
});