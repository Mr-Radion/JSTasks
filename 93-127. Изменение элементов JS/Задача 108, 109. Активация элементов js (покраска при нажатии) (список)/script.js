let lists = document.querySelectorAll('li');

for (let list of lists) {
  list.addEventListener('click', function() {
    this.classList.toggle('active');
  });    
}