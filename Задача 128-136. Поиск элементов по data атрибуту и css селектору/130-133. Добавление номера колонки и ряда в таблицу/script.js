let trs = document.querySelectorAll('.table .tr');
let tds = document.querySelectorAll('.table .td');

// Создаем атрибуты с номером ряда и колонки в таблице

trs.forEach(function(tr, index, arr) {
//  tr.dataset.row = [index+1];
  for (let i=0; i<tr.children.length; i++) {
    tr.children[i].dataset.row = [index+1];
    tr.children[i].dataset.col = [i+1];
  }
}); 

// По клику на любую ячейку в ее текст выводится номер ряда и номер колонки этой ячейки.

//for (let td of tds) {
//  td.addEventListener('click', function(e) {
//    e.target.innerHTML = this.dataset.col + ' : ' + this.dataset.row;
//  });     
//}


// Если диагональ главная в один цвет, а остальное в другой цвет
trs.forEach (function(value, index, arr) {
  value.children[index].addEventListener('click', function(e) {
    e.target.classList.toggle('color1');
  }); 
  for (let td of value.children) {
    if (td !== value.children[index]) {
      td.addEventListener('click', function(e) {
        e.target.classList.toggle('color2');
      });  
    }    
  }
}) 

