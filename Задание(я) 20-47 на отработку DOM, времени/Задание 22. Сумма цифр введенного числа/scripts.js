let input = document.querySelector('.input');

function addSum(number) {
  let sum = 0;
  let numbers = [...number];
  for (elem of numbers) {
    sum+= Number(elem);
  };
  input.value = sum;
  console.log(sum);    
};