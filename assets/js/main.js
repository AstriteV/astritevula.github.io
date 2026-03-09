document.querySelectorAll(".acc-btn").forEach(btn => {

  const panel = document.getElementById(btn.dataset.target);

  // open newest event automatically
  if (btn.dataset.defaultOpen === "true") {
    panel.classList.add("open");
  }

  btn.addEventListener("click", () => {
    panel.classList.toggle("open");
  });

});


// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".gallery img, .event-images img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.dataset.full || img.src;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
