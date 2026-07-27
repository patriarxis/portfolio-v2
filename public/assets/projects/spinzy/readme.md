# Spinzy

> A full-screen promotional prize-wheel experience for FlexCar events — guests spin for weighted prizes on a branded canvas UI; operators tune the catalog without touching code.

| | |
|---|---|
| **Role** | Designer & front-end |
| **Type** | Marketing experience |
| **Stack** | TypeScript, Vite, Konva, Dragula, Web Audio API |
| **Links** | [Live](https://spinzy.patriarxis.com) · [GitHub](https://github.com/patriarxis/spinzy) |

---

## Overview

Spinzy is a booth-ready activation for FlexCar marketing events. Guests interact with a full-screen branded wheel; operators enable prizes, set weights, and reorder sectors from an on-device settings panel. Outcomes are probability-weighted so rare prizes stay rare across a night of spins, with distinct win and try-again results backed by motion and sound.

---

## Highlights

- Full-screen wheel with prize art and curved labels on a Konva canvas
- Probability-weighted outcomes so rare prizes stay rare across many spins
- Distinct win and try-again results with sound, motion, and result modals
- Operator settings: enable prizes, set weights, reorder sectors, cycle prize modes
- Settings persist in `localStorage` for event runs — no redeploy to tweak odds
- Ambient brand motion and Web Audio feedback
- Respects reduced-motion preferences without breaking live-event flow

---

## Design

Spinzy is built to feel like FlexCar brand theater, not a generic spinner widget. Full-bleed canvas, prize photography, curved labels, and audio cues carry the activation vibe; operator controls stay out of the guest view. Reduced motion dials back the spectacle while keeping the spin → result loop intact for a lobby or booth screen.

---

## Build

Static Vite + TypeScript app. The wheel is a Konva canvas: pick a weighted winner first, then animate rotation to that sector so the outcome matches the odds. Dragula powers the settings list reorder. Prize art and sounds ship as static assets under `public/assets/` — no backend required for a booth or lobby deploy.
