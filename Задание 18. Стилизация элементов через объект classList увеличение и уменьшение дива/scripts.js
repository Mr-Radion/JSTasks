let div = document.querySelectorAll('.container');
//let button1 = document.querySelector('.btn-container.Increase');
//let button2 = document.querySelector('.btn-container.Decrease');
//
//button1.addEventListener('click', increaseContainer);
//button2.addEventListener('click', decreaseContainer);
//
//function increaseContainer() {
//  for (let elem of div) {
//    elem.classList.add('size-big');       
//  };
//};
//
//function decreaseContainer() {
//  for (let elem of div) {
//    elem.className = 'container';  
//  };
//};

let button = document.querySelectorAll('.btn-container');

for (elem of button) {
  if(elem.className == 'btn-container Increase') {
    elem.addEventListener('click', increaseContainer);
  }
  if(elem.className == 'btn-container Decrease') {
    elem.addEventListener('click', decreaseContainer);
  }
}

function increaseContainer() {
  for (let elem of div) {
    elem.classList.add('size-big');        
  };
};

function decreaseContainer() {
  for (let elem of div) {
    elem.className = 'container';  
  };
};