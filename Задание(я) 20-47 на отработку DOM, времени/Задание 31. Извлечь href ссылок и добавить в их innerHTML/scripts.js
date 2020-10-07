let links = document.querySelectorAll('.link');

for (elem of links) {
  elem.innerHTML = '(' + elem.href + ')' + '</br>';   
};