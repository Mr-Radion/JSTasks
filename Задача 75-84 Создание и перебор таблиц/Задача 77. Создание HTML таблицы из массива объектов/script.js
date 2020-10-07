let table = document.querySelector('.table');

let employees = [
  {
    name: 'employee1', 
    age: 30, 
    salary: 400
  },
  {
    name: 'employee2', 
    age: 31, 
    salary: 500
  },
  {
    name: 'employee3', 
    age: 27, 
    salary: 650
  }
];

let k = 0;

let amountKey;

for (let employe of employees) {
  let tr = document.createElement('div');
    
  let td1 = document.createElement('div');
  td1.innerHTML = employe.name;
  tr.appendChild(td1);
    
  let td2 = document.createElement('div');
  td2.innerHTML = employe.age;
  tr.appendChild(td2);
    
  let td3 = document.createElement('div');
  td3.innerHTML = employe.salary;
  tr.appendChild(td3);
    
  [td1.className, td2.className, td3.className] = ['td', 'td', 'td'];
  
  k++; 
  amountKey = Object.keys(employe).length; 

  table.appendChild(tr);
}

table.style.gridTemplateRows = `repeat(${k}, 20%)`;    
table.style.gridTemplateColumns = `repeat(${amountKey}, 20%)`;    