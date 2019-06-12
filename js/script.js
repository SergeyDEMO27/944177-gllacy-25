var openFeed = document.querySelector(".feedback-open");
var feedPop = document.querySelector(".feedback-popup");
var closeFeed = document.querySelector(".close-feedback-popup");
var mainPage = document.querySelector(".index-page");
var toggles = document.querySelectorAll(".toggle");
var slides = document.querySelectorAll(".slider-item");

openFeed.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedPop.classList.add("show-pop");
  mainPage.classList.add("overlay");
})

closeFeed.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedPop.classList.remove("show-pop");
  mainPage.classList.remove("overlay");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (feedPop.classList.contains("show-pop")) {
    feedPop.classList.remove("show-pop");
    mainPage.classList.remove("overlay");
  }
}
})

toggles.forEach(function (el, index) {
  el.addEventListener("click", function () {
    slides.forEach(function (el, index) {
      slides[index].className = "slider-item slide";
          })
        slides[index].className = "slider-item show-slide";
        if (slides[index] === slides[0]) {
          mainPage.className = "index-page back-color1 backlight1 container-main";
        }
        else if (slides[index] === slides[1]) {
          mainPage.className = "index-page  back-color2 backlight2 container-main";
        }
        else if (slides[index] === slides[2]) {
          mainPage.className = "index-page back-color3 backlight3 container-main";
        }
        })
      })
