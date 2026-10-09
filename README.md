# NexSutra corporate website

A standalone, responsive company website built with HTML, CSS, vanilla JavaScript, and a locally stored SVG logo. It does not call the ISP middleware, camera platform, or any backend service.

## Run locally

From this directory:

```bash
python3 -m http.server 8088
```

Open [http://localhost:8088](http://localhost:8088).

## Files

- `index.html` — page content and semantic structure
- `styles.css` — responsive visual system and reduced-motion behavior
- `script.js` — mobile navigation, deployment selector, and lightweight reveal effects
- `assets/nexsutra-global-orb.svg` — original SVG interpretation of the Global Orb concept, created for this site because no existing logo asset was found in the project

The page uses system sans-serif fonts and has no external runtime dependencies. No build step is required.

## Content accuracy

The site distinguishes current development-lab demonstrations from planned and future work. It does not claim commercial-scale deployment, production ODM compatibility, quantified business outcomes, or production subscriber authorization. TechMind is described only as the initial pilot collaborator.

The contact section is intentionally a non-functional placeholder until NexSutra supplies a real contact destination.
