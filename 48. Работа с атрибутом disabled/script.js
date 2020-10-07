let formWrapper = document.querySelector('#form-wrapper');
let inpute = formWrapper.querySelector('.inpute'); 
let btnBlock = formWrapper.querySelector('.btn-block'); 
let btnUnlocking = formWrapper.querySelector('.btn-unlocking'); 
let btnCheck = formWrapper.querySelector('.btn-check'); 


btnBlock.addEventListener('click', function() {
 inpute.disabled = true; 
 inpute.removeAttribute('placeholder');
});

btnUnlocking.addEventListener('click', function() {
 inpute.disabled = false; 
 inpute.removeAttribute('placeholder');
});

btnCheck.addEventListener('click', function() {
  (inpute.hasAttribute('disabled')) ? inpute.setAttribute('placeholder', 'Заблокировано') : inpute.setAttribute('placeholder', 'Разблокировано');  
});