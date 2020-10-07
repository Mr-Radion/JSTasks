let number = document.querySelector('.number');

number.addEventListener('blur', function() {
  if (number.value >=1 && number.value <=100) {   
    number.style = 'border: 2px solid green';    
  } else {
    number.style = 'border: 2px solid red';    
  }
});