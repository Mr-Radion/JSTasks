let table = document.querySelector('.table');
let heightTable = document.querySelector('.height-table');
let widthTable = document.querySelector('.width-table');
let button = document.querySelector('.btn-result');

button.addEventListener('click', generateTable);

function generateTable() {
  let k = 0;
  for (let i=0; i<heightTable.value; i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';    
    for (let j=0; j<widthTable.value; j++) {
      let td = document.createElement('div');
      td.className = 'td'; 
      k++;
//      if (k % 2 == 0) td.innerHTML = k;
      td.innerHTML = k;
      tr.appendChild(td);
    } 
    table.appendChild(tr);
  }
}

