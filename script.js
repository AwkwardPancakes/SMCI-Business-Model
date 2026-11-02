/* Progressive enhancements for the SMCI research website */
(function(){
  const dialog=document.getElementById('lightbox');
  if(dialog){
    const enlarged=dialog.querySelector('img');
    const close=dialog.querySelector('button');
    let lastFocus=null;
    const open=(img)=>{
      lastFocus=document.activeElement;
      enlarged.src=img.currentSrc||img.src;
      enlarged.alt=img.alt||'Enlarged data exhibit';
      dialog.classList.add('show');
      dialog.setAttribute('aria-modal','true');
      document.body.style.overflow='hidden';
      close?.focus();
    };
    const shut=()=>{
      dialog.classList.remove('show');
      dialog.removeAttribute('aria-modal');
      document.body.style.overflow='';
      enlarged.removeAttribute('src');
      lastFocus?.focus?.();
    };
    document.querySelectorAll('.figure img').forEach(img=>{
      img.tabIndex=0;
      img.setAttribute('role','button');
      img.setAttribute('aria-label','Expand image: '+(img.alt||'visualization'));
      img.addEventListener('click',()=>open(img));
      img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(img)}});
      // External images must not leave a broken-image placeholder.
      img.addEventListener('error',()=>{
        if(/^https?:/.test(img.getAttribute('src')||'')){
          const figure=img.closest('figure');
          if(figure){figure.style.display='none';}
        }
      });
    });
    close?.addEventListener('click',shut);
    dialog.addEventListener('click',e=>{if(e.target===dialog)shut()});
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&dialog.classList.contains('show'))shut()});
  }
  const links=[...document.querySelectorAll('.sidebar a[href^="#"]')];
  if(links.length && 'IntersectionObserver' in window){
    const headings=links.map(l=>document.querySelector(l.getAttribute('href'))).filter(Boolean);
    const observer=new IntersectionObserver(entries=>{
      const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>a.boundingClientRect.top-b.boundingClientRect.top);
      if(!visible.length)return;
      links.forEach(link=>{
        const active=link.getAttribute('href')==='#'+visible[0].target.id;
        link.classList.toggle('current',active);
        if(active)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');
      });
    },{rootMargin:'-110px 0px -72% 0px',threshold:0});
    headings.forEach(h=>observer.observe(h));
  }
  if(document.body.classList.contains('chapter-refs')){
    document.querySelectorAll('.page > p').forEach(p=>{
      for(const node of [...p.childNodes]){
        if(node.nodeType!==Node.TEXT_NODE)continue;
        const text=node.textContent;
        if(!/https?:\/\//.test(text))continue;
        const frag=document.createDocumentFragment();
        const re=/https?:\/\/[^\s]+/g;let last=0,m;
        while((m=re.exec(text))){
          if(m.index>last)frag.appendChild(document.createTextNode(text.slice(last,m.index)));
          const value=m[0].replace(/[.,;]$/,'');
          const link=document.createElement('a');
          link.href=value;link.textContent=value;link.target='_blank';link.rel='noopener noreferrer';
          frag.appendChild(link);
          if(value.length!==m[0].length)frag.appendChild(document.createTextNode(m[0].slice(value.length)));
          last=re.lastIndex;
        }
        frag.appendChild(document.createTextNode(text.slice(last)));
        node.replaceWith(frag);
      }
    });
  }
})();