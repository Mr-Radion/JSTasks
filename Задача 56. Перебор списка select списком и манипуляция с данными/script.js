let list = document.querySelector('.list');

for (let option of list) {
  option.innerHTML = option.innerHTML + ' ' + option.value;
}