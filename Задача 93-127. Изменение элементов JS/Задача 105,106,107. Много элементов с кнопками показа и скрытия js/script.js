let buttons = document.querySelectorAll('button');

// Вариант 1. Связь по class и data атрибутам

//for (let button of buttons) {
//  button.addEventListener('click', function() {
//    let elem = document.querySelector('.' + this.dataset.elem);
//    elem.classList.toggle('hide');
//    if (elem.classList.contains('hide')) {
//      button.innerHTML = 'Показать';      
//      button.style.display = 'block';      
//    } else {
//      button.innerHTML = 'Скрыть';      
//    }
//  });    
//}

// Вариант 2. Связь по порядковому номеру, но тут минус что сложно
// обратится к элементам по отдельности для доп операций и пришлось обратится
// через соседний тег

//let elems = document.querySelectorAll('p');
//
//for (let i = 0; i<=buttons.length; i++) {
//  buttons[i].addEventListener('click', function() {
//    elems[i].classList.toggle('hide');
//    if (this.previousElementSibling.classList.contains('hide')) {
//      this.innerHTML = 'Показать';      
//      this.style.display = 'block';      
//    } else {
//      this.innerHTML = 'Скрыть';      
//    }
//  });    
//}

// Вариант 3. Через соседа напрямую 

for (let button of buttons) {
  button.addEventListener('click', function() {
    this.previousElementSibling.classList.toggle('hide');
    if (this.previousElementSibling.classList.contains('hide')) {
      button.innerHTML = 'Показать';      
      button.style.display = 'block';      
    } else {
      button.innerHTML = 'Скрыть';      
    }
  });    
}