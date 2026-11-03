(function () {
  'use strict';
  function trackWhatsAppClick() {
    if (typeof window.gtag !== 'function') return;
    window.gtag('event', 'conversion', {
      send_to: 'AW-18553871385/v2FYCPLEr7EdEJm4lo9F',
      value: 1.0,
      currency: 'MYR',
      transport_type: 'beacon'
    });
  }
  window.epcTrackWhatsAppClick = trackWhatsAppClick;
  document.addEventListener('click', function (event) {
    if (event.button !== 0) return;
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var url;
    try { url = new URL(link.href, document.baseURI); } catch (_) { return; }
    if ((url.protocol === 'https:' || url.protocol === 'http:') &&
        (url.hostname === 'wa.me' || url.hostname === 'api.whatsapp.com' || url.hostname === 'web.whatsapp.com')) {
      trackWhatsAppClick();
    }
  }, true);
})();
