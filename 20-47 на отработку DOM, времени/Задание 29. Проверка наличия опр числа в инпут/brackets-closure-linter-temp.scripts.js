let number = document.querySelector('.number');
let result = document.querySelector('.result');

number.addEventListener('blur', () => {
//  let quantity = number.value.indexOf('3');
  
      
  let separation = number.value.split('');    
    
  let result = separation.filter((elem) => {
    return elem == 3;  
  });
  console.log(`Тройки встречаются ${result.length} раз(а)`);
});