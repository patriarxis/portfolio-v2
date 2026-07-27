# Favigo

> Drop a PNG, ICO, SVG, or WebP and see how it reads at common sizes — and in the real browser tab — before you ship it.

| | |
|---|---|
| **Role** | Designer & front-end |
| **Type** | Personal tool |
| **Stack** | Vue 3, TypeScript, Vite |
| **Links** | [Live](https://favigo.patriarxis.com) · [GitHub](https://github.com/patriarxis/favigo) |

---

## Overview

Favigo is a last-check tool for favicons. Upload a mark and compare how it holds up at 16×16 through 64×64, on light and dark frames, next to a browser-tab mock — and against the actual page favicon while a file is selected. Built for catching illegible logos before they go live, especially SVGs that look fine at artboard size but collapse in the tab.

---

## Highlights

- Drag-and-drop or file-picker upload for PNG, ICO, SVG, and WebP
- Size previews at 16×16, 32×32, 48×48, and 64×64
- Each size shown on light and dark frames for contrast checks
- Browser-tab mock next to the real filename
- Live replacement of the page favicon while a file is selected — the actual tab is the proof
- Light / dark theme for the app chrome
- Clear selection to revoke object URLs and restore the default favicon

---

## Design

The layout is a comparison board, not a converter: sizes and contrast frames sit equal so legibility problems are obvious at a glance. The tab mock and live favicon swap turn a static preview into a real-environment check. Chrome stays quiet so the mark itself is the subject — useful when reviewing a client logo that should not hit a third-party upload tool.

---

## Build

A thin Vue app: object URLs drive the size previews, and a small composable swaps `rel="icon"` links on the document so the real tab updates. No image-processing library, no accounts, no export pipeline — upload, inspect, clear. Files never leave the browser; clearing the selection revokes URLs and restores the default favicon. Static hosting only.
