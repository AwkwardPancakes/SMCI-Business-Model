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
        const figure=img.closest('figure');
        if(!figure)return;
        if(/^https?:/.test(img.getAttribute('src')||'')){
          figure.style.display='none';
          return;
        }
        const original=img.dataset.originalFilename || (img.getAttribute('src')||'').split('/').pop();
        img.dataset.originalFilename=original;
        const weekTwo=/^Fig(?:19|2[0-9]|3[0-8])_/.test(original);
        const prefixes=weekTwo?['assets/','images/','week2/','Week2_Images/','assets/week2/']:[];
        const attempt=Number(img.dataset.assetAttempt||0);
        if(attempt<prefixes.length){
          img.dataset.assetAttempt=String(attempt+1);
          img.src=prefixes[attempt]+original;
          return;
        }
        img.style.display='none';
        if(figure.querySelector('.figure-missing'))return;
        const unavailable=document.createElement('div');
        unavailable.className='figure-missing';
        const marker=document.createElement('i');
        marker.textContent='!';
        marker.setAttribute('aria-hidden','true');
        const detail=document.createElement('div');
        detail.className='file-status';
        const title=document.createElement('strong');
        title.textContent='Power BI exhibit awaiting publication';
        const source=document.createElement('small');
        source.textContent='Required file: '+original;
        detail.append(title,source);
        unavailable.append(marker,detail);
        figure.insertBefore(unavailable,figure.querySelector('figcaption'));
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

/* Desktop hover inspection — thumbnails stay compact in the document.
   The source graphic opens at viewport scale without pixel downsampling in CSS. */
(function(){
  if(!window.matchMedia || !window.matchMedia('(hover: hover) and (pointer: fine)').matches)return;
  const targets=[...document.querySelectorAll('.exhibit-pair .figure img')];
  if(!targets.length)return;
  const panel=document.createElement('div');
  panel.className='exhibit-zoom-preview';
  panel.setAttribute('aria-hidden','true');
  const heading=document.createElement('div');
  heading.className='zoom-heading';
  const name=document.createElement('span');
  const hint=document.createElement('span');
  hint.textContent='FULL EXHIBIT  /  CLICK TO PIN';
  heading.append(name,hint);
  const large=document.createElement('img');
  large.alt='';
  panel.append(heading,large);
  document.body.append(panel);
  let active=null;
  const hide=()=>{
    panel.classList.remove('is-visible');
    active=null;
  };
  const show=img=>{
    if(!img.complete||!img.naturalWidth)return;
    active=img;
    name.textContent=img.alt||'SMCI DATA EXHIBIT';
    if(large.src!==img.currentSrc&&large.src!==img.src)large.src=img.currentSrc||img.src;
    panel.classList.add('is-visible');
  };
  targets.forEach(img=>{
    img.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')show(img)});
    img.addEventListener('pointerleave',()=>{if(active===img)hide()});
    img.addEventListener('click',hide);
  });
  window.addEventListener('scroll',hide,{passive:true});
  window.addEventListener('resize',hide);
  window.addEventListener('blur',hide);
  document.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
})();
