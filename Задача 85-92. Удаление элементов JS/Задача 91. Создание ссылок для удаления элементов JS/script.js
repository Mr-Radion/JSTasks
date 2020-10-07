let elems = document.querySelectorAll('.parent .elem');

for (let elem of elems) {
  let remove = document.createElement('a');
  remove.href = '';
  remove.innerHTML = 'remove';
    
  elem.appendChild(remove);
    
  elem.addEventListener('click', function(e) {
    elem.parentElement.removeChild(elem);
    e.preventDefault();
  });
}
