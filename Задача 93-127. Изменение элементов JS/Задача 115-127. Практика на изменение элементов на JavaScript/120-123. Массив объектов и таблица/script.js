let table = document.querySelector('.table');
let button = document.querySelector('.btn-addEmployee');
let inputName = document.querySelector('.inputName');
let inputAge = document.querySelector('.inputAge');
let inputSalary = document.querySelector('.inputSalary');

let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

// Создание таблицы из массива объектов

for (let employe of employees) {
  let tr = document.createElement('div');
  tr.className = 'tr';
  
  let td1 = document.createElement('div');
  let text1 = document.createElement('p');
  td1.appendChild(text1);
  td1.firstElementChild.innerHTML = employe.name;
  tr.appendChild(td1);
    
  let td2 = document.createElement('div');
  let text2 = document.createElement('p');
  td2.appendChild(text2);
  td2.firstElementChild.innerHTML = employe.age;
  tr.appendChild(td2);
    
  let td3 = document.createElement('div');
  let text3 = document.createElement('p');
  td3.appendChild(text3);
  td3.firstElementChild.innerHTML = employe.salary;
  tr.appendChild(td3);
    
  [td1.className, td2.className, td3.className] = ['td', 'td', 'td'];
    
  let remove = document.createElement('a');
  remove.href = '#';
  let text4 = document.createElement('p');
  remove.appendChild(text4);
  remove.firstElementChild.innerHTML = 'Удалить ряд';
  tr.appendChild(remove);
      
  table.appendChild(tr);
    
  td1.addEventListener('click', runEdit);
  td2.addEventListener('click', runEdit);
  td3.addEventListener('click', runEdit);
    
  remove.addEventListener('click', runDelete);
}

// Добавление нового работника 

button.addEventListener('click', function() {
  let tr = document.createElement('div');
  tr.className = 'tr';
  
  let td1 = document.createElement('div');
  let text1 = document.createElement('p');
  td1.appendChild(text1);
  td1.firstElementChild.innerHTML = inputName.value;
  tr.appendChild(td1);
    
  let td2 = document.createElement('div');
  let text2 = document.createElement('p');
  td2.appendChild(text2);
  td2.firstElementChild.innerHTML = inputAge.value;
  tr.appendChild(td2);
    
  let td3 = document.createElement('div');
  let text3 = document.createElement('p');
  td3.appendChild(text3);
  td3.firstElementChild.innerHTML = inputSalary.value;
  tr.appendChild(td3);
    
  [td1.className, td2.className, td3.className] = ['td', 'td', 'td'];
    
  let remove = document.createElement('a');
  remove.href = '#';
  let text4 = document.createElement('p');
  remove.appendChild(text4);
  remove.firstElementChild.innerHTML = 'Удалить ряд';
  tr.appendChild(remove);
      
  table.appendChild(tr);
    
  td1.addEventListener('click', runEdit);
  td2.addEventListener('click', runEdit);
  td3.addEventListener('click', runEdit);
    
  remove.addEventListener('click', runDelete); 
});

// Функция редактирования ячеек

function runEdit() {
  let input = document.createElement('input');
  input.className = 'input';
  input.value = this.firstElementChild.innerHTML;  
  this.firstElementChild.innerHTML = '';
  this.appendChild(input);
  this.removeEventListener('click', runEdit);

  let self = this;    
    
  input.addEventListener('blur', function() {
    self.firstElementChild.innerHTML = input.value;
    self.removeChild(input);
    self.addEventListener('click', runEdit);
  });
}

// Функция удаления рядов таблицы 

function runDelete(e) {
  this.parentElement.parentElement.removeChild(this.parentElement);
  e.preventDefault();    
}