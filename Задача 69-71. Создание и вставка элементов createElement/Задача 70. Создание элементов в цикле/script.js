let list = document.querySelector('.list');

for (let i=0; i<=9; i++) {
  let item = document.createElement('li');
  item.innerHTML = i+1;
    
  list.appendChild(item);
}
