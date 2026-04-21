# Déjà Vu

A research-driven science book on memory, dissociation, brain-computer loops, and what heals — rendered as a design-monograph web reader.

**Live site:** https://andygauge.github.io/deja-vu/

## What's in the book

86 one-page sections, chronologically ordered 1889–2026, each grounded in a specific published finding, court case, or program. Every page carries:

- A **gesture** (the punch)
- An optional **verbatim quote** from the source
- A **body** paragraph of factual context
- A **citation** and **primary-source link** (Wikipedia, DOI, court record, or program homepage)
- An **In plain terms** walkthrough for the reader who isn't academic

Navigation is strictly chronological — page 01 is the earliest idea (Janet, 1889); the final page is 2026. A side timeline on every page shows where the current idea sits in history.

Fourteen thematic categories (The Signal, The Repressed Memory Question, The Architecture of Forgetting, Compartments, The Mandated Room, The Model Without a Jury, Turning It Over, The Algorithm, The Rewritable Brain, The Rewrite Mechanism, The Reachable Shift, Oregon as Laboratory, What Heals, Applied) are preserved as categories in the Contents index but don't constrain the reading order.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
```

Static output lands in `build/`. Deploys to GitHub Pages via `.github/workflows/deploy.yml` on pushes to `main`.

## Keybindings (reader)

- `→` or horizontal scroll — next page
- `←` — previous page
- `↓` / `↑` / Space / PageDown / PageUp — scroll the current page
- `Esc` — jump to Contents
- `i` — jump to Index

## Author

Andrew Gauger
