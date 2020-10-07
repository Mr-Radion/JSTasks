let elem = document.querySelector('.elem');
let remove = document.querySelector('.remove');

remove.addEventListener('click', function(e) { 
  elem.parentElement.removeChild(elem);
  e.preventDefault();
});