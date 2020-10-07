let leapYear = document.querySelector('.leap-year');
let result = document.querySelector('.result');

leapYear.addEventListener('change', definitionleapYear);

function definitionleapYear() {
  if (leapYear.value % 4 == 0) {
    result.children[0].innerHTML = ' Високосный';  
  } else {
    result.children[0].innerHTML = ' Не високосный';  
  }   
}

window.onload = definitionleapYear;