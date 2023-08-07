// const slides = document.querySelectorAll(".slider__slide");
const btns = document.querySelectorAll(".btn");
const slider = document.querySelectorAll(".slider  img");
const slider_cont = document.querySelector(".slider");
const nav = document.querySelector(".navigation");

let btnArray = [];
let currentSlide = 0;
let slideWidth = slider[0].clientWidth;

function updateSlide() {
  slider_cont.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

  btnArray.forEach((btn, index) => {
    btn.classList.toggle("btn--active", currentSlide == index);
  });
}

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slider.length;
  updateSlide();
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slider.length) % slider.length;
  updateSlide();
};

function init() {
  intervalId = setInterval(nextSlide, 3000);

  slider.forEach((slide, index) => {
    let buttons = document.createElement("div");
    buttons.classList.add("btn");
    buttons.addEventListener("click", () => {
      currentSlide = index;
      updateSlide();
      clearInterval(intervalId);
      intervalId = setInterval(nextSlide, 3000);
    });
    console.log(currentSlide);

    nav.appendChild(buttons);
    btnArray.push(buttons);
  });
  console.log(btnArray);
  console.log("hello");
  updateSlide();
}
init();
