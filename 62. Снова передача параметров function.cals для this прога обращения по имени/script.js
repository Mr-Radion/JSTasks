let input = document.querySelector('.input');
let result = document.querySelector('.result');

// синтаксис func.call(context, arg1, arg2, ...); 

function willName(surname, name) {
  result.innerHTML = this.value + ' ' + surname + ' ' + name    
}

willName.call(input, 'Иванов', 'Иван');