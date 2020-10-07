let list = document.querySelector('.parent');
let button = document.querySelector('.button');

let arr = [
  'Один', 
  'Два', 
  'Три', 
  'Четыре', 
  'Пять' 
];

let i = 0;

// Создание пунктов списка из массива сразу (вместе с ссылками на их удаление и кнопками перечеркнуть)

for (let elem of arr) {
  let listItem = document.createElement('li');
  listItem.className = 'listItem';
  list.appendChild(listItem);
    
  let spans = document.createElement('span');
  spans.innerHTML = arr[i];
  i++;
  listItem.appendChild(spans);    
    
    
  let remove = document.createElement('a');
  remove.href = '#';
  remove.innerHTML = 'Удалить';
  listItem.appendChild(remove);
    
  let links = document.createElement('a');
  links.href = '#';
  links.innerHTML = 'Готово'; 
//  let textDecoration = false;
  listItem.appendChild(links);
    
  spans.addEventListener('click', run);
  remove.addEventListener('click', removeList);
  links.addEventListener('click', addDecoration);
}

// Добавление пунктов списка по клику (вместе с ссылками на их удаление и кнопками перечеркнуть)

button.addEventListener('click', function() {
  let listItem = document.createElement('li');
  listItem.className = 'listItem';
  list.appendChild(listItem);
    
  let spans = document.createElement('span');
  spans.innerHTML = 'Текст';
  listItem.appendChild(spans);
  
  let remove = document.createElement('a');
  remove.href = '#';
  remove.innerHTML = 'Удалить';
  listItem.appendChild(remove); 
    
  let links = document.createElement('a');
  links.href = '#';
  links.innerHTML = 'Готово';
//  let textDecoration = false;
  listItem.appendChild(links);
    
  spans.addEventListener('click', run);
  remove.addEventListener('click', removeList);
  links.addEventListener('click', addDecoration);
});

// Функция добавление инпутов для редактирования 

function run() {
  let input = document.createElement('input');
  input.value = this.innerHTML;
  console.log(this.innerHTML);
  this.innerHTML = '';  
  this.appendChild(input);
  this.removeEventListener('click', run);
  let self = this;
  input.addEventListener('blur', function() {
    self.innerHTML = input.value;
    self.addEventListener('click', run);
  });
}

// Функция для удаления пунктов списка

function removeList(e) {
  this.closest('.parent').removeChild(this.parentElement);
  e.preventDefault();    
}

// Функция перечеркивания 

let textDecoration = false;

function addDecoration(e, element) { 
  textDecoration = !textDecoration;
  console.log(this.parentElement.firstElementChild);
  this.parentElement.firstElementChild.className = (textDecoration) ? 'ready' : '';
  this.innerHTML = (textDecoration) ? 'Отменить' : 'Готово';
  e.preventDefault();   
}