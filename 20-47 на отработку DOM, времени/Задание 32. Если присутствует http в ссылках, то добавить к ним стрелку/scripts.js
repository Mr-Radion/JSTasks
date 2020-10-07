let links = document.querySelectorAll('.link');

let result = Object.values(links).map((elem) => {
  if (elem.href.indexOf('http://') == 0)
    return elem.innerHTML = elem.href + '&rarr;';
  else {
    return elem.innerHTML = elem.href;  
  };
});
