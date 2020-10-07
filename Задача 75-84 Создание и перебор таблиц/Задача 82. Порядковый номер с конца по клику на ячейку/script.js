let tds = document.querySelectorAll('.table .td');
let buttonText = document.querySelector('.btn-table');

for (let i = tds.length-1; i>=0; i--) {
  console.log(tds[i]);
  tds[i].addEventListener('click', function() {
    this.innerHTML = i+1;
  });     
} 


