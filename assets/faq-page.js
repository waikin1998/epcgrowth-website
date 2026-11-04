// Show one service at a time; all questions remain available without JavaScript.
document.addEventListener('DOMContentLoaded',function(){
 const groups=Array.from(document.querySelectorAll('.faq-group'));
 const links=Array.from(document.querySelectorAll('.faq-jump a'));
 function select(){
  const id=groups.some(g=>'#'+g.id===location.hash)?location.hash:'#google-ads';
  groups.forEach(g=>{g.hidden='#'+g.id!==id;});
  links.forEach(a=>{if(a.getAttribute('href')===id)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current');});
 }
 links.forEach(a=>a.addEventListener('click',function(e){e.preventDefault();history.replaceState(null,'',a.getAttribute('href'));select();}));
 addEventListener('hashchange',select);select();
});
