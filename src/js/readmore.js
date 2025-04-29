"use strict";

const readmoreBtn = document.querySelectorAll(".readmore-btn");

const showContent = function (e) {
  const content = e.target
    .closest(".readmore")
    .querySelector(".readmore__content");
  content.classList.toggle("readmore__content--visible");
};

const changeSvg = function (e) {
  const svg = e.target.closest(".readmore").querySelector(".readmore-btn__svg");
  svg.classList.toggle("readless-btn__svg");
  e.target.closest(".readmore-btn").classList.toggle("readmore-btn--spacing");
};

const changeBtnText = function (e) {
  const text = e.target
    .closest(".readmore")
    .querySelector(".readmore-btn__text");
  const svg = e.target.closest(".readmore").querySelector(".readmore-btn__svg");
  if (svg.classList.contains("readless-btn__svg")) {
    text.textContent = "Свернуть";
  } else {
    text.textContent = "Читать ещё";
  }
};

readmoreBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    showContent(e);
    changeSvg(e);
    changeBtnText(e);
  });
});
