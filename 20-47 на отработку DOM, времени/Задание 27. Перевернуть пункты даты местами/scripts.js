let date = document.querySelector('.date');
let dateNew = document.querySelector('.dateNew');

date.addEventListener('blur', () => {
  let dataInfo = date.value.split('.').reverse().join('-');
  dateNew.value = dataInfo;
  
});
