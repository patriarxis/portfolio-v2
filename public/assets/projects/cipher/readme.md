# Cipher

> A browser-only password generator — set length and character options, get a cryptographically secure password, check strength, and copy it. Nothing leaves the device.

| | |
|---|---|
| **Role** | Designer & front-end |
| **Type** | Personal tool |
| **Stack** | Vue 3, TypeScript, Vite, Vitest, Phosphor Icons |
| **Links** | [Live](https://cipher.patriarxis.com) · [GitHub](https://github.com/patriarxis/cipher) |

---

## Overview

Cipher is a single-purpose password generator that runs entirely in the browser. You choose length and character sets, generate with the Web Crypto API, read an entropy-based strength meter, and copy the result. Preferences and a short history stay in `localStorage` on that device — there is no account, no server, and no analytics path for generated passwords.

---

## Highlights

- Generates passwords with `crypto.getRandomValues` (length 8–64)
- Toggles for uppercase, lowercase, numbers, and symbols
- Option to exclude ambiguous characters (`0`, `O`, `I`, `l`, `1`)
- Entropy-based strength meter that updates as options change
- One-click copy plus a short history of recently generated passwords
- Options and theme saved in `localStorage`
- Light / dark theme for the UI chrome

---

## Design

The UI is one focused card: password field, options, strength bar. Hierarchy stays tight so generation feels instant — no settings drawers or onboarding. Strength feedback is visual and immediate; the history strip is secondary so it never competes with the current password. Light and dark themes keep the same layout so the tool stays familiar across sessions.

---

## Build

Generation lives in a pure TypeScript module — unbiased sampling, charset guarantees, Fisher–Yates shuffle — so the crypto path can be unit-tested with Vitest without mounting Vue. The Vue layer is a thin shell around that module. Static deploy only: no backend, auth, or telemetry. Close the tab and the only copy that remains is what you chose to paste elsewhere.
