
let elems = document.querySelectorAll('.elem');

for (let elem of elems) {
    elem.addEventListener('click', function run() {
      let input = document.createElement('input');
      input.className = 'input';
      input.value = elem.innerHTML;  
      elem.innerHTML = '';
      this.appendChild(input);
      input.addEventListener('blur', function() {
        elem.innerHTML = input.value;
        elem.addEventListener('click', run);
      });
      elem.removeEventListener('click', run);
    });
}