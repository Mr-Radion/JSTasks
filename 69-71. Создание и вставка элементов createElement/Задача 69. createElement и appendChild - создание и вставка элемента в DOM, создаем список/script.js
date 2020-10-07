let list = document.querySelector('.list');
let button = document.querySelector('.btn-list');
let listItem = document.createElement('li');

button.addEventListener('click', function() {
  list.appendChild(listItem).innerHTML = 'пункт';      
});