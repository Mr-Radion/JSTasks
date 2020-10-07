//let inNumber = document.querySelector('.inNumber');
let arrNumbers = document.querySelector('.arrNumbers');
let result = document.querySelector('.result');

let numbers = [1, 3, 34, 90, 3.5];
let sum = 0;
for (let elem of numbers) {
  arrNumbers.innerHTML += `<input type=text value=${elem} disabled/></br>`
  sum += elem;
}

result.innerHTML = `<div style="margin-top: 10px">Сумма ${sum}</div>`

