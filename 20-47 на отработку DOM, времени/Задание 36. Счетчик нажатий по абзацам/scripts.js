let counter = document.querySelector('.counter');
let content = document.querySelectorAll('.content');

for (let elem of content) {
  elem.addEventListener('click', function() {
    counter.value++;
  });
}