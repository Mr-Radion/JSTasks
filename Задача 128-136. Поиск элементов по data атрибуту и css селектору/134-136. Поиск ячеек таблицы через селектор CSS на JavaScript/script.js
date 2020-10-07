// Покрасить ячейки 3 столбца в красный фон

//let tds = document.querySelectorAll('.table .tr .td:last-child');
// или 
//let tds = document.querySelectorAll('.table .tr .td:nth-child(3)');
//
//for (let td of tds) {
//  td.classList.add('color1');
//}
//

// Третья ячейка первого ряда в красный фон

//let td = document.querySelector('.table .tr .td:last-child');
// или
//let td = document.querySelector('.table .tr .td:nth-child(3)');
//
//td.classList.add('color1');

// Все нечетные ячейки четных рядов в красный фон 

let tds = document.querySelectorAll('.table .tr:nth-child(even) .td:nth-child(odd)');

for (let td of tds) {
  td.classList.add('color1');
}

