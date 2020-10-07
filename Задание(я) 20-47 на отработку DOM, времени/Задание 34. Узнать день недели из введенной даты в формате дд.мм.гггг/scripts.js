let date = document.querySelector('.date');
let result = document.querySelector('.result');

date.addEventListener('blur', function addDaysWeek() {
  let dateInfo = date.value.split('.');
  let dat = new Date(dateInfo[2], `${(dateInfo[1] == 0) ? 0 : dateInfo[1] - 1}`, dateInfo[0]);
  let daysWeek = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  let thisDay = daysWeek[dat.getDay()];    
  result.innerHTML = thisDay;
// Убрать дублирование данных и повторить запуск функции, если дата изменилась в инпуте введенная. 
//  if () addDaysWeek();
//  this.removeEventListener('blur', addDaysWeek);
});

//let test = 