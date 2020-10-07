let div = document.querySelector('.container');
div.appendChild(generateTable(3, 4));
let elem = document.querySelector('.elem');
elem.appendChild(generateTable(3, 4));


//let heightTable = document.querySelector('.height-table');
//let widthTable = document.querySelector('.width-table');
//let button = document.querySelector('.btn-result');

//button.addEventListener('click', generateTable(heightTable, widthTable, div));

function generateTable(rows, cols) {
   let table = document.createElement('div');
   table.className = 'table';
   let k = 0;
   for (let i=0; i<rows; i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';    
    for (let j=0; j<=cols; j++) {
      let td = document.createElement('div');
      td.className = 'td'; 
      k++;
      td.innerHTML = k;
      tr.appendChild(td);
    } 
    table.appendChild(tr);
  }
  return table; 
}
