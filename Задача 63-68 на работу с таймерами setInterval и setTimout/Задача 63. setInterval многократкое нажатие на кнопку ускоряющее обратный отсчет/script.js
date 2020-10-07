let button = document.querySelector('.btn-timer');
let result = document.querySelector('.result');

button.addEventListener('click', function timer() {
  let timerId = setInterval(function() {
    result.innerHTML--;
    if (result.innerHTML <= 0) {
      clearInterval(timerId);    
    }
  }, 1000);
  this.removeEventListener('click', timer); // Чтобы нельзя было ускорять таймер
});

