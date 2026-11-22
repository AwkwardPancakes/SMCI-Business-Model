/* Week 4: Power BI live report mount. Leave the static Figure 53 visible. */
(function(){
  "use strict";
  const mount=document.getElementById('powerbi-live-frame');
  if(!mount)return;
  const link=typeof window.SMCI_POWER_BI_EMBED_URL==="string"
    ?window.SMCI_POWER_BI_EMBED_URL.trim():"";
  if(!link)return;
  let uri;
  try{
    uri=new URL(link);
  }catch(e){return}
  // Restrict an externally configured iframe to Microsoft's Power BI host.
  if(uri.protocol!=="https:"||uri.hostname!=="app.powerbi.com"||
    !(/^\/(?:view|reportEmbed)(?:\/|$)/.test(uri.pathname)))return;
  const iframe=document.createElement("iframe");
  iframe.src=uri.href;
  iframe.title="Live Power BI customer segmentation dashboard — "
    +(window.SMCI_POWER_BI_REPORT_PAGE||"Fig 53 Customer Dashboard");
  iframe.setAttribute("loading","lazy");
  iframe.setAttribute("allowfullscreen","");
  iframe.setAttribute("referrerpolicy","strict-origin-when-cross-origin");
  iframe.setAttribute("aria-label",iframe.title);
  iframe.width="100%";
  iframe.height="600";
  iframe.style.border="0";
  mount.replaceChildren(iframe);
  mount.closest(".powerbi-module")?.classList.add("is-connected");
})();