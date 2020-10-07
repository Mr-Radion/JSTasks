let number = document.querySelector('.number');
let factorial = document.querySelector('.factorial');
let button = document.querySelector('.btn');

button.addEventListener('click', addfactorial);

function addfactorial() {
    let num = Number(number.value);
    let fact = 1;
    
    for (let i = num; i>0; i--) {
      fact *=  i;
    factorial.innerHTML = fact;
    console.log(fact);
    } 
    
}
