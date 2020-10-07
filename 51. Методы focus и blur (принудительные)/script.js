let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');

input1.addEventListener('input', function() {
  if (this.value.length > 2) {
    input2.focus();
  }    
});

input2.addEventListener('input', function() {
  if (this.value.length > 2) {
    input2.blur();
  }    
});