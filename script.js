


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


