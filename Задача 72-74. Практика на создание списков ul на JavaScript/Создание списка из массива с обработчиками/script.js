let list = document.querySelector('.list');

let arr = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5'];

for (let elem of arr) {
  let item = document.createElement('li');  
  item.innerHTML = elem;
    
  item.addEventListener('click', function addText() {
    this.innerHTML = this.innerHTML + '!';
    this.removeEventListener('click', addText);
  });
  
  list.appendChild(item);
}