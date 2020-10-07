let tds = document.querySelectorAll('.table .td');
let table = document.querySelector('.table');
//let tableChild = table.children;
let buttonText = document.querySelector('.btn-table');

buttonText.addEventListener('click', addTrs);

function addTrs() {
//  let i = 0;  
  let i = tds.length;
  for (let td of tds) {
//    td.innerHTML = '!';  
//    td.innerHTML = i++;  
    td.innerHTML = i--;  
  } 
}

