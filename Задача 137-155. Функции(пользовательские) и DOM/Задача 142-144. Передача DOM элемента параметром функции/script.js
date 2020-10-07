// Задача 1
//let elem1 = document.querySelector('.elem1');
//let elem2 = document.querySelector('.elem2');
//let text = 'Текст';
//
//function appendText(elem, value) {
//  elem.innerHTML = elem.innerHTML + ' ' + value;    
//}
//
//appendText(elem1, text);
//appendText(elem2, text);

// Задача 2 и 3

let elems = document.querySelectorAll('.elem');
let input = document.querySelector('.input');

//function setValue(elem, text) {
//  elem.addEventListener('input', function() {
//    this.value += text; 
//    console.log(this.value);
//  });
//}

function appendText(elems, value) {
  for (let elem of elems) {
    elem.innerHTML = elem.innerHTML + ' ' + value;           
  }
}

appendText(elems, input.value);

