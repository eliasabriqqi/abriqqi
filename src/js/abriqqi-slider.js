"use strict";

const sliders = document.querySelectorAll(".abriqqi-slider");

sliders.forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  track.style.transform = "translateX(0px)";

  const slides = track.querySelectorAll(".slide");
  const slidesNum = slides.length;

  let touchPos = 0;
  let moveDistance = 0;
  let translatePos = 0;
  let magnetThreshold = 50;
  let slideCounter = 1;

  // Slides lining in one row

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * i}vw)`;
  });

  // Slider moving

  const handleSlideMovementEnd = function () {
    if (slides.length === 0) return;

    if (
      moveDistance < -magnetThreshold &&
      translatePos > -slider.clientWidth * (slidesNum - 1)
    ) {
      translatePos = -(slider.clientWidth - translatePos);
      slideCounter++;
    } else if (moveDistance > magnetThreshold && translatePos < 0) {
      translatePos = slider.clientWidth + translatePos;
      slideCounter--;
    }
    track.style.transform = `translateX(${translatePos}px)`;
    moveDistance = 0;
  };

  // Mobile swipe
  slider.addEventListener("touchstart", function (e) {
    touchPos = e.touches[0].clientX;
  });

  slider.addEventListener("touchmove", function (e) {
    moveDistance = e.touches[0].clientX - touchPos;
    track.style.transform = `translateX(${translatePos + moveDistance}px)`;
  });

  slider.addEventListener("touchend", handleSlideMovementEnd);

  // Desktop mouse

  const handleMouseMove = function (e) {
    moveDistance = e.clientX - touchPos;
    track.style.transform = `translateX(${translatePos + moveDistance}px)`;
  };

  const handleMouseUpLeave = function () {
    slider.removeEventListener("mousemove", handleMouseMove);
    handleSlideMovementEnd();
  };

  slider.addEventListener("mousedown", function (e) {
    touchPos = e.clientX;
    slider.addEventListener("mousemove", handleMouseMove);
    slider.addEventListener("mouseup", handleMouseUpLeave);
    slider.addEventListener("mouseleave", handleMouseUpLeave);
  });

  // Buttons click

  const leftBtn = slider.querySelector(".abriqqi-slider__btn-left");
  const rightBtn = slider.querySelector(".abriqqi-slider__btn-right");

  const moveSliderTrack = function (e) {
    track.style.transform = `translateX(${translatePos}px)`;
    slider.removeEventListener("mouseup", handleMouseUpLeave);
    slider.removeEventListener("mouseleave", handleMouseUpLeave);
    slider.removeEventListener("mousemove", handleMouseMove);
  };

  rightBtn.addEventListener("click", function (e) {
    if (slideCounter < slides.length) {
      translatePos = -slider.clientWidth * slideCounter;
      moveSliderTrack();
      slideCounter++;
    } else return;
  });

  leftBtn.addEventListener("click", function (e) {
    if (slideCounter > 1) {
      translatePos = translatePos + slider.clientWidth;
      moveSliderTrack();
      slideCounter--;
    } else return;
  });
});
