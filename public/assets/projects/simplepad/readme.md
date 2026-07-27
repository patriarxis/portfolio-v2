# SimplePad

> A private rich-text notepad in the browser — open the URL, type, leave. Notes auto-save locally with Markdown shortcuts and a floating format toolbar.

**Role:** Designer & front-end
**Type:** Personal tool
**Stack:** Vue 3, TypeScript, Vite, TipTap, marked, lowlight, Phosphor Icons
**Links:** [Live](https://simplepad.patriarxis.com) · [GitHub](https://github.com/patriarxis/simplepad)

---

## Overview

SimplePad is an offline-first notepad for private drafts on a single device. There are no accounts, sync, or server copies — only what the browser stores locally. You get rich editing with Markdown shortcuts, a selection toolbar, syntax-highlighted code, and a Markdown source toggle when you want to inspect or export the note.

---

## Highlights

- Rich editing: headings, lists, task lists, quotes, tables, links, images, highlight, alignment, super/subscript
- Markdown shortcuts (`#`, `-`, `` ```js ``, `**bold**`, `- [ ]`, `[text](url)`, and similar) with toolbar hints
- Floating format toolbar on selection; Phosphor icons with hover tooltips
- Syntax-highlighted code blocks with a language picker
- Preview / Markdown source toggle for a quick round-trip check
- Download the note as `.md`
- Debounced auto-save to `localStorage`; light / dark theme

---

## Design

The surface is deliberately spare: a writing area, a toolbar that appears when you need it, and theme chrome that stays out of the way. Shortcut hints on the toolbar teach Markdown without a docs page. The product is meant to feel like a scratch pad you open and leave — not a notebook product with folders, sharing, or onboarding.

---

## Build

TipTap (ProseMirror) drives the editor, with a custom Markdown round-trip via `marked` for source view and download. Writes are debounced to `localStorage`; storage errors surface as a toast instead of failing silently. Images stay as data URLs on the device. Static deploy, no backend — intentionally a single-device pad, not a multi-device notebook or backup service.
