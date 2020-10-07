let letters = document.querySelector('.letters');
let numberLetters = document.querySelector('.numberLetters');

letters.addEventListener('blur', () => {
  let letter = letters.value.split(" ");
  numberLetters.innerHTML = `Всего ${letter.length} слов(а)`;  
});
