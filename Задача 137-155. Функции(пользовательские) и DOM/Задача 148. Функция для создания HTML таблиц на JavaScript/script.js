let table = document.querySelector('.table');
let heightTable = document.querySelector('.height-table');
let widthTable = document.querySelector('.width-table');
let button = document.querySelector('.btn-result');

button.addEventListener('click', generateTable(heightTable, widthTable, table));

function generateTable(rows, cols, parent) {
   let k = 0;
   for (let i=0; i<Number(rows.value); i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';    
    for (let j=0; j<=Number(cols.value); j++) {
      let td = document.createElement('div');
      td.className = 'td'; 
      k++;
      td.innerHTML = k;
      tr.appendChild(td);
    } 
    parent.appendChild(tr);
  }
}
