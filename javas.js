



let dragitems = document.querySelectorAll('.cards');

let mouseX = 0;
let mouseY = 0;
let offsetX = 0;
let offsetY = 0;
let isDragging = false;
let currentDragItem = null;

dragitems.forEach(function (item) {
  item.addEventListener('mousedown', mouseDown, false);
  item.style.position = 'absolute'; 
});

function mouseDown(e) {
  e.preventDefault();

  isDragging = true;
  currentDragItem = this;

  offsetX = e.clientX - currentDragItem.getBoundingClientRect().left;
  offsetY = e.clientY - currentDragItem.getBoundingClientRect().top;

  window.addEventListener('mousemove', moveEle, false);
  window.addEventListener('mouseup', mouseUp, false);
}

function mouseUp() {
  isDragging = false;
  currentDragItem = null;

  window.removeEventListener('mousemove', moveEle, false);
  window.removeEventListener('mouseup', mouseUp, false);
}

function moveEle(e) {
  if (!isDragging || !currentDragItem) return;

  mouseX = e.clientX;
  mouseY = e.clientY;

  currentDragItem.style.left = mouseX - offsetX + 'px';
  currentDragItem.style.top = mouseY - offsetY + 'px';
}