var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function imageGenerator(randomNumber) {
  return "./images/dice" + randomNumber + ".png";
}

var image1 = imageGenerator(randomNumber1);
var image2 = imageGenerator(randomNumber2);

document.querySelector(".dice .img1").setAttribute("src", image1);
document.querySelector(".dice .img2").setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🎲 Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🎲";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
