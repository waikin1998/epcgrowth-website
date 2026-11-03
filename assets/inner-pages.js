(()=>{
 const current=location.pathname.replace(/\/$/,'')||'/';
 document.querySelectorAll('.epc-global-nav a').forEach(a=>{if((new URL(a.href).pathname.replace(/\/$/,'')||'/')===current)a.setAttribute('aria-current','page')});
 const filters=document.querySelectorAll('[data-filter]');
 filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));document.querySelectorAll('[data-category]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&button.dataset.filter!==card.dataset.category})}));
 const form=document.getElementById('project-enquiry');
 if(form)form.addEventListener('submit',event=>{event.preventDefault();if(!form.reportValidity())return;const d=new FormData(form);const message=`Hi EPC, I'd like to discuss a project.\nName: ${String(d.get('name')).trim()}\nBusiness: ${String(d.get('business')).trim()}\nService: ${d.get('service')}\n\n${String(d.get('message')).trim()}`;const url='https://wa.me/60178873888?text='+encodeURIComponent(message);const win=window.open(url,'_blank','noopener,noreferrer');document.getElementById('form-status').textContent='Your WhatsApp draft is ready. Review it in WhatsApp before sending.';if(typeof window.gtag==='function')window.gtag('event','contact_intent',{contact_method:'WhatsApp',page_location:location.origin+location.pathname});});
})();
