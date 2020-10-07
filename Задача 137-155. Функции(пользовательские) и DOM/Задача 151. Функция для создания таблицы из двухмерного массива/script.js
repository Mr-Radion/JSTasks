let div = document.querySelector('.container');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
div.appendChild(generateTable(arr));

function generateTable(arr) {
   let table = document.createElement('div');
   table.className = 'table';
   for (let i=0; i<arr.length; i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';    
    for (let j=0; j<arr[i].length; j++) {
      let td = document.createElement('div');
      td.className = 'td'; 
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    } 
    table.appendChild(tr);
  }
  return table; 
}
