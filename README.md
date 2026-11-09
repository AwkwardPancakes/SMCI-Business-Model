# SMCI Research — Reservation-Backed AI Factory

An independent academic case study of Super Micro Computer, Inc. (NASDAQ: SMCI), covering the Week 1 operating model and the Week 2 simulation, sales, pricing and workforce analysis.

**Public website:** https://awkwardpancakes.github.io/SMCI-Business-Model/

## Published chapters

1. [Introduction](introduction.html) — current order-to-cash process and its shortcomings.
2. [Proposed Business Model](proposed-business-model.html) — reservation-backed capacity operations and pro forma financial statements.
3. [Business Process Analysis](business-process-analysis.html) — discrete-event simulation, workforce plan, sales analysis and probabilities.
4. [Pricing Analysis](pricing-analysis.html) — domestic causal loops, megawatt pricing and foreign stock-and-flow models.
5. [References](references.html) — 24 cumulative APA-style source entries.

The design uses a deep navy background, green animated exhibit frames, technical editorial typography, responsive navigation, and click or hover magnification for diagrams and Power BI exports.

## Figure files

Every Power BI figure is referenced directly from a website page so all assignment elements remain on the primary site.

- Week 1: Figures 01–18 (already committed in the repository root).
- Week 2: Figures 19–38, named exactly as in `SMCI_Week2_Website_Content.md`, should be committed as **individual PNG files**, ideally in the repository root.
- The website tries a small set of common Week 2 image subdirectories when a root-level PNG is missing.
- A ZIP archive **alone is not sufficient**: GitHub Pages serves files but does not extract archives. If the images have not been committed individually, the site displays an explicit "Power BI exhibit awaiting publication" notice and preserves the caption.

Example Week 2 image paths: `Fig19_Event_Simulation_Flow.png`, `Fig30_Causal_Loop_Domestic.png`, `Fig38_Week2_Executive_Dashboard.png`.

## Deployment

The repository uses the checked-in GitHub Actions workflow at `.github/workflows/deploy.yml`. In Settings → Pages, the source must be **GitHub Actions**. New commits to `main` trigger deployment.

## Academic limitations

- Financial forecasts, simulations, and scenario probabilities are supplied analyst estimates; they are **not** audited company results or official company guidance.
- Figures labeled Power BI are project-supplied chart exports. Their source Power BI workspace, `.pbix` model, and accompanying Excel calculations are not embedded in the static website.
- The information was transcribed from the supplied Week 1 and Week 2 research documents, without independent verification of the research assumptions.
- This website is an academic case study, not a Supermicro-operated publication.
