let content = document.querySelector('.content-changeling');
let result = document.querySelector('.result');
let button = document.querySelector('.btn-change');

button.addEventListener('click', () => {
  let turnContent = content.value.split('').reverse().join('');
   
  if (content.value == '') {
    result.innerHTML = 'Вы не ввели слово'; 
  } else if (content.value == turnContent) {
    result.innerHTML = 'Соответствует'; 
  } else {
    result.innerHTML = 'Не соответствует'; 
  };  
    
});