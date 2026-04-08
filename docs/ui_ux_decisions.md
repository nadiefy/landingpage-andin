# UI/UX & Design Decisions

## Design Philosophy
The landing page follows a **dark, cinematic aesthetic** designed to convey a premium, luxury car rental experience. This involves deep black backgrounds, subtle glassmorphic effects (blur and transparency), and high-contrast white/accent text.

## Key Decisions

### 1. Logo Sizing and Placement
- **Challenge**: The provided logo (`andinlogo-removebg.png`) had built-in transparent padding. When constrained by standard Tailwind height classes (`h-8`, `h-10`), the actual visible logo appeared weak and undersized.
- **Solution**: Instead of manually cropping the image file, we used CSS transforms (`scale-[1.2]`, `origin-left`) combined with `overflow-visible` on the parent container. This allowed the visible portion of the logo to fill the space elegantly without breaking the Navbar's pill-shaped design or the Footer's grid layout.

### 2. Footer Consolidation & Context
- **Challenge**: The project initially used a generic SaaS footer template with links like "Changelog" and "Integration".
- **Solution**: We consolidated the footer into a single `components/Footer.tsx` file and updated the links to match the physical car rental context ("Our Fleet", "Services", "Terms & Conditions"). This ensures the user journey makes sense for the actual business model.

### 3. Interactive Map (CTA Section)
- **Challenge**: The Google Maps embed was blocked by a custom "Open in Google Maps" overlay and dimmed by a hover effect. This prevented users from interacting with the map natively.
- **Solution**: Removed the overlay and opacity restrictions. The map is now 100% interactive, allowing users to zoom and pan directly on the page, providing a better UX for locating the physical business address.

### 4. Navigation Flow
- **Challenge**: The Navbar link order did not match the vertical scroll order of the page sections.
- **Solution**: Reordered links to `Services -> Fleet -> About Us -> Contact` to create a logical, predictable scrolling experience that mirrors the user's journey down the page.
