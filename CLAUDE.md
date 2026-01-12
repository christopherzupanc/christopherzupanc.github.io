# CLAUDE.md - Kiko Engineering Portfolio

## Project Overview

This is a React-based portfolio website for Kiko Engineering, a freelance engineering and prototyping services company. Built with Bun, React 19, and Tailwind CSS 4.

## Commands

```bash
bun install      # Install dependencies
bun dev          # Development server with HMR
bun run build    # Build for production (outputs to /dist)
bun run deploy   # Build and deploy to GitHub Pages
```

## Architecture

**Tech Stack:** Bun + React 19 + TypeScript + Tailwind CSS 4

**Routing:** Custom client-side SPA routing via React state in `App.tsx` (no router library)

**Key Directories:**
- `src/pages/` - Page components (Home, Services, References, About, Contact, Imprint)
- `src/components/` - Reusable components (Navigation, VideoPlayer)
- `src/components/ui/` - shadcn/ui components (button, card, input, form, etc.)
- `src/lib/utils.ts` - Utility functions including `cn()` for Tailwind class merging
- `assets/` - Static images and videos (WebP format for images)

## Styling Guidelines

### Color Palette

Use these established colors consistently:

| Purpose | Color | Tailwind Class |
|---------|-------|----------------|
| Primary accent | `#f97316` | `orange-500` |
| Hover accent | `#fb923c` | `orange-400` |
| Active accent | `#ea580c` | `orange-600` |
| Secondary accent | `#f59e0b` | `amber-500` |
| Background | `#12121a` | Custom (bg-[#12121a]) |
| Card background | `#18181f` | Custom |
| Text primary | `#f4f4f5` | `zinc-100` |
| Text secondary | `#a1a1aa` | `zinc-400` |
| Text muted | `#71717a` | `zinc-500` |

### Visual Effects

The site uses these effects defined in `src/index.css`:

- **Mesh gradients:** Layered radial gradients for background depth
- **Glow effects:** `animate-pulse-slow` on accent elements
- **Glass morphism:** `backdrop-blur` with semi-transparent backgrounds
- **Grid overlay:** Subtle texture patterns
- **Gradient text:** `.text-gradient-orange` class

### Custom Animations

Available in `src/index.css`:
- `animate-pulse-slow` (4s) - Subtle pulsing
- `animate-float` (6s) - Floating motion
- `animate-glow` (2s) - Glow effect
- `animate-shimmer` (2s) - Shimmer effect
- `animate-spin-slow` (8s) - Slow rotation

### Component Patterns

**Buttons:** Use shadcn Button component with variants (default, outline, ghost)

**Cards:** Dark backgrounds (`bg-zinc-900/50`) with subtle borders (`border-zinc-800`)

**Hover states:** Scale transforms (`hover:scale-105`) and opacity transitions

**Responsive:** Mobile-first with `md:` and `lg:` breakpoints

## Functionality Patterns

### Forms

Use React Hook Form with Zod validation:
```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
```

### Class Name Merging

Always use the `cn()` utility for conditional classes:
```tsx
import { cn } from "@/lib/utils"
cn("base-class", condition && "conditional-class")
```

### Adding New Pages

1. Create component in `src/pages/`
2. Add case to switch statement in `App.tsx`
3. Add navigation link in `Navigation.tsx`

### Adding UI Components

The project uses shadcn/ui. Add components via the shadcn pattern or create in `src/components/ui/`.

## Important Notes

- Images should be WebP format for optimization
- Videos use HLS.js for streaming
- No external routing library - routing is state-based
- The server (`src/index.tsx`) handles API routes at `/api/*`
- Build output goes to `/dist` and deploys to `gh-pages` branch
