const slides = document.querySelectorAll(".slider__slide");
const btns = document.querySelectorAll(".btn");

let currentSlide = 0;

const showSlide = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add("active");
      btns[index].classList.add("btn--active");
    } else {
      slide.classList.remove("active");
      btns[index].classList.remove("btn--active");
    }
  });
};

const nextSlide = () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide();
};

const prevSlide = () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide();
};

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    currentSlide = index;
    showSlide();
  });
});

setInterval(nextSlide, 5000);

showSlide();

// For image slider AUTOPLAY navigation
var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var slider = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });

      slides[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      slider();
    }, 5000);
  };
  slider();
};
repeat();
