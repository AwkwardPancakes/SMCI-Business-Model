# SMCI / RESEARCH — Reservation-Backed AI Factory

The completed independent academic case study for **Super Micro Computer, Inc. (NASDAQ: SMCI)**, extended cumulatively across Weeks 1–4. The site studies rack-scale AI systems, proposed capacity reservations, process optimization, pricing, operating efficiency, customer relations, and human factors.

**Public site:** https://awkwardpancakes.github.io/SMCI-Business-Model/

## Nine-chapter research site

1. [Introduction](introduction.html) — current business process, financial indicators, and shortcomings.
2. [Proposed Business Model](proposed-business-model.html) — Reservation-Backed AI Factory, operating process, and pro forma statements.
3. [Business Process Analysis](business-process-analysis.html) — discrete-event simulation, workforce demand, and sales probability.
4. [Pricing Analysis](pricing-analysis.html) — supply-demand causal loops, contract tiers, and international stock/flow modeling.
5. [Operation Analysis](operation-analysis.html) — supply network, operating efficiency, and five-year targets.
6. [Decision Analysis](decision-analysis.html) — total quality control, industry trends, decision tree, and investment recommendation.
7. [Customer Relations](customer-relations.html) — a projected 600-account portfolio, segmentation, geographic and RFM analyses, funnel conversion, churn, customer relations and modeled revenue programs.
8. [Human Resource](human-resource.html) — skills, recruitment, retention, cognition and perception, OODA management, recognition-primed decisions, and a human factors scorecard.
9. [References](references.html) — 41 cumulative APA-style references, including additional human-factors research.

The assignment's required page labels are maintained exactly, including **Operation Analysis** and **Human Resource**.

## Final Week 4 Power BI source access

The Week 4 **Customer Relations** and **Human Resource** pages now expose a compact lower-right **POWER BI REPORT** launcher. Opening the contextual slide-out panel displays a visual preview, a direct link to the completed Week 4 file in the original Full Sail SharePoint share, and an optional in-panel SharePoint preview. The inline view may be blocked by Microsoft authentication, browser frame restrictions, or file-viewing policies; the **OPEN THE SHARED POWER BI FILE** link remains the reliable route.

The linked document is **a SharePoint file share**, not a verified public `app.powerbi.com` report embed address. The site therefore does not claim a live interactive Power BI service dashboard; Figure 53 remains the on-page static Power BI dashboard and the original live embed configuration remains ready for a future valid Power BI report URL. The customer segmentation and workforce figures retain their existing appearance and image enlargement behavior.

## Power BI visualizations

The site references **66 numbered Power BI image exports**, individually hosted in this repository's root:

- Week 1: Figures 01–18.
- Week 2: Figures 19–38.
- Week 3: Figures 39–52.
- Week 4: Figures 53–66.

The figures remain on their respective webpages, paired with source captions and interpretations. The desktop view features compact, emerald-framed exhibits with full-size hover previews; click/tap opens a larger view. The original financial and planning tables appear as selectable HTML in addition to Power BI images.

### Live Power BI customer dashboard (outstanding external input)

The **Customer Relations** page has an embed container for the live report page titled `Fig 53 Customer Dashboard`. Figure 53 provides a readable static Power BI dashboard fallback while a live report link is unavailable.

To activate the real live report:

1. Get an authorized embed link for the correct report from Power BI, using `Publish to web` for a report explicitly approved for public access or `Website or portal` for an appropriately authenticated audience.
2. Edit `powerbi-embed-config.js` and set `window.SMCI_POWER_BI_EMBED_URL` to the actual `https://app.powerbi.com/view?r=...` or `https://app.powerbi.com/reportEmbed?reportId=...` URL.
3. Commit the edit; GitHub Actions redeploys the site.

**Do not publish confidential or customer-specific information using Publish to web.** The original content describes synthetic/projected customer records; an actual published report should use permitted non-sensitive data. A private Power BI report may require authentication outside the public static site's control.

## Appearance and deployment

- Nine-section technical editorial navigation, deep navy SMCI-inspired palette, responsive layouts, technical typography, emerald-green rotating frames, and keyboard-accessible figure enlargement.
- Deployment via `.github/workflows/deploy.yml` on pushes to `main`; Pages source must be **GitHub Actions**.
- Original Power BI workspaces, PBIX files, and Excel model files are separate course submissions.

## Academic limitations

The source materials, projections, model assumptions, and exported visualizations were provided for an academic assignment. The results are **illustrative analyst estimates, not audited financial information or official company guidance**. No live Power BI dashboard URL was included in the Week 4 source. This website is an independent student project, not an official Supermicro publication.
