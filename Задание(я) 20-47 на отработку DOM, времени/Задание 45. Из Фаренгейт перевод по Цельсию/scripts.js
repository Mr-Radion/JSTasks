let tf = document.querySelector('.tf');
let tc = document.querySelector('.tc');

tf.addEventListener('change', function() {
//  tf = (9 / 5) * tc + 32;    
  tc.innerHTML = (tf.value - 32)/(9/5);
})


