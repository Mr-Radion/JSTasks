let eventCoordinates = document.querySelector('.event-coordinates');

document.addEventListener('mousemove', function(e) {
  eventCoordinates.innerHTML = e.clientX + ':' + e.clientY;     
});