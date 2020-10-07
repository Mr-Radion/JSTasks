//function setText(selector, text) {
//  let elem = document.querySelector(selector);
//  elem.innerHTML = text;
//}
//
//setText('.elem1', 'text1');
//setText('.elem2', 'text2');

function setAttr(selector, attribute, text) {
  let elem = document.querySelector(selector);
  elem[attribute] = text;
//  console.log(elem);
//  elem.setAttribute(attribute, text);
//  console.log(elem.getAttribute(attribute));
  console.log(elem.innerHTML);
}

setAttr('.elem1', 'innerHTML', 'text3');
setAttr('.elem2', 'innerHTML', 'text4');