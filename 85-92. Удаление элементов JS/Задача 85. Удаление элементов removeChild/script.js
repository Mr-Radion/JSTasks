let parent = document.querySelector('.parent');
let elem = document.querySelector('.elem');
let button = document.querySelector('.button');

button.addEventListener('click', function() {
  parent.removeChild(elem);
});