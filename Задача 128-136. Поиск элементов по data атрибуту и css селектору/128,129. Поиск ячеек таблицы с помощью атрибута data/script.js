let tds = document.querySelectorAll('.table .td');

// Покрасить столбец при нажатии на ячейку в красный фон

let color1 = 'td__bg-red';
//
//for (let td of tds) {
//  td.addEventListener('click', function() {
//    let col = this.dataset.col;
//    let currentTds = 
//      document.querySelectorAll(
//      '.table .td[data-col="' + col + '"]');   
//    if (currentTds) {
//      for (let elem of currentTds) {
//        elem.classList.toggle(color1);
//      }
//    } 
//  });
//}

// По нажатию на кнопку в красный фон покрасится та ячейка, номер которой совпадает с номером из переменных.

let col = 3;
let row = 2;

//let currentTds = document.querySelectorAll('.table .tr[data-row="' + row + '"] .td[data-col="' + col + '"]'); 

let currentTds = document.querySelectorAll('.table .td[data-col="' + col + '"][data-row="' + row + '"]'); 

let button = document.querySelector('.button');

button.addEventListener('click', function() {
  for (let td of currentTds) {
    td.classList.toggle(color1);
  }
});
