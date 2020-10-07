let elem = document.querySelector('.elem');
let hideShow = document.querySelector('button');

hideShow.addEventListener('click', function() {
  elem.classList.toggle('hide');
  if (elem.classList.contains('hide')) {
    this.innerHTML = 'Показать';
  } else {
    this.innerHTML = 'Скрыть';
  }
});