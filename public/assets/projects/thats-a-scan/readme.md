# That's a Scan

> An interactive map for browsing geolocated surface texture scans — inspect place-tied PBR references on an Athens map and download map packs at multiple resolutions.

**Role:** Front-end / UI
**Type:** Interactive map product
**Stack:** React 19, TypeScript, Vite, Leaflet, react-leaflet, lucide-react, Sass
**Links:** [GitHub](https://github.com/patriarxis/thats-a-scan)

---

## Overview

That's a Scan is a discovery UI for geolocated surface textures. Each marker on a dark Athens map is a real scan location — hover for a quick preview, open a detail drawer for description and texture maps, then download PBR packs at 2K / 4K / 8K. Aimed at material and environment artists who want place-tied references rather than a capture pipeline.

---

## Highlights

- Full-viewport dark map centered on Athens with custom markers for each scanned surface
- Hover previews: title, neighborhood, download count, and image thumbnails
- Detail drawer on click: description, preview grid, texture maps, and resolution packs
- Texture maps include Diffuse, Normal, Roughness, AO, Displacement, and Metallic where available
- Resolution downloads at 2K / 4K / 8K
- Fullscreen image preview with download
- Neighborhood samples such as Plaka stone, Exarcheia graffiti, and Acropolis marble

---

## Design

The map is the product surface: dark basemap, custom markers, and overlays that appear only when useful. Hover keeps discovery light; the drawer handles depth without leaving the map context. Fullscreen previews treat texture detail as first-class — artists can judge surface quality before committing to a resolution pack.

---

## Build

Single-page React app: one map owns markers, hover overlays, the side drawer, and the image modal. Leaflet + react-leaflet handle the basemap; scan metadata and sample textures live as front-end data. Built as a static Vite front end with Sass for the dark UI chrome — no CMS required to browse the catalog.
