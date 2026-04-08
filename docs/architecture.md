# Architecture & Tech Stack

## Core Technologies
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (formerly Framer Motion) for React
- **Icons**: Lucide React

## Architectural Decisions

### 1. Component-Driven Design
- The UI is broken down into modular, reusable components located in the `/components` directory (e.g., `Navbar.tsx`, `Hero.tsx`, `Footer.tsx`).
- **Decision**: We actively avoid deeply nested UI folders (like `/components/ui/`) for page-specific, content-heavy sections (like the Footer) to keep the project structure flat, intuitive, and easy to maintain.

### 2. Server vs. Client Components
- **Client Components**: Interactive components that require state, hooks, or animations (e.g., `Navbar.tsx`, `Footer.tsx`) use the `'use client'` directive.
- **Server Components**: Static sections and the main `page.tsx` leverage Next.js Server Components by default to reduce the JavaScript bundle sent to the client, optimizing load performance.

### 3. Image Optimization
- **Decision**: All static assets (like the company logo) utilize the Next.js `<Image />` component.
- **Why**: This ensures automatic WebP conversion, responsive sizing (via `srcset`), and lazy loading, which is critical for maintaining high performance on a media-heavy landing page.

### 4. Hydration Safety
- **Decision**: Applied `suppressHydrationWarning` to specific elements that rely on browser-specific data or third-party injected attributes.
- **Examples**: 
  - `new Date().getFullYear()` in the Footer (prevents timezone/render-time mismatches).
  - The Google Maps `<iframe>` in the CTA section (prevents mismatch errors when browser extensions inject attributes into the DOM).
