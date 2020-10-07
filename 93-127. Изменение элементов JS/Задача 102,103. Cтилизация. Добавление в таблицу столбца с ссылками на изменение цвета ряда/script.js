let table = document.querySelector('.table')
let trs = table.children;

for (let elem of trs) {
  let td = document.createElement('a');
  td.href = '#';
  td.className = 'td';
  td.innerHTML = 'Покрасить';    
  td.style.cursor = 'pointer';
  elem.appendChild(td);
  td.addEventListener('click', function run(e) {
    elem.classList.toggle('tr-green');
    if (elem.classList.contains('tr-green')) {
      td.innerHTML = 'Отменить покраску';
    } else {
      td.innerHTML = 'Покрасить';
    }
    e.preventDefault();
  });    
} 


