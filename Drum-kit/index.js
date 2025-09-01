//alert("Hello");

var buttons = document.querySelectorAll("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var drumButton = this.innerHTML;
    makeSound(drumButton);
    addAnimation(drumButton);
  });
}

document.addEventListener("keydown", function (event) {
  var eventKey = event.key;
  makeSound(eventKey);
  addAnimation(eventKey);
});

function makeSound(eventChecker) {
  switch (eventChecker) {
    case "w":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var tom5 = new Audio("./sounds/crash.mp3");
      tom5.play();
      break;
    case "k":
      var tom6 = new Audio("./sounds/kick-bass.mp3");
      tom6.play();
      break;
    case "l":
      var tom7 = new Audio("./sounds/snare.mp3");
      tom7.play();
      break;

    default:
      console.log(eventChecker);
      break;
  }
}

function addAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
