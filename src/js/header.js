"use strict";

// Burger animation on click

const burger = document.querySelector(".burger");
let dropdownActivated = false;

burger.addEventListener("click", function () {
  burger.classList.toggle("burger--active");
  for (let line of burger.children) {
    line.classList.toggle("burger--active");
  }

  const dropdown = document.querySelector(".dropdown-menu");

  if (burger.classList.contains("burger--active")) {
    dropdown.classList.remove("dropdown-menu--hidden");
    dropdown.classList.add("dropdown-menu--active");
    dropdownActivated = true;
  } else {
    dropdown.classList.remove("dropdown-menu--active");
    dropdown.classList.add("dropdown-menu--hidden");
    dropdownActivated = false;
  }

  const dropdownElems = document.querySelectorAll(
    ".dropdown-menu__elems-animation"
  );
  dropdownElems.forEach((elem) => {
    elem.classList.toggle("dropdown-menu__elems-animation--active");
  });
});

/* Hide menu on scroll */

(function navbarscroll() {
  const doc = document.documentElement;
  const w = window;

  let curScroll = w.scrollY || doc.scrollTop;
  let prevScroll = curScroll;
  let curDirection = 0;
  let prevDirection = curDirection;

  const header = document.querySelector(".nav-menu");

  let threshold = 500;
  let toggled;

  const toggleHeader = function () {
    toggled = true;

    if (curDirection === 2 && curScroll > threshold) {
      header.classList.add("nav-menu--hidden");
    } else if (curDirection === 1) {
      header.classList.remove("nav-menu--hidden");
    } else {
      toggled = false;
    }

    return toggled;
  };

  const checkScroll = function () {
    if (!dropdownActivated) {
      curScroll = w.scrollY || doc.scrollTop;
      if (curScroll > prevScroll) {
        // scrolled down
        curDirection = 2;
      } else {
        // scrolled up
        curDirection = 1;
      }

      if (curDirection !== prevDirection) {
        toggled = toggleHeader();
      }

      if (toggled) {
        prevDirection = curDirection;
      }

      prevScroll = curScroll;
    } else return;
  };

  window.addEventListener("scroll", checkScroll);
})();
