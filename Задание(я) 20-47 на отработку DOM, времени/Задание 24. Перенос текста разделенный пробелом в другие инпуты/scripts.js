let text = document.querySelector('.text-pole');
let fullName = document.querySelectorAll('.fullName');

text.addEventListener('blur', () => {
   
  let fullNameArr = text.value.split(' ');
  let i = 0;
    
  for (let elem of fullName) {
    elem.value = fullNameArr[i++];      
  };
    
});