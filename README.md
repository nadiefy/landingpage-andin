# Andin — Premium Car Rental

**Luxury transport, effortless booking.**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](#license)

A dark, immersive landing page for a premium car rental service — built for Andin. Scroll-driven parallax, cinematic hero, and buttery animations powered by Framer Motion.

</div>

---

## Features

- **Cinematic Hero** — full-bleed video background with scroll-driven parallax fade
- **Fleet Showcase** — Apple-style interactive carousel with swipeable vehicle cards
- **Services Section** — asymmetric bento grid with glassmorphism overlays and animated headings
- **Motion Everywhere** — smooth scroll-triggered reveals, parallax layers, and hover micro-interactions
- **Dark Premium Aesthetic** — deep blacks, warm accents, Space Grotesk + Geist typography
- **Responsive** — mobile-first, fluid down to `100dvh` viewport units
- **Accessible** — `prefers-reduced-motion` respected throughout

## Built With

| Layer | Tech |
|-------|------|
| Framework | Next.js 15 (App Router, standalone output) |
| UI | React 19, Tailwind CSS 4 |
| Animation | Framer Motion (`motion` v12) |
| Icons | Phosphor Icons, Lucide |
| AI | Google Gemini (via `@google/genai`) |
| Deployment | Firebase Hosting |

## Getting Started

**Prerequisites:** Node.js 18+

```bash
# 1. Clone
git clone https://github.com/nadiefy/landingpage-andin.git
cd landingpage-andin

# 2. Install dependencies
npm install

# 3. Set your Gemini API key
cp .env.example .env.local   # then edit GEMINI_API_KEY

# 4. Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── app/                  # App Router — layout, page, global styles
│   ├── layout.tsx        # Root layout, fonts (Geist, Space Grotesk)
│   ├── page.tsx          # Home page composition
│   └── globals.css       # Tailwind v4 entry
├── components/           # All landing page sections
│   ├── Navbar.tsx
│   ├── Hero.tsx          # Video hero + scroll parallax
│   ├── Services.tsx      # Bento grid service cards
│   ├── Fleet.tsx         # Interactive vehicle carousel
│   ├── About.tsx         # Why choose us + parallax images
│   ├── CTA.tsx           # Contact call-to-action
│   └── Footer.tsx
├── public/               # Static assets (images, icons)
└── docs/                 # Design specs and PRDs
```

## License

MIT
