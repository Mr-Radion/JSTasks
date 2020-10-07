let check = document.querySelector('#check');
let link = document.querySelector('.link');

link.addEventListener('click', () => {
  check.checked = !check.checked;
});