let input = document.querySelector('.input');
let list = document.querySelector('.list');

input.addEventListener('change', function() {
  let listInfo = input.value.split(','); 
  for ( let elem of listInfo )
    list.innerHTML += `<li>${elem}</li>`;  
})