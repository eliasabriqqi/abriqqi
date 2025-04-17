"use strict";

const playBtns = document.querySelectorAll(".play-btn");

playBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const poster = e.currentTarget.closest(".video-poster");

    const vids = poster.querySelectorAll("video");

    vids.forEach((vid) => {
      vid.classList.remove("video--hidden");

      if (vid.checkVisibility()) {
        vid.play();
      }
    });

    poster.style.backgroundImage = "none";
    poster.style.height = "auto";
  });
});
