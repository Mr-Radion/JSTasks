let div = document.querySelector('.container');
let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]; 
div.appendChild(generateTable(arr));

function generateTable(arr) {
   let table = document.createElement('div');
   table.className = 'table';
   for (let i=0; i<arr.length; i++) {
    let tr = document.createElement('div');
    tr.className = 'tr';    
    for (let j=0; j<arr[i].length; j++) {
      let td = document.createElement('div');
      td.className = 'td'; 
      td.innerHTML = arr[i][j];
      tr.appendChild(td);
    } 
    table.appendChild(tr);
  }
  return table; 
}

// Задача 2. Преобразование одномерного массива в двухмерный и создание таблицы

let elem = document.querySelector('.elem');
let arrItem = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let cols = 3; // Количество колонок в одном ряду (или элементов в одном подмасиве)
let arr2 = convertArr(arrItem, cols);

function convertArr(arr, cols) {
  let arrays = [];
  let k = 0;
  for (let i=1; i<((arr.length+1)/cols); i++) {
     arrays[i] = [];
     for (let j=0; j<cols; j++) {
       arrays[i][j] = arr[k];  
       k++;
     }
  }
    
//  arrays.filter(n => n.some(m => m !== '')); если в массиве пустые значения фильтрует
  return arrays.filter(n => n !== ''); // Если в массиве пустые подмассивы фильтрует
}

elem.appendChild(generateTable(arr2));

