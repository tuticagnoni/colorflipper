const colors = [
  "#726E97",
  "#7DCD85",
  "#8A84E2",
  "#EF2D56",
  "#157145",
  "#6A8EAE",
  "#FF7477",
  "#3E8914",
];

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");

const cuadrado = document.getElementById("box");
const cuadrado2 = document.getElementById("box2");

btn1.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  cuadrado.style.backgroundColor = colors[randomNumber];
  color1.textContent = colors[randomNumber];
});

btn2.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  cuadrado2.style.backgroundColor = colors[randomNumber];
  color2.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
