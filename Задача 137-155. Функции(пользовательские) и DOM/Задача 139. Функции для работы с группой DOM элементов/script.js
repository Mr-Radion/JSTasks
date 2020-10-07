function appendText(selector, text) {
  let elems = document.querySelectorAll(selector);
	
  for (let elem of elems) {
    elem.innerHTML = elem.innerHTML + text;
  }
}

appendText('.elem', 'text');