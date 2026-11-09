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

All **38 Power BI figure exports** have been verified in the repository root.

- **Week 1:** Figures 01–18, used on the Introduction and Proposed Business Model pages.
- **Week 2:** Figures 19–38, used on the Business Process Analysis and Pricing Analysis pages.
- Each Week 2 HTML image source directly matches the uploaded GitHub PNG filename. No external image service or ZIP extraction is required.
- Images appear with rotating green borders, load responsively, expand on desktop hover, and open a larger view when clicked or tapped.
- The original Power BI workspace and calculation workbook are separate deliverables.

## Deployment

The repository uses the checked-in GitHub Actions workflow at `.github/workflows/deploy.yml`. In Settings → Pages, the source must be **GitHub Actions**. New commits to `main` trigger deployment.

## Academic limitations

- Financial forecasts, simulations, and scenario probabilities are supplied analyst estimates; they are **not** audited company results or official company guidance.
- Figures labeled Power BI are project-supplied chart exports. Their source Power BI workspace, `.pbix` model, and accompanying Excel calculations are not embedded in the static website.
- The information was transcribed from the supplied Week 1 and Week 2 research documents, without independent verification of the research assumptions.
- This website is an academic case study, not a Supermicro-operated publication.
