let resultRemove = document.querySelector('.result-remove');

resultRemove.addEventListener('change', function run() {
  let timerId = setInterval(function(self) {
    self.value *= self.value;
    if (self.value >= 100) {
      clearInterval(timerId);
    }
  }, 1000, this);  
  this.removeEventListener('change', run);
});