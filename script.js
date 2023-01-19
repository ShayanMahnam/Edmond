
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

let foodFish = document.getElementById("fishBlue");
let foodCooked = document.getElementById("fishCooked");
foodFish.addEventListener("click", () => {
  foodFish.style.display = "none";
  foodCooked.style.display = "block";
});
foodCooked.addEventListener("click", () => {
  foodCooked.style.display = "none";
  foodFish.style.display = "block";
});

let foodChicken = document.getElementById("chicken");
let foodCookedChicken = document.getElementById("chickenCooked");
foodChicken.addEventListener("click", () => {
  foodChicken.style.display = "none";
  foodCookedChicken.style.display = "block";
});
foodCookedChicken.addEventListener("click", () => {
  foodCookedChicken.style.display = "none";
  foodChicken.style.display = "block";
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  //if>600px=desktop-mode, bgc use yellow. (by Susan)

  if (
    document.body.scrollTop > 400 ||
    document.documentElement.scrollTop > 400
  ) {
    document.getElementById("up-btn").style.display = "flex";
  } else {
    document.getElementById("up-btn").style.display = "none";
  }
}

let edPic = document.getElementById("edPic");
let motto = document.getElementById("motto");
const mottoArray = ["First Motto", "Second Motto", "Third Motto", "N Motto"];

// edPic.addEventListener("click", ()=>{
//   // let index = Math.floor(Math.random() * (mottoArray.length - 1))
//   for (let i = 0; i < mottoArray.length; i++) {
//     motto.innerText = mottoArray[i];
//   }
// })

let currentIndex = 0;
edPic.addEventListener("click", () => {
  motto.innerText = mottoArray[currentIndex];
  currentIndex++;
  if (currentIndex >= mottoArray.length) {
    currentIndex = 0;
  }
});
