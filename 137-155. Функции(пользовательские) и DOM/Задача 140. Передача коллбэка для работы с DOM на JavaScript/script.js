function func(elem) {
  elem.innerHTML = elem.innerHTML + '!'; 
}

function forEach(selector, func) {
  let elems = document.querySelectorAll(selector);
	
  for (let elem of elems) {
    func(elem);
  }
}

forEach('.elem', func);