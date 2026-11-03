document.addEventListener('DOMContentLoaded', function () {
  var slides = Array.from(document.querySelectorAll('.slide'));
  var dots = Array.from(document.querySelectorAll('.dots button'));
  var current = 0;
  var timer;
  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach(function (slide, i) { slide.classList.toggle('active', i === current); });
    dots.forEach(function (dot, i) { dot.classList.toggle('active', i === current); });
  }
  function restart() { window.clearInterval(timer); timer = window.setInterval(function () { show(current + 1); }, 6500); }
  document.querySelector('.prev').addEventListener('click', function () { show(current - 1); restart(); });
  document.querySelector('.next').addEventListener('click', function () { show(current + 1); restart(); });
  dots.forEach(function (dot, i) { dot.addEventListener('click', function () { show(i); restart(); }); });
  restart();
  document.querySelectorAll('a[href*="wa.me/"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var whatsappUrl = link.href;
      var whatsappWindow = window.open('about:blank', '_blank');
      if (whatsappWindow) { whatsappWindow.opener = null; whatsappWindow.document.title = 'Opening WhatsApp…'; whatsappWindow.document.body.innerHTML = '<p style="font:16px Arial,sans-serif;padding:32px;color:#17202a">Opening WhatsApp…</p>'; }
      if (typeof window.fbq === 'function') window.fbq('track', 'Contact', { contact_method: 'WhatsApp', content_name: link.textContent.trim() || 'WhatsApp button' });
      window.setTimeout(function () { if (whatsappWindow) whatsappWindow.location.href = whatsappUrl; }, 1000);
    });
  });
});
