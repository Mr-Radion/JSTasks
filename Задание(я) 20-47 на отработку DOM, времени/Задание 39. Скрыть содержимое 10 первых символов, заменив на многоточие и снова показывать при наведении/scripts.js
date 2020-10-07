let content = document.querySelectorAll('.content');

for (let element of content) {
  element.addEventListener('mouseover', function() {
    element.classList.add('overflowNone'); ;
  });  
  element.addEventListener('mouseout', function() {
    element.classList.remove('overflowNone'); ;
  });  
}

// Выводим первые 10 символов
//for (elem of content) {
//  let sub = elem.innerHTML.substring(0, 10);
//  elem.innerHTML = sub; 
//}
