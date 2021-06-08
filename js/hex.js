const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");

const color = document.querySelector(".color");
const color2 = document.querySelector(".color2");

const cuadrado = document.getElementById("box");
const cuadrado2 = document.getElementById("box2");

btn.addEventListener("click", function () {
  var hexColor = "#";

  for (var i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color.textContent = hexColor;
  cuadrado.style.backgroundColor = hexColor;
});

btn2.addEventListener("click", function () {
  var hexColor = "#";

  for (var i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  color2.textContent = hexColor;
  cuadrado2.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
