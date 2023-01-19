let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");
let menuBackground = document.querySelector("#menu");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  random_bg_color();
});

function random_bg_color() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  let bgColor = "rgb(" + x + "," + y + "," + z + ")";
  menuBackground.style.backgroundColor = bgColor;
}
