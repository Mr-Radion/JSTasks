let numbers = document.querySelector('.numbers');

numbers.addEventListener('blur', () => {
  let sum = 0;
  let number = numbers.value.split(',');

  for (let elem of number) {
    sum += Number(elem);
  };    
  
  numbers.value = sum/number.length;    
});