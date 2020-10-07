// Задача 1

//let elems = document.querySelectorAll('.elem');
//
//function appendText(elems, text) {
//  for (let elem of elems) {
//    elem.innerHTML = elem.innerHTML + ' ' + text;
//  }
//}
//
//appendText(elems, 'text');

// Задача 2, 3 

let elem = document.querySelector('.elems');

let arr = [
  'Текст 1', 
  'Текст 2',
  'Текст 3',
  'Текст 4',
  'Текст 5'
];

function appendElem(ull, text) {
  for (let elem of text) {
    let li = document.createElement('li');
    li.innerHTML = elem;
    ull.appendChild(li);  
  }
}

appendElem(elem, arr);