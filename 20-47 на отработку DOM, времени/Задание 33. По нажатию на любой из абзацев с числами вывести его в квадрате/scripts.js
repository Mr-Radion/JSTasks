let content = document.querySelectorAll('.content');

for (let element of content) {
  element.addEventListener('click', function square() {
    this.innerHTML = this.innerHTML * this.innerHTML; 
    this.removeEventListener('click', square);
  });
}

