let content = document.querySelectorAll('.content');
let addContent = document.querySelector('.addContent');

addContent.addEventListener('click', () => {
  let result = Object.values(content).map(function(value, index, elem) {
    return value.innerHTML = value.innerHTML + (index+1);
  });  
});