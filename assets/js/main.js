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
