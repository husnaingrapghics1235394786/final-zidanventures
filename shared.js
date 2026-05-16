/* ══════════════════════════════════════════════════
   ZIDANVentures® — SHARED JS
   page transitions + cursor + header
   ══════════════════════════════════════════════════ */

/* ─── CURSOR ─── */
function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;
  let mx = window.innerWidth/2, my = window.innerHeight/2;
  let rx = mx, ry = my;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  (function animCursor() {
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    rx += (mx - rx) * 0.13; ry += (my - ry) * 0.13;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  })();
  document.addEventListener('mouseover', e => {
    if (e.target.closest('a, button, .product-card, .deal-card, .testi-card, .why-feat, .team-card, .shop-card'))
      ring.classList.add('expand');
    else ring.classList.remove('expand');
  });
}

/* ─── HEADER ─── */
function initHeader() {
  const h = document.querySelector('header');
  if (!h) return;
  const update = () => h.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', update, { passive: true });
  update();
  // Active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === path);
  });
}

/* ─── SCROLL REVEALS ─── */
function initReveal() {
  if (!window.ScrollTrigger) return;
  gsap.utils.toArray('.reveal').forEach((el, i) => {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.75,
      ease: 'power3.out',
      delay: (i % 3) * 0.1,
      scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });
}

/* ─── PRELOADER (first visit) ─── */
function runPreloader(cb) {
  const pl = document.getElementById('preloader');
  if (!pl) { if (cb) cb(); return; }
  const tl = gsap.timeline({ onComplete: () => { pl.style.display = 'none'; if (cb) cb(); } });
  tl.to('#plLogo',   { opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.2 })
    .to('#plTag',    { opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    .to('#plBar',    { width: '100%', duration: 1.5, ease: 'power2.inOut' }, '-=0.3');
  let pct = 0;
  const iv = setInterval(() => {
    pct = Math.min(pct + Math.random()*9, 100);
    const el = document.getElementById('plCount');
    if (el) el.textContent = Math.floor(pct) + '%';
    if (pct >= 100) clearInterval(iv);
  }, 70);
  tl.to(['#plLogo','#plTag','#plBar','#plCount'], { opacity: 0, y: -18, duration: 0.45, ease: 'power2.in', delay: 0.3 })
    .to('#plSweep', { left: '0%',   duration: 0.55, ease: 'power3.inOut' }, '-=0.1')
    .to('#plSweep', { left: '100%', duration: 0.65, ease: 'power3.inOut' })
    .to(pl,         { opacity: 0,   duration: 0.3 }, '-=0.1');
}



/* ─── FOOTER HELPERS ─── */
function renderFooter(container) {
  if (!container) return;
  container.innerHTML = `
  <footer>
    <div class="container">
      <div class="footer-inner">
        <div class="reveal">
          <div class="footer-logo">Zidan<em>Ventures®</em></div>
          <p class="footer-tagline">Since 2025, ZidanVentures has been bringing reliable, life-enhancing products to customers through Amazon.</p>
         
        </div>
        <div class="reveal">
          <div class="footer-col-title">Navigation</div>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="contact.html">Contact</a></li>
            <li><a href="whyus.html">Why Us</a></li>
          </ul>
        </div>
        <div class="reveal">
          <div class="footer-col-title">Products</div>
          <ul class="footer-links">
            <li><a href="shop.html">Corn Peeler</a></li>
            <li><a href="shop.html">Shin Pads</a></li>
            <li><a href="shop.html">kee Guard</a></li>
            <li><a href="shop.html">Raised Dog Bowls</a></li>
            <li><a href="shop.html">All Products ↗</a></li>
          </ul>
        </div>
        
      </div>
      <div class="footer-bottom">
        <div class="footer-copy">© 2026 ZidanVentures®. All rights reserved.</div>
        <div class="footer-legal">
          
          <a href="#">Trade Mark Registered</a>
        </div>
      </div>
    </div>
  </footer>`;
}


 /* ─── HEADER SCROLL ─── */
    window.addEventListener('scroll', () => {
      const h = document.getElementById('site-header');
      h.classList.toggle('scrolled', window.scrollY > 60);
    });
    
    window.addEventListener('scroll', () => {
      const h2 = document.querySelector('.logo');
      h2.classList.toggle('scrolled2', window.scrollY > 60);
    });
     window.addEventListener('scroll', () => {
      const h3 = document.querySelector('.logo em');
      h3.classList.toggle('scrolled3', window.scrollY > 60);
    });
   window.addEventListener('scroll', () => {
  const links = document.querySelectorAll('.nav-list');

  links.forEach(link => {
    link.classList.toggle('scrolled4', window.scrollY > 60);
  });
});

