let contentMix = document.querySelector('.content-mix');
let btnMix = document.querySelector('.btn-mix');

let mix; // Хранит начальное введенное значение, чтобы изменить нужно перезагрузить стр, иначе перемешивание остановится на опр этапе

btnMix.addEventListener('click', function copyMix() {
  mix = contentMix.value.repeat(1);
  btnMix.removeEventListener('click', copyMix);
});
btnMix.addEventListener('click', getRandomStr);

function getRandomStr() {
  let listStr = [...mix];
  let list = [];    
  for (let i=0; i<contentMix.value.length; i++) {
    list += listStr[getRandomInt(contentMix.value.length)];
  }
    
  contentMix.value = list;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
