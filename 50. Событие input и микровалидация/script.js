let formWrapper = document.querySelector('.form-wrapper');
let input = formWrapper.querySelector('.input');
let result = formWrapper.querySelector('.result-valid');

input.addEventListener('input', function() {
  if (this.value.length > 5) {
    result.innerHTML = `Лимит символов превышен на <span>${input.value.length - 5}</span>`;
    this.style.borderColor = 'red';
  } else if (this.value.length < 5) {
    result.innerHTML = `Нужно ввести еще <span>${5 - input.value.length}</span> символов`;
    this.style.borderColor = 'red';
  } else {
    result.innerHTML = 'Вы ввели 5 символов';
    this.style.borderColor = 'green';
  }
});

