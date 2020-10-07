let tds = document.querySelectorAll('.table .td');

// Чередование 2 цветов по клику

//let color = 'color1';
//
//for (let td of tds) {
//  td.addEventListener('click', function() {
//    if(color == 'color1') {
//      color = 'color2';     
//    } else {
//      color = 'color1';     
//    }
//      
//    this.classList.add(color);
//  });    
//}

// Чередование массива цветов по клику

let colors = [
  'color1', 
  'color2', 
  'color3', 
];

let i = 0;

for (let td of tds) {
  td.addEventListener('click', function() {
    this.classList.add(colors[i]);
    i++; 
    if (i == colors.length) {
      i = 0;
    }
  });    
}