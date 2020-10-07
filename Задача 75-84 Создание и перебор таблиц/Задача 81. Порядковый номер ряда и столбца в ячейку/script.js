let trs = document.querySelectorAll('.table .tr');
let buttonText = document.querySelector('.btn-table');

buttonText.addEventListener('click', addTrs);

function addTrs() {
  for (let i = 0; i<trs.length; i++) {
    let tr = trs[i];
    let tds = tr.querySelectorAll('.td');
    console.log(tds);
    for (let j = 0; j<tds.length; j++) {
      let td = tds[j]; 
      td.innerHTML = (i + 1) + ':' + (j + 1);
    }
      
  } 
}

