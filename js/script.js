var openFeed = document.querySelector(".feedback-open");
var feedPop = document.querySelector(".feedback-popup");
var closeFeed = document.querySelector(".close-feedback-popup");
var mainPage = document.querySelector(".index-page");
var head = document.querySelector(".backlight-green");
var toggles = document.querySelectorAll(".toggle");
var slides = document.querySelectorAll(".slider-item");
var form = feedPop.querySelector("form");
var userName = feedPop.querySelector("[name=user-name]");
var userEmail = feedPop.querySelector("[type=email]");
var comment = feedPop.querySelector("[name=user-comments]");

form.addEventListener("submit", function (evt) {
  if (!userName.value || !comment.value || !userEmail.value) {
      evt.preventDefault();
      feedPop.classList.remove("popup-error");
      feedPop.offsetWidth = feedPop.offsetWidth;
      feedPop.classList.add("popup-error");
    }
});

openFeed.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedPop.classList.add("show-pop");
  mainPage.classList.add("overlay");
})

closeFeed.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedPop.classList.remove("show-pop");
  mainPage.classList.remove("overlay");
  feedPop.classList.remove("popup-error");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
  if (feedPop.classList.contains("show-pop")) {
    feedPop.classList.remove("show-pop");
    mainPage.classList.remove("overlay");
    feedPop.classList.remove("popup-error");
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
          mainPage.className = "index-page background-green";
          head.className = "container backlight-green";
        }
        else if (slides[index] === slides[1]) {
          mainPage.className = "index-page background-blue";
          head.className = "container backlight-blue";
        }
        else if (slides[index] === slides[2]) {
          mainPage.className = "index-page background-red";
          head.className = "container backlight-red";
        }
        })
      })
