let contentMix = document.querySelector('.content-mix');
let btnMix = document.querySelector('.btn-mix');

let alphabet = [
'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й',
'к', 'л', 'ь', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф',
'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'
];

btnMix.addEventListener('click', getRandomStr);

function getRandomStr() {
  let listStr = [];
  for (let i=0; i<8; i++) {
    listStr += alphabet[getRandomInt(33)];
  }
  contentMix.value = listStr;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}



