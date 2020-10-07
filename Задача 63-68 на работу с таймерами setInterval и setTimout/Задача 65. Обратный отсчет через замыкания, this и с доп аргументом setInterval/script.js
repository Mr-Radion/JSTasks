let result = document.querySelector('.result');

result.addEventListener('click', function run() {
  let timerId = setInterval(
    function(self) {
      return function() {
        self.value--;
        if (self.value<=0) {
          clearInterval(timerId);    
        };
      }
    }(this), 100
  );  
// или без замыканий с использованием доп аргументов(которые передают аргументы в функцию) функции setInterval
//  let timerId = setInterval(
//    function(self) {
//      self.value--;
//      if (self.value<=0) {
//        clearInterval(timerId);    
//      };
//    }, 100, this);
  this.removeEventListener('click', run); // Чтобы убрать многократное нажатие на кнопку, которое приводит к ускорению таймера
});