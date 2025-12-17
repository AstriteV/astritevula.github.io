document.querySelectorAll(".acc-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const panel=document.getElementById(btn.dataset.target);
    panel.classList.toggle("open");
  });
});
