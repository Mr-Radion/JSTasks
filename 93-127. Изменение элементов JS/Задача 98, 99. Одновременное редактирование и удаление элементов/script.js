//Если span изначально есть 
//let elems = document.querySelectorAll('.elem');
//for (let elem of elems) {
//  let links = document.createElement('a');
//  links.href = '#';
//  links.innerHTML = 'remove';
//  elem.parentElement.appendChild(links);
//  elem.addEventListener('click', function run() {
//    let input = document.createElement('input');
//    input.value = elem.innerHTML;
//    elem.innerHTML = '';
//    elem.appendChild(input);
//    elem.removeEventListener('click', run);
//    input.addEventListener('blur', function() {
//      elem.innerHTML = input.value;
//      elem.addEventListener('click', run);
//    });
//  });
//  links.addEventListener('click', function(e) {
//    elem.closest('.parent').removeChild(this.parentElement);
//    e.preventDefault();
//  });
//}


// Если spana изначально нету

let elems = document.querySelectorAll('.parent p');


for (let elem of elems) {
  let spans = document.createElement('span');
  spans.innerHTML = elem.firstChild.textContent;
  elem.appendChild(spans);
    
  let links = document.createElement('a');
  links.href = '#';
  links.innerHTML = 'remove';
  elem.appendChild(links);
        
    
  elem.removeChild(elem.firstChild);
    
  spans.addEventListener('click', function run() {
    let input = document.createElement('input');
    input.value = spans.innerHTML;
    spans.innerHTML = '';
    spans.appendChild(input);
    spans.removeEventListener('click', run);
    input.addEventListener('blur', function() {
      spans.innerHTML = input.value;
      spans.addEventListener('click', run);
    });
  });
    
  links.addEventListener('click', function(e) {
    elem.parentElement.removeChild(this.parentElement);
    e.preventDefault();
  });
}