document.addEventListener('DOMContentLoaded', function(){
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Reveal
  const reveals = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:0.12});
  reveals.forEach(r=>io.observe(r));

  // Accordion (single open)
  const buttons = document.querySelectorAll('.acc-btn');
  function closeAll(){
    document.querySelectorAll('.acc-panel').forEach(p=>p.classList.remove('open'));
    document.querySelectorAll('.acc-btn .acc-icon').forEach(i=>i.textContent='▾');
    document.querySelectorAll('.acc-btn').forEach(b=>b.setAttribute('aria-expanded','false'));
  }
  buttons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const panel = document.getElementById(btn.dataset.target);
      const isOpen = panel && panel.classList.contains('open');
      closeAll();
      if(panel && !isOpen){
        panel.classList.add('open');
        btn.setAttribute('aria-expanded','true');
        const icon = btn.querySelector('.acc-icon');
        if(icon) icon.textContent='▴';
      }
    });
  });

  // Slideshow
  function initSlideshow(root){
    const slides = Array.from(root.querySelectorAll('.slide'));
    const dots = Array.from(root.querySelectorAll('.dot'));
    const prev = root.querySelector('[data-prev]');
    const next = root.querySelector('[data-next]');
    if(slides.length === 0) return;
    let idx = 0;

    function show(i){
      idx = (i + slides.length) % slides.length;
      slides.forEach((s,k)=>s.classList.toggle('active', k===idx));
      dots.forEach((d,k)=>d.classList.toggle('active', k===idx));
    }
    show(0);

    if(prev) prev.addEventListener('click', ()=>show(idx-1));
    if(next) next.addEventListener('click', ()=>show(idx+1));
    dots.forEach((d,k)=>d.addEventListener('click', ()=>show(k)));
  }
  document.querySelectorAll('[data-slideshow]').forEach(initSlideshow);

  // Default open (current exhibition)
  const defaultBtn = document.querySelector('.acc-btn[data-default-open="true"]');
  if(defaultBtn) defaultBtn.click();

  // Lightbox for works
  const lb = document.getElementById('lightbox');
  if(lb){
    document.querySelectorAll('.gallery img').forEach(img=>{
      img.addEventListener('click', ()=>{
        lb.style.display = 'flex';
        lb.querySelector('img').src = img.dataset.full || img.src;
      });
    });
    lb.addEventListener('click', ()=> lb.style.display = 'none');
  }
});