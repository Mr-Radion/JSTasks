let elems = document.querySelectorAll('p');

for (let elem of elems) {
  let span = document.createElement('span');
  span.innerHTML = elem.innerHTML;
  elem.appendChild(span);  
    
  elem.removeChild(elem.firstChild);
  
  let links = document.createElement('a');
  links.href = '#'; 
  links.innerHTML = 'готово';
  elem.appendChild(links);
    
  let remove = document.createElement('a');
  remove.href = '#'; 
  remove.innerHTML = 'удалить';
  elem.appendChild(remove);   
    
  let textDecoration = false;
    
  links.addEventListener('click', function(e) {
    textDecoration = !textDecoration;
    span.className = (textDecoration) ? 'ready' : '';
    links.innerHTML = (textDecoration) ? 'отменить' : 'готово';
    e.preventDefault();      
  });
    
  remove.addEventListener('click', function(e) {
    elem.parentElement.removeChild(this.parentElement);
    e.preventDefault();   
  });
}