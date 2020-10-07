let text = document.querySelector('.text');
let content = document.querySelector('.content');

text.addEventListener('blur', () => {
  content.innerHTML = content.innerHTML + text.value;
});