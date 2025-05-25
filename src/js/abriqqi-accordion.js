"use strict";

const accordion = document.querySelector(".abriqqi-accordion");

const firstText = accordion.querySelector(".abriqqi-accordion__item__text");

firstText.classList.add("abriqqi-accordion__item__text--visible");
firstText.style.maxHeight = firstText.scrollHeight + "px";

accordion.addEventListener("click", function (e) {
  if (!e.target.classList.contains("abriqqi-accordion__item__heading")) return;
  const headings = this.querySelectorAll(".abriqqi-accordion__item__heading");

  headings.forEach((heading) => {
    const text = heading.nextElementSibling;
    text.classList.remove("abriqqi-accordion__item__text--visible");
    text.style.maxHeight = "0";

    e.target.nextElementSibling.classList.add(
      "abriqqi-accordion__item__text--visible"
    );
    e.target.nextElementSibling.style.maxHeight =
      e.target.nextElementSibling.scrollHeight + "px";
  });
});
