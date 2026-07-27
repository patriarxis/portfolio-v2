# Retrofolio

> A portfolio website template from 3ll — projects live as files in a retro PC-style interface with windows, a file explorer, markdown write-ups, and themeable chrome.

**Role:** Designer & front-end
**Type:** Portfolio template
**Stack:** Vue 3, TypeScript, Vite, Vue Router, SCSS, marked, axios
**Links:** [Live](https://retrofolio.3ll.gr)

---

## Overview

Retrofolio is a forkable portfolio shell shaped like a personal computer desktop. Projects appear as files you open in windows; write-ups stay markdown; themes swap like system skins. Built as a 3ll studio product for creatives who want a distinctive template without a CMS — drop content under assets, register it in TypeScript maps, and ship a static site.

---

## Highlights

- OS-inspired shell: screen bezel, dock nav, window chrome, and a status footer
- Home as a file explorer paired with a markdown pane and display image
- Projects index and per-project pages with carousel, links, and case-study markdown
- About / CV as a single window instead of a separate marketing layout
- Live theme switcher (bronze, red, yellow) and optional CRT noise overlays
- Content-driven: markdown and images under `public/assets/`, registered in TypeScript maps
- Hash routing for easy static hosting

---

## Design

The metaphor is a desktop you inhabit, not a blog grid. Windows, explorer panes, and CRT options set the mood; content stays plain markdown so writers are not locked into a CMS. Themes behave like system skins — quick to switch, consistent across views — so the template reads as a product with personality rather than a one-off mock.

---

## Build

Vue 3 with hash routing for static hosting. Views fetch markdown at runtime via `marked` instead of baking copy into components. Domain types describe projects, files, and windows so forkers change content and chrome without rewriting the shell. SCSS owns the retro look; themes swap through CSS variables.
