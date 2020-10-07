let parent = document.querySelector('.parent');
let button = document.querySelector('.btn-addElem');

button.addEventListener('click', function() {
  let li = document.createElement('li');
  if (parent.children.length >0) {
    let i = parent.lastElementChild.innerHTML;
    i++;
    li.innerHTML = i;
  } else {
    let i = 0;  
    i++;
    li.innerHTML = i;
  };
  parent.appendChild(li);
    
  li.addEventListener('click', function() {
    parent.removeChild(li);
  });
});

for (let elem of parent.children) {
  elem.addEventListener('click', function() {
    parent.removeChild(this);
  });
}