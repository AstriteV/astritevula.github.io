// main.js — minimal interactions: smooth scroll, reveal on scroll, lightbox, toggle more info
document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold: 0.12});
  reveals.forEach(r=>io.observe(r));

  // Lightbox
  const lb = document.getElementById('lightbox');
  document.querySelectorAll('.gallery img').forEach(img=>{
    img.addEventListener('click', ()=> {
      lb.style.display = 'flex';
      lb.querySelector('img').src = img.dataset.full || img.src;
    });
  });
  lb.addEventListener('click', ()=> lb.style.display = 'none');

  // Toggle more info in events
  document.querySelectorAll('.more').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const target = document.getElementById(btn.dataset.target);
      if(!target) return;
      const expanded = target.style.display === 'block';
      target.style.display = expanded ? 'none' : 'block';
      btn.textContent = expanded ? '▾ More info' : '▴ Less info';
    });
  });
});