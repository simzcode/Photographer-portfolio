// ===== STEP 1: Hero zoom-on-scroll effect =====

// Grab the hero section once, so we don't have to search the page every time
const hero = document.querySelector('.main-statement');

// Run this function every time the user scrolls the page
window.addEventListener('scroll', () => {
    if (!hero) return; // this page has no hero section — nothing to do

    const scrollY = window.scrollY; // pixels scrolled from the top

    // As scrollY grows, "scale" shrinks — but never below 0.85 (85% size)
    const scale = Math.max(1 - scrollY / 1000, 0.85);

    // Same idea for fading it out slightly — never below 0.3 (30% opacity)
    const opacity = Math.max(1 - scrollY / 600, 0.3);

    hero.style.transform = `scale(${scale})`;
    hero.style.opacity = opacity;
});

// ===== STEP 2: Category tiles slide into view on scroll =====

// Grab all four tiles as a list
const tiles = document.querySelectorAll('.Category_tile');

// Start every tile off hidden (shifted down + invisible, via CSS)
tiles.forEach(tile => {
    tile.classList.add('tile-hidden');
});

// Create a watcher that checks whether each tile is on screen
// threshold: 0.15 means "don't count it as visible until at least
// 15% of the tile is actually on screen" — without this, even 1px
// of overlap counts, which can make the animation trigger too early
// to notice on tall screens.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Tile has scrolled into view — swap it to visible
            entry.target.classList.remove('tile-hidden');
            entry.target.classList.add('tile-visible');
        }
    });
}, {
    threshold: 0.15
});

// Tell the watcher which elements to actually watch
tiles.forEach(tile => {
    observer.observe(tile);
});

// ===== STEP 3: Lightbox gallery (category pages) =====

// Grab the gallery photos and the lightbox pieces
const galleryPhotos = document.querySelectorAll('.gallery-photo');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// Open the lightbox when a gallery photo is clicked
galleryPhotos.forEach(photo => {
    photo.addEventListener('click', () => {
        lightboxImg.src = photo.src;
        lightboxImg.alt = photo.alt;
        lightbox.classList.add('open');
    });
});

// Close the lightbox via the × button
if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('open');
    });
}

// Close the lightbox by clicking the dark background (not the photo itself)
if (lightbox) {
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            lightbox.classList.remove('open');
        }
    });
}