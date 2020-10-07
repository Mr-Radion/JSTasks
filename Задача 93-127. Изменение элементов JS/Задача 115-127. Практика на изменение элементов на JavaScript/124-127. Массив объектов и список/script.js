let list = document.querySelector('.parent');
let button = document.querySelector('.button');
let inputName = document.querySelector('.inputName');
let inputAge = document.querySelector('.inputAge');
let inputSalary = document.querySelector('.inputSalary');

let employees = [
  {name: 'employee1', age: 30, salary: 400},
  {name: 'employee2', age: 31, salary: 500},
  {name: 'employee3', age: 32, salary: 600},
];

// Создание пунктов списка из массива сразу (вместе с ссылками на их удаление и кнопками перечеркнуть)

for (let employee of employees) {
  let listItem = document.createElement('li');
  listItem.className = 'listItem';
  list.appendChild(listItem);
    
  let span1 = document.createElement('span');
  span1.innerHTML = employee.name;
  listItem.appendChild(span1);  
    
  let span2 = document.createElement('span');
  span2.innerHTML = employee.age;
  listItem.appendChild(span2);    
    
  let span3 = document.createElement('span');
  span3.innerHTML = employee.salary;
  listItem.appendChild(span3);    
    
  let remove = document.createElement('a');
  remove.href = '#';
  remove.innerHTML = 'Удалить';
  listItem.appendChild(remove);
    
  span1.addEventListener('click', runEdit);  
  span2.addEventListener('click', runEdit);  
  span3.addEventListener('click', runEdit);
  remove.addEventListener('click', removeList);
}

// Добавление пунктов списка по клику (вместе с ссылками на их удаление и кнопками перечеркнуть)

button.addEventListener('click', function() {
  let listItem = document.createElement('li');
  listItem.className = 'listItem';
  list.appendChild(listItem);
    
  let span1 = document.createElement('span');
  span1.innerHTML = (inputName.value) ? inputName.value : 'Имя работника';
  listItem.appendChild(span1);  
    
  let span2 = document.createElement('span');
  span2.innerHTML = (inputAge.value) ? inputAge.value : 'Возраст';
  listItem.appendChild(span2);    
    
  let span3 = document.createElement('span');
  span3.innerHTML =  (inputSalary.value) ? inputSalary.value : 'Зарплата';
  listItem.appendChild(span3);        
  
  let remove = document.createElement('a');
  remove.href = '#';
  remove.innerHTML = 'Удалить';
  listItem.appendChild(remove); 
    
  span1.addEventListener('click', runEdit);
  span2.addEventListener('click', runEdit);
  span3.addEventListener('click', runEdit);
  remove.addEventListener('click', removeList);
});

// Функция добавление инпутов для редактирования 

function runEdit() {
  let input = document.createElement('input');
  input.value = this.innerHTML;
  this.innerHTML = '';  
  this.appendChild(input);
  this.removeEventListener('click', runEdit);
  let self = this;
  input.addEventListener('blur', function() {
    self.innerHTML = input.value;
    self.addEventListener('click', runEdit);
  });
}

// Функция для удаления пунктов списка

function removeList(e) {
  this.closest('.parent').removeChild(this.parentElement);
  e.preventDefault();    
}