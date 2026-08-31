# Lumenary Atelier
 
A photography studio website built as a front-end web development project. The site presents a photography brand's portfolio, story, and contact details across a small set of static pages, styled with a warm, editorial aesthetic and enhanced with a few JavaScript-driven interactions.
 
## Pages
 
| Page | File | Description |
|---|---|---|
| Home | `home.html` | Hero statement section and a category strip linking into the portfolio |
| About | `about.html` | Studio story, split image/text layout |
| Portfolio | `portfolio.html` | Full image gallery with hover-reveal captions |
| Category pages | `candid.html`, `portraits.html`, `nature.html`, `editorial.html` | One gallery per photography category, following a shared template |
| Contact | `contact.html` | Contact details and enquiry form |
 
## Features
 
- **Responsive, fluid layout** — built with CSS Grid and Flexbox, using `clamp()` for spacing and typography so the site scales smoothly between mobile and desktop without hard breakpoints.
- **Asymmetric portfolio grid** — the gallery uses `grid-column`/`grid-row` spans to feature specific images larger or wider than the rest, rather than a uniform grid.
- **Hover-reveal captions** — each gallery image has a caption overlay that stays hidden until hovered, using `opacity`, `transform`, and `transition` (no JavaScript required for this effect).
- **Scroll-triggered hero animation** — the homepage hero image zooms and fades in as the page loads/scrolls.
- **Staggered category reveal** — the category tiles animate into view one after another rather than all at once.
- **Click-to-enlarge lightbox** — on the category gallery pages, clicking a photo opens it enlarged in a lightbox view.
## Tech stack
 
- **HTML5** — semantic structure (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **CSS3** — Grid, Flexbox, custom properties via design tokens (colors, spacing), `clamp()` for responsive sizing, transitions for hover states
- **JavaScript (vanilla)** — hero animation, staggered reveal, and lightbox gallery; no external frameworks or libraries
- **Google Fonts** — [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (headings) and [Lato](https://fonts.google.com/specimen/Lato) (body text)
## Project structure
 
```
├── index.html / home.html
├── about.html
├── portfolio.html
├── contact.html
├── candid.html
├── portraits.html
├── nature.html
├── editorial.html
├── styles.css
├── script.js
└── images/
    ├── backdrop.jpg
    ├── nature.jpg
    ├── Candid.jpg
    ├── Editorial.jpg
    └── ...
```
 
## Design
 
- **Color palette**
  - Cream background — `#F0E8D5`
  - Near-black text — `#231F17` / `#1C1B16`
  - Accent gold — `#C9A86A`
  - Accent rust — `#C4693A`
  - Accent olive — `#5C6B3A`
- **Typography** — Cormorant Garamond for headings (serif, editorial feel), Lato for body copy and navigation (clean, uppercase, letter-spaced labels)
## Running the project locally
 
No build step or server is required — it's a static site.
 
1. Download or clone the project folder.
2. Open `home.html` (or `index.html`) directly in a browser, **or** serve the folder with a simple local server for correct relative image paths, e.g.:
```
   npx serve .
```
3. Navigate the site using the header links.
## Browser support
 
Built and tested against current versions of Chrome, Firefox, and Edge. Uses modern CSS (`aspect-ratio`, `clamp()`, `object-fit`) which requires a reasonably up-to-date browser; older browsers may not render the layout correctly.
 
## Accessibility notes
 
- All images include descriptive `alt` text.
- Hover animations respect `prefers-reduced-motion` where implemented, disabling the zoom effect for users who have that system setting enabled.
- Semantic HTML elements are used throughout for screen reader compatibility.

## License
 
© 2026 Lumenary Atelier Photography. All rights reserved. This project was created for educational purposes.
