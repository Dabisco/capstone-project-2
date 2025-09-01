var dropDown = document.querySelector(".nav-dropdown > .dropdown-content");
var dropDownBtn = document.querySelector(".nav-dropdown > .dropdown-btn");

function toggleDisplay() {
  dropDownBtn.addEventListener("click", function () {
    dropDown.classList.toggle("show");
  });
}

toggleDisplay();

var hamburgerButton = document.querySelector(".hamburger-container");
var rightHeaderItems = document.querySelector(".header-right-items");
var headerLinks = document.querySelectorAll(".header-left-items > h3");
var navDropdown = document.querySelector(".nav-dropdown");

hamburgerButton.addEventListener("click", function () {
  rightHeaderItems.classList.toggle("show");
  navDropdown.classList.toggle("show");

  for (var i = 0; i < headerLinks.length; i++) {
    headerLinks[i].classList.toggle("show");
  }
});

var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var tracker = document.querySelector(".carousel-tracker");
var slides = document.querySelectorAll(".carousel-slide");
var slideBars = document.querySelectorAll(".carousel-slide-bar span");
var index = 0;

for (let i = 0; i < slideBars.length; i++) {
  slideBars[i].addEventListener("click", function () {
    tracker.style.transform = `translateX(${-i * 100}%)`;
    index = i;
    removeActiveClass();
    addActiveClass(i);
  });
}

function moveSlideForward() {
  nextBtn.addEventListener("click", function () {
    if (index < slideBars.length - 1) {
      index = index + 1;
      tracker.style.transform = `translateX(-${index * 100}%)`;
      removeActiveClass();
      addActiveClass(index);
    } else {
      index = 0;
      tracker.style.transform = `translateX(-${index * 100}%)`;
      removeActiveClass();
      addActiveClass(index);
    }
  });
}

moveSlideForward();
moveSlideBackward();

function removeActiveClass() {
  for (var j = 0; j < slideBars.length; j++) {
    slideBars[j].classList.remove("active");
  }
}

function addActiveClass(i) {
  slideBars[i].classList.add("active");
}

function moveSlideBackward() {
  prevBtn.addEventListener("click", function () {
    if (index > 0) {
      index = index - 1;
      tracker.style.transform = `translateX(-${index * 100}%)`;
      removeActiveClass();
      addActiveClass(index);
    } else {
      index = slideBars.length - 1;
      tracker.style.transform = `translateX(-${index * 100}%)`;
      removeActiveClass();
      addActiveClass(index);
    }
  });
}
