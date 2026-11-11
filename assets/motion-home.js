(() => {
  const iconPaths = {
    search:'<circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M7 10h6M10 7v6"/>',
    growth:'<path d="M4 20V4M4 20h17M7 15l5-5 4 3 5-8M16 5h5v5"/>',
    chat:'<path d="M4 4h16v12H9l-5 4V4Z M8 8h8M8 12h5"/>',
    web:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01M8 13l-2 2 2 2M16 13l2 2-2 2"/>',
    document:'<path d="M6 3h9l4 4v14H6ZM14 3v5h5M9 12h7M9 16h5"/>',
    pen:'<path d="m4 20 1-5L16 4l4 4L9 19l-5 1ZM13 7l4 4M4 20h16"/>',
    people:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 5"/>',
    video:'<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3M8 9l4 3-4 3Z"/>',
    target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
    cart:'<path d="M3 4h3l3 12h10l2-8H7M10 20h.01M18 20h.01"/>',
    pin:'<path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/>',
    car:'<path d="m4 10 3-6h10l3 6M3 10h18v8H3ZM6 18v3M18 18v3M6 13h2M16 13h2"/>',
    beauty:'<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3Z"/>'
  };
  const decorate = (selector, icons) => document.querySelectorAll(selector).forEach((el,i) => {
    const box=document.createElement('div');box.className='ui-service-icon';box.setAttribute('aria-hidden','true');
    box.innerHTML='<svg viewBox="0 0 24 24">'+iconPaths[icons[i % icons.length]]+'</svg>';el.prepend(box);
  });
  decorate('.service-card',['search','growth','chat','web','document','pen','people','video']);
  decorate('.solution-grid article',['target','cart','pin']);
  decorate('.industry-marketing-grid article',['car','beauty','cart','search','web','target']);
  const menu = document.querySelector('.service-menu');
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {menu.open = false;}));
  document.addEventListener('keydown', e => {if (e.key === 'Escape' && menu?.open) {menu.open = false; menu.querySelector('summary').focus();}});
  document.addEventListener('click', e => {if(menu?.open && !menu.contains(e.target)) menu.open = false;});
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduced && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), {threshold: .08});
    document.querySelectorAll('.section-heading,.service-card,.process article,.contact>div').forEach((el, i) => {
      el.classList.add('epc-reveal');
      el.style.setProperty('--reveal-delay', `${(i % 3) * 65}ms`);
      observer.observe(el);
    });
    document.body.classList.add('motion-ready');
  }
  const bar = document.createElement('div');
  bar.className = 'epc-progress'; bar.setAttribute('aria-hidden', 'true'); document.body.append(bar);
  let ticking = false;
  const update = () => {const range = document.documentElement.scrollHeight - innerHeight; bar.style.transform = `scaleX(${range > 0 ? Math.min(1, scrollY / range) : 0})`; ticking = false;};
  addEventListener('scroll', () => {if (!ticking) {ticking = true; requestAnimationFrame(update);}}, {passive:true});
  addEventListener('resize', update); update();
  const dialog = document.createElement('dialog'); dialog.className = 'epc-lightbox'; dialog.setAttribute('aria-label', 'Campaign artwork preview');
  const close = document.createElement('button'); close.textContent = 'Close ×'; close.type = 'button';
  const image = document.createElement('img'); const caption = document.createElement('p');
  dialog.append(close, image, caption); document.body.append(dialog); close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', e => {if(e.target === dialog) dialog.close();});
  document.querySelectorAll('.portfolio-track img').forEach(img => {
    img.tabIndex = 0; img.setAttribute('role', 'button'); img.setAttribute('aria-label', `View ${img.alt}`);
    const open = () => {image.src = img.src; image.alt = img.alt; caption.textContent = img.alt; dialog.showModal();};
    img.addEventListener('click', open);
    img.addEventListener('keydown', e => {if(e.key === 'Enter' || e.key === ' ') {e.preventDefault(); open();}});
  });
})();
