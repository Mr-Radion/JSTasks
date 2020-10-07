let resultCounter = document.querySelector('.result-counter');
let btnCounter = document.querySelector('.btn-counter');

btnCounter.addEventListener('click', function() {    
  this.dataset.counter = Number(this.dataset.counter) + 1;
  resultCounter.innerHTML = this.dataset.counter;
});

