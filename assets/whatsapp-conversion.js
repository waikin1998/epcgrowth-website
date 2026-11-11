(function () {
  'use strict';
  if (window.epcWhatsAppTrackingInstalled) return;
  window.epcWhatsAppTrackingInstalled = true;
  function trackWhatsAppClick() {
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('event', 'conversion', {
      send_to: 'AW-18553871385/v2FYCPLEr7EdEJm4lo9F',
      value: 1.0,
      currency: 'MYR',
      transport_type: 'beacon'
    });
  }
  window.epcTrackWhatsAppClick = trackWhatsAppClick;
  function handleClick(event) {
    if (event.type === 'auxclick' ? event.button !== 1 : event.button !== 0) return;
    var link = event.target.closest && event.target.closest('a[href]');
    if (!link) return;
    var url;
    try { url = new URL(link.href, document.baseURI); } catch (_) { return; }
    if (url.protocol === 'whatsapp:' ||
        ((url.protocol === 'https:' || url.protocol === 'http:') &&
         /^(wa\.me|api\.whatsapp\.com|web\.whatsapp\.com|www\.whatsapp\.com)$/.test(url.hostname))) {
      trackWhatsAppClick();
    }
  }
  document.addEventListener('click', handleClick, true);
  document.addEventListener('auxclick', handleClick, true);
})();
