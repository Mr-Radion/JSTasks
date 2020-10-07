let elem = document.querySelectorAll('.elem');

for (let element of elem) {
  element.addEventListener('click', function() {
    element.parentElement.removeChild(this);
  });
}