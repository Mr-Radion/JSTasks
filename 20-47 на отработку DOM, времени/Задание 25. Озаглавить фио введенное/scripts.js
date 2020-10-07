let fullName = document.querySelector('.fullName');

fullName.addEventListener('blur', () => {
  let fullNameArr = fullName.value.split(' '); 
  let letters = [];
  let i = 0;
  
  for (let elem of fullNameArr) {
    letters.push(upperTitle(elem));  
  };
    
  fullName.value = letters.join(' ');
});

function upperTitle(string){
  return string[0].toUpperCase() + string.slice(1);
}      
