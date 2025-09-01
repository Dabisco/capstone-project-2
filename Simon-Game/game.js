// alert("Hello");

$(document).ready(function () {
  var gamePattern = [];
  var colours = ["red", "green", "blue", "yellow"];
  var userClickedPattern = [];
  var level = 0;
  var started = false;

  function colourGenerator() {
    var randomChosenNumber = Math.floor(Math.random() * 4);
    return colours[randomChosenNumber];
  }

  function sequenceLogic() {
    $("h1").text(`level ${level}`);
    var randomChosenColour = colourGenerator();
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
  }

  function start() {
    if (!started) {
      $(document).one("keypress", function () {
        sequenceLogic();
        started = true;
      });
    }
  }

  start();

  $(".btn").on("click", function () {
    if (started) {
      var chosenColour = $(this).attr("id");
      addAnimation(chosenColour);
      playSound(chosenColour);
      userClickedPattern.push(chosenColour);
      checkUserAnswer(userClickedPattern.length - 1);
    } else {
      return;
    }
  });

  function playSound(chosenColour) {
    var soundFile = `./sounds/${chosenColour}.mp3`;
    var sound = new Audio(soundFile);
    sound.play();
  }

  function addAnimation(colour) {
    $(`#${colour}`).addClass("pressed");
    setTimeout(function () {
      $(`#${colour}`).removeClass("pressed");
    }, 100);
  }

  function checkUserAnswer(currentIndex) {
    if (gamePattern[currentIndex] === userClickedPattern[currentIndex]) {
      if (gamePattern.length === userClickedPattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      userClickedPattern = [];
      gamePattern = [];
      level = 0;
      playSound("wrong");
      $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("h1").text("Game Over! Press any Key to Start again!");
      started = false;
      start();
    }
  }

  function nextSequence() {
    userClickedPattern = [];
    level++;
    sequenceLogic();
  }
});
