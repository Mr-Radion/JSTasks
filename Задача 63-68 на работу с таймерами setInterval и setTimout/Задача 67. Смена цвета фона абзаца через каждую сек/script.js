let result = document.querySelector('.result');

let color = ['red', 'green'];

let timerId = setInterval(function(){
  result.style.backgroundColor = 'green';  
  setTimeout(function() {
    result.style.backgroundColor = 'red';  
  } , 1500)
}, 1000);      

//let color = ['red', 'green'];
//
//for (let i = 0; i <= color.length; i++) {
////  let timerId = setInterval(function(){
//  result.style.backgroundColor = color[i];
//  result.style.backgroundColor = '';
////  }, 100);    
//}