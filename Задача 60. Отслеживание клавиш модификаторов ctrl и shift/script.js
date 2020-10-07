let list = document.querySelector('.list');

list.addEventListener('click', function(e) {
  if (e.ctrlKey) {
    e.target.innerHTML = e.target.innerHTML + ' 1';    
  }
  if (e.shiftKey) {
    e.target.innerHTML = e.target.innerHTML + ' 2';    
  }
});