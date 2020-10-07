let table = document.querySelector('.table');

let arr = [
  [2, 5, 3],    
  [2, 5, 4, 5, 9.3],    
  [2, 5, 3],    
  [2, 5],    
  [2]
];

for (let elem of arr) {
  let tr = document.createElement('div');
  tr.className = 'tr';
  for (let item of elem) {
    let td = document.createElement('div');
    td.className = 'td';
    td.innerHTML = item * item;
    tr.appendChild(td);
  }
  table.appendChild(tr);
}