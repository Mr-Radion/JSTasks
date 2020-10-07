function func(elem, index) {
  elem.innerHTML = elem.innerHTML + ' ' + index; 
}

function forEach(selector, func) {
  let elems = document.querySelectorAll(selector);
	
  elems.forEach(function(elem, index) {
    func(elem, index);
  });
}

forEach('.elem', func);