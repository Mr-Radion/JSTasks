let formWrapper = document.querySelector('.form-wrapper');
let input = formWrapper.querySelector('.input');
let button = formWrapper.querySelector('.btn-check');
let result = formWrapper.querySelector('.result');


button.addEventListener('click', checkResult);

function checkResult() {
  let res = (input.checked) ? 'привет!' : 'пока!';  
  result.children[0].firstChild.textContent = `${res}`;
}

window.onload = checkResult; 