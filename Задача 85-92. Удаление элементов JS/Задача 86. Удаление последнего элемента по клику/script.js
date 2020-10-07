let parent = document.querySelector('.parent');
//let elements = parent.querySelectorAll('li');
let elements = parent.children;
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  let i = elements.length;
  i--;
  parent.removeChild(elements[i]);
});