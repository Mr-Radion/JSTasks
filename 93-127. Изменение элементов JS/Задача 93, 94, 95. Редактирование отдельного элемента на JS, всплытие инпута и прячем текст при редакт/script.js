let elem = document.querySelector('.elem');
//let input = document.querySelector('.input');

//input.value = elem.innerHTML;

//elem.addEventListener('click', function() {
//  input.style.display = 'block';  
//})
//
//input.addEventListener('input', function() {
//  elem.innerHTML = input.value;
//});
//
//input.addEventListener('blur', function() {
//  input.style.display = 'none';
//});


// Или так с помощью создания инпута и без события ввода input.  

elem.addEventListener('click', function run() {
  let input = document.createElement('input');
  input.className = 'input';
  input.value = elem.innerHTML;  
  elem.innerHTML = '';
//  this.parentElement.appendChild(input);
  this.appendChild(input);
  input.addEventListener('blur', function() {
    elem.innerHTML = input.value;
//    this.parentElement.removeChild(input); не нужно удалять само удаляется из-за дочернего отношения input к elem 
    elem.addEventListener('click', run);
  });
  elem.removeEventListener('click', run);
});