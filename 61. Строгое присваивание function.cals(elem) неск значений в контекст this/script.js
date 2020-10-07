let text1 = document.querySelector('.text1');
let text2 = document.querySelector('.text2');
let text3 = document.querySelector('.text3');
let result = document.querySelector('.result');

//function context() {
//  result.innerHTML = this[0].value + '</br>' + this[1].value + '</br>' + this[2].value;
//}
//
//context.call([text1, text2, text3]);

function context() {
  let [text1, text2, text3] = this; // с применением деструктуризации
  result.innerHTML = `${text1.value}</br>${text2.value}</br>${text3.value}`;
}

context.call([text1, text2, text3]);

