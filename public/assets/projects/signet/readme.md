# Signet

> A local-first email signature library — pick a template, fill your details, and copy HTML that pastes cleanly into Outlook, Gmail, and CRM senders.

**Role:** Designer & front-end
**Type:** Personal tool
**Stack:** Vue 3, TypeScript, Vite, CodeMirror 6, Phosphor Icons, js-beautify
**Links:** [Live](https://signet.patriarxis.com) · [GitHub](https://github.com/patriarxis/signet)

---

## Overview

Signet is a browser tool for building email signatures without accounts or cloud sync. You browse table-based templates, edit shared fields in a sidebar, tweak formatting on the signature itself, then copy sanitized HTML ready for real email clients. Everything stays on the device — useful when you need a clean signature fast and do not want a third-party editor holding your contact details.

---

## Highlights

- Gallery of table-based templates (Dark Edge, Clean Slate, Profile Plus, Corporate Pro, and more)
- Shared sidebar for name, title, email, links, logo, and related fields — plus reset to defaults
- Inline editing with a format bubble: bold, italic, underline, strikethrough, link, color, and email-safe fonts
- Preview / HTML toggle with CodeMirror so you can inspect markup before copying
- Copy sanitizes the live DOM — strips editor chrome, keeps nested tables and inline styles clients expect
- Edits persist in `localStorage`; light / dark theme affects app chrome only
- Placeholder prompts when a field is empty so unfinished signatures are obvious

---

## Design

Signatures are built the way email still works: nested tables and inline styles, not modern CSS layouts that break in clients. The app chrome can go dark; the signatures themselves stay presentation-safe. The format bubble and sidebar keep editing next to the preview so the product feels like a small design tool — browse, tweak, copy — rather than a multi-step form wizard.

---

## Build

Each template is a Vue component whose root is a presentation `<table>`. Shared content drives every signature; presentation overrides live per template. On copy, the live DOM is sanitized into email-safe HTML and optionally beautified for the code view. CodeMirror powers the HTML pane. Static hosting only — no backend, auth, or sync.
