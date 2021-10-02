let colorbox = document.getElementById("box");
let title = document.getElementById("title");

colorbox.addEventListener("click", ClickEvent);
function ClickEvent(e) {
  document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},${Math.floor(Math.random() * 100) + 10})`;
  title.textContent = `rgb(${e.offsetY},${e.offsetX},${Math.floor(Math.random() * 100) + 10})`;
}

colorbox.addEventListener("mousemove", MoveEvent);
function MoveEvent(e) {
  document.body.style.backgroundColor = `rgb(${e.offsetY},${e.offsetX},${Math.floor(Math.random() * 100) + 10})`;
}
