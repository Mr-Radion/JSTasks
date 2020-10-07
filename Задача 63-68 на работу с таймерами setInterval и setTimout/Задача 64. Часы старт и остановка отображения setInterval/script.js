let start = document.querySelector('.start');
let stop = document.querySelector('.stop');
let result = document.querySelector('.result');

let timerId;

function run() {
  timerId = setInterval(function() {
    let date = new Date();
    result.innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
  }, 1000); 
  start.removeEventListener('click', run)
}

start.addEventListener('click', run);

stop.addEventListener('click', function() {
  clearInterval(timerId);
  start.addEventListener('click', run)    
});
