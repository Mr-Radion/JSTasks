let monthName = document.querySelector('.monthName');

window.onload = optionСurrentMonth;

function optionСurrentMonth() {
  let now = new Date();
  for (let elem of monthName) {
    if (elem.value == now.getMonth()) {
      elem.selected = true;
    }   
  }     
}

