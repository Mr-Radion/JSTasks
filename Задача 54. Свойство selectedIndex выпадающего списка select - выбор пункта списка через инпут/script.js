let number = document.querySelector('.number');
let numberList = document.querySelector('.numberList');

number.addEventListener('input', function() {
  numberList.selectedIndex = this.value;    
});