let tds = document.querySelectorAll('.table .td');

// Активация не более 3 всего

//for (let td of tds) {
//  td.addEventListener('click', function() {
//    let activeTds = 
//      document.querySelectorAll(
//      '.table .tr div.active');   
//    if (activeTds && activeTds.length < 3) {
//      this.classList.add('active');
//    } 
//  });
//}

// Активация не более 5 ячеек в 1 ряду таблицы

let trs = document.querySelectorAll('.table .tr');

//for (let tr of trs) {
//  for (let td of tr.children) {
//  td.addEventListener('click', function() {
//    let activeTds = 
//      td.parentElement.querySelectorAll(
//      'div.active');   
//    if (activeTds && activeTds.length < 5) {
//      this.classList.add('active');
//    } 
//  }); 
//  }
//}

// Сделать не возможным активацию соседей в ряду слева и справа уже активированной ячейки

//for (let tr of trs) {
//  for (let td of tr.children) {
//  td.addEventListener('click', function() {
//    let activeTds = 
//      td.parentElement.querySelectorAll(
//      'div.active');   
//    if (activeTds && activeTds.length < 5 && !this.previousElementSibling.classList.contains('active') && !this.nextElementSibling.classList.contains('active')) {
//      this.classList.add('active');
//    } 
//  }); 
//  }
//}

// Сделать не возможным активацию соседей сверху и снизу уже активированной ячейки

for (let i = 0; i < tds.length; i++) {
  tds[i].addEventListener('click', function() {
    let activeTds = 
    this.closest('.table').querySelectorAll(
    'div.active'); // Все дивы с классом .active
//    let elem = this.parentElement.querySelectorAll('.td'); 
    
    let elemPrevious = (this.parentElement.previousElementSibling) ? this.parentElement.previousElementSibling.querySelectorAll('.td') : false; 
    let elemNext = (this.parentElement.nextElementSibling) ? this.parentElement.nextElementSibling.querySelectorAll('.td') : false; 

    if (activeTds 
        && ((elemPrevious) ? !elemPrevious[this.dataset.col-1].classList.contains('active') : null)
        && ((elemNext) ? !elemNext[this.dataset.col-1].classList.contains('active') : null) 
       ) {
      this.classList.add('active');
    } 
  }); 
}

// в послелней задаче я обработал исключения с пустыми значениями, но сверху и снизу в рядах ячейки не активируются, в остальном порядок, потом при необходимости исправить