let block = document.querySelector('.block');

block.addEventListener('keydown', handleType);
block.addEventListener('keyup', handleType);

function handleType(e) {
 if (e.type == 'keydown') {
   this.lastElementChild.innerHTML = 'Нажата клавиша ' + e.key;      
 }    
 if (e.type == 'keyup') {
   this.lastElementChild.innerHTML = 'Отпущена клавиша ' + e.key;      
 }    
}