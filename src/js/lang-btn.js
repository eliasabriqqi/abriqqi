"use strict";

const curUrl = "https://ru.abriqqi.com/tutorial/section10lesson3";

// const curUrl = window.location.href;

const siteNameIndex = curUrl.indexOf("abriqqi.com");

// Button Animation

const activeBtns = document.querySelectorAll(".lang-btn__active-lang");

activeBtns.forEach((activeBtn) => {
  // Change btn styles

  const inactiveBtn = activeBtn.parentElement.querySelector(
    ".lang-btn__inactive-lang"
  );

  activeBtn.addEventListener("mouseenter", function () {
    inactiveBtn.style.width = "7rem";
    activeBtn.style.backgroundColor = "#f2c685";
    activeBtn.style.borderColor = "#fff";
  });

  inactiveBtn.addEventListener("mouseenter", function () {
    inactiveBtn.style.width = "7rem";
    inactiveBtn.style.backgroundColor = "#e2d3bc";
    inactiveBtn.style.color = "#968a7c";
    activeBtn.style.backgroundColor = "#f2c685";
    activeBtn.style.borderColor = "#fff";
  });

  activeBtn.addEventListener("mouseout", function () {
    inactiveBtn.style.width = "3.7rem";
    activeBtn.style.backgroundColor = "#fff";
    activeBtn.style.borderColor = "#f2c685";
  });

  inactiveBtn.addEventListener("mouseout", function () {
    inactiveBtn.style.width = "3.7rem";
    inactiveBtn.style.backgroundColor = "#eee2d0";
    inactiveBtn.style.color = "#d4c2a8";
    activeBtn.style.backgroundColor = "#fff";
    activeBtn.style.borderColor = "#f2c685";
  });

  // Change language

  if (curUrl.slice(siteNameIndex - 3, siteNameIndex) === "ru.") {
    activeBtn.innerText = "RU";
    inactiveBtn.innerText = "EN";
    inactiveBtn.href =
      curUrl.slice(0, siteNameIndex - 3) + curUrl.slice(siteNameIndex);
    console.log(curUrl.slice(siteNameIndex));
    console.log("You are on the Russian language page");
  } else {
    activeBtn.innerText = "EN";
    inactiveBtn.innerText = "RU";
    inactiveBtn.href =
      curUrl.slice(0, siteNameIndex) + "ru." + curUrl.slice(siteNameIndex);
    console.log("You are on the English language page");
  }

  // Btn dragging

  let touchPos = 0;
  let moveDistance = 0;

  const redirect = function () {
    if (moveDistance <= 0) {
      moveDistance = 0;
      activeBtn.style.transform = `translateX(${moveDistance}px)`;
    } else if (moveDistance >= 35) {
      window.location.href = inactiveBtn.href;
      moveDistance = 35;
      activeBtn.style.transform = `translateX(${moveDistance}px)`;
    }
  };

  const handleSlideMovementEnd = function () {
    if (moveDistance > 20) {
      moveDistance = 35;
      activeBtn.style.transform = `translateX(${moveDistance}px)`;
      inactiveBtn.style.width = "7rem";
    } else {
      activeBtn.style.transform = `translateX(0px)`;
      moveDistance = 0;
    }
    redirect();
  };

  // Mobile swipe
  activeBtn.addEventListener("touchstart", function (e) {
    touchPos = e.touches[0].clientX;
  });

  activeBtn.addEventListener("touchmove", function (e) {
    moveDistance = e.touches[0].clientX - touchPos;
    activeBtn.style.transform = `translateX(${moveDistance}px)`;
    redirect();
  });

  activeBtn.addEventListener("touchend", handleSlideMovementEnd);

  // Desktop mouse

  const handleMouseMove = function (e) {
    moveDistance = e.clientX - touchPos;
    activeBtn.style.transform = `translateX(${moveDistance}px)`;
    redirect();
  };

  const handleMouseUpLeave = function () {
    activeBtn.removeEventListener("mousemove", handleMouseMove);
    handleSlideMovementEnd();
  };

  activeBtn.addEventListener("mousedown", function (e) {
    touchPos = e.clientX;
    activeBtn.addEventListener("mousemove", handleMouseMove);
    activeBtn.addEventListener("mouseup", handleMouseUpLeave);
    activeBtn.addEventListener("mouseleave", handleMouseUpLeave);
  });
});
