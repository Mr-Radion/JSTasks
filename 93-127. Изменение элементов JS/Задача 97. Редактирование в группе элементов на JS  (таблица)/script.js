let elems = document.querySelectorAll('.td');

for (let elem of elems) {
    elem.addEventListener('click', function run() {
      let input = document.createElement('input');
      input.className = 'input';
      input.value = elem.firstElementChild.innerHTML;  // тут содержимое td надо поменять на p 
      elem.firstElementChild.innerHTML = '';
      this.appendChild(input);
      input.addEventListener('blur', function() {
        elem.firstElementChild.innerHTML = input.value;
        this.parentElement.removeChild(input);
        elem.addEventListener('click', run);
      });
      elem.removeEventListener('click', run);
    });
}

