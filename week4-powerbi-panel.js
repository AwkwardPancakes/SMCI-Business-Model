/* Week 4 Power BI file access panel.
   The provided URL is a SharePoint sharing link, not a Power BI report embed URL.
   The inline preview is optional and may be blocked by Microsoft sign-in or frame policy.
   A direct, unmodified SharePoint link always remains available. */
(function(){
  "use strict";
  const isCustomer=document.body.classList.contains("chapter-customer");
  const isHuman=document.body.classList.contains("chapter-human");
  if(!isCustomer&&!isHuman)return;
  const shareUrl="https://fullsailedu-my.sharepoint.com/:u:/g/personal/ewbooth_student_fullsail_edu/IQCPsW4Xsv5jTrhTmaBkp0adAYgoV_fR87SKiJMy7E4lml0?e=bYM8Up";
  const previewSrc=isCustomer?"Fig53_Customer_Segmentation_Dashboard.png":"Fig66_Human_Factors_Scorecard.png";
  const previewName=isCustomer?"Customer segmentation dashboard — Figure 53":"Human factors scorecard — Figure 66";
  const trigger=document.createElement("button");
  trigger.type="button";
  trigger.className="week4-powerbi-launcher";
  trigger.setAttribute("aria-haspopup","dialog");
  trigger.setAttribute("aria-controls","week4-powerbi-dialog");
  trigger.setAttribute("aria-expanded","false");
  trigger.innerHTML='<span class="w4-launch-indicator" aria-hidden="true"><span></span><span></span><span></span></span><span class="w4-launch-copy"><small>FINAL WEEK / SOURCE FILE</small><strong>POWER BI REPORT</strong></span><span class="w4-launch-arrow" aria-hidden="true">↗</span>';

  const overlay=document.createElement("div");
  overlay.className="w4-powerbi-overlay";
  overlay.hidden=true;
  overlay.innerHTML=
    '<section class="w4-powerbi-panel" id="week4-powerbi-dialog" role="dialog" aria-modal="true" aria-labelledby="w4-report-title" aria-describedby="w4-report-note" tabindex="-1">'+
      '<div class="w4-panel-top"><span>SMCI / FINAL SUBMISSION / WEEK 04</span><button type="button" class="w4-panel-close" aria-label="Close Power BI panel">×</button></div>'+
      '<div class="w4-panel-scroll">'+
        '<p class="w4-panel-kicker"><span class="w4-panel-status"></span> HUMAN FACTORS · POWER BI</p>'+
        '<h2 id="w4-report-title">The analysis<br><em>behind the model.</em></h2>'+
        '<p id="w4-report-note" class="w4-panel-note">The completed Week 4 Power BI file accompanies the Customer Relations and Human Resource analysis. Access is provided through the original Full Sail SharePoint link.</p>'+
        '<div class="w4-panel-visual"><div class="w4-panel-visual-head"><span>REPORT EXHIBIT / '+(isCustomer?'53':'66')+'</span><span>POWER BI EXPORT</span></div><img src="'+previewSrc+'" alt="'+previewName+'" loading="lazy"><div class="w4-panel-visual-foot">'+previewName+'</div></div>'+
        '<div class="w4-panel-actions">'+
          '<a class="w4-panel-primary" target="_blank" rel="noopener noreferrer">OPEN THE SHARED POWER BI FILE <span aria-hidden="true">↗</span></a>'+
          '<button class="w4-preview-toggle" type="button" aria-expanded="false" aria-controls="w4-inline-preview">TRY IN-PANEL SHAREPOINT PREVIEW <span aria-hidden="true">⌄</span></button>'+
        '</div>'+
        '<div class="w4-inline-preview" id="w4-inline-preview" hidden><div class="w4-preview-header"><strong>SHAREPOINT / EMBEDDED VIEW</strong><span>External account access may be required</span></div><div class="w4-preview-frame-holder"></div><p>If the preview is empty or blocked, the original SharePoint link above can open the file directly. A SharePoint file link is not a live Power BI report embed URL.</p></div>'+
        '<p class="w4-panel-disclaimer">Report access is controlled by the existing Microsoft SharePoint sharing permissions. The website does not modify or republish the file.</p>'+
      '</div>'+
      '<div class="w4-panel-base"><span>SUPER MICRO COMPUTER, INC.</span><span>RESEARCH / 2026</span></div>'+
    '</section>';
  document.body.append(trigger,overlay);
  const panel=overlay.querySelector(".w4-powerbi-panel");
  const closeButton=overlay.querySelector(".w4-panel-close");
  const primary=overlay.querySelector(".w4-panel-primary");
  const previewToggle=overlay.querySelector(".w4-preview-toggle");
  const preview=overlay.querySelector(".w4-inline-preview");
  const holder=overlay.querySelector(".w4-preview-frame-holder");
  primary.href=shareUrl;
  let restoreFocus=null;

  function stopPreview(){
    holder.replaceChildren();
    preview.hidden=true;
    previewToggle.setAttribute("aria-expanded","false");
    previewToggle.innerHTML='TRY IN-PANEL SHAREPOINT PREVIEW <span aria-hidden="true">⌄</span>';
  }
  function closePanel(){
    stopPreview();
    overlay.hidden=true;
    document.body.classList.remove("w4-panel-is-open");
    trigger.setAttribute("aria-expanded","false");
    (restoreFocus||trigger).focus();
  }
  function openPanel(){
    restoreFocus=document.activeElement;
    overlay.hidden=false;
    document.body.classList.add("w4-panel-is-open");
    trigger.setAttribute("aria-expanded","true");
    closeButton.focus();
  }
  trigger.addEventListener("click",openPanel);
  document.querySelectorAll("[data-week4-launch]").forEach(element=>element.addEventListener("click",openPanel));
  closeButton.addEventListener("click",closePanel);
  overlay.addEventListener("click",event=>{if(event.target===overlay)closePanel()});
  document.addEventListener("keydown",event=>{
    if(overlay.hidden)return;
    if(event.key==="Escape"){event.preventDefault();closePanel();return}
    if(event.key!=="Tab")return;
    const focusable=[...panel.querySelectorAll('a[href],button:not([disabled]),iframe')].filter(e=>e.getClientRects().length>0);
    if(!focusable.length)return;
    const first=focusable[0],last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
  });
  previewToggle.addEventListener("click",()=>{
    if(!preview.hidden){stopPreview();previewToggle.focus();return}
    const frame=document.createElement("iframe");
    frame.title="Week 4 Power BI file — SharePoint preview (subject to Microsoft permissions)";
    frame.setAttribute("loading","lazy");
    frame.setAttribute("referrerpolicy","strict-origin-when-cross-origin");
    frame.setAttribute("allowfullscreen","");
    frame.src=shareUrl;
    holder.replaceChildren(frame);
    preview.hidden=false;
    previewToggle.setAttribute("aria-expanded","true");
    previewToggle.innerHTML='CLOSE IN-PANEL PREVIEW <span aria-hidden="true">⌃</span>';
    preview.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"nearest"});
  });
})();