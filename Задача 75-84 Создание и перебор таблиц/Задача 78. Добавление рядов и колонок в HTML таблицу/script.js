//let trs = document.querySelectorAll('.table .tr');
let trFirst = document.querySelector('.tr');
let tds = trFirst.children;
let table = document.querySelector('.table');
let tableChild = table.children;
let buttonRows = document.querySelector('.btn-table-rows');
let buttonСolumn = document.querySelector('.btn-table-column');

// Добавление рядов

let k = 1;

//let amountKey = tableChild.length;
let amountValue = Object.keys(tds).length;

buttonRows.addEventListener('click', addTrs);

function addTrs() {
  for (let tr of tableChild) {
    let td = document.createElement('div');
    td.className = 'td';
    tr.appendChild(td);  
    k++; 
  }
  
  ++amountValue;
  table.style.gridTemplateRows = `repeat(${k}, 50px)`;  
}

//Добавление столбцов-колонок

buttonСolumn.addEventListener('click', addTds);

function addTds() {
  let tr = document.createElement('div');
  tr.className = 'tr'; 
    
  for (let i = 0; i<amountValue; i++) {
    let td = document.createElement('div');
    td.className = 'td';
    tr.appendChild(td);
  }       
  
  table.style.gridTemplateColumns = `repeat(${tableChild.length+1}, 50px)`;  
  table.appendChild(tr);  
  console.log(tableChild);
}

