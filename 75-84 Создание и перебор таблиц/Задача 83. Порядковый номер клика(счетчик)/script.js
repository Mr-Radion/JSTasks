let tds = document.querySelectorAll('.table .td');

let i = 1;
for (let td of tds) {
  td.addEventListener('click', function run() {
    this.innerHTML = i;
    i++;
    td.removeEventListener('click', run);
  });     
} 


