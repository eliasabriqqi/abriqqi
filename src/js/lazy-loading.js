"use strict";

// Lazy Loading Background Images and Video
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#lazy");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target;
          image.id = "";

          // Video Loading
          if (entry.target.classList.contains("video-poster")) {
            const vids = entry.target.querySelectorAll("video");
            vids.forEach((vid) => {
              vid.src = vid.dataset.src;
            });
          }

          observer.unobserve(image);
        }
      });
    },
    { rootMargin: "300px", threshold: 0 }
  );

  images.forEach((image) => {
    observer.observe(image);
  });
});
