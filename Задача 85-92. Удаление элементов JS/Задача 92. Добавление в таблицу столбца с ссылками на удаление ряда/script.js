let table = document.querySelector('.table')
let trs = table.children;

let k = 1;

for (let elem of trs) {
  let td = document.createElement('a');
  td.className = 'td';
  td.innerHTML = 'remove' + k++;    
  td.style.cursor = 'pointer';
  elem.appendChild(td);
  td.addEventListener('click', function run() {
    this.closest('.table').removeChild(this.parentElement);
  });    
} 


