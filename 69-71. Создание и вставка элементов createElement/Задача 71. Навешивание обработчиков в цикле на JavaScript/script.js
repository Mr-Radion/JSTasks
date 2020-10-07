let list = document.querySelector('.container');
let p = document.querySelector('.result');

for (let i=0; i<=5; i++) {
  let item = document.createElement('input');
      
  item.addEventListener('blur', function() {
    p.innerHTML += this.value;        
  });

  list.appendChild(item);  
}

