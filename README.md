# Cacti Café — landing page

A premium, cinematic landing page for **Cacti Café**, the design-led coffee &
dessert house in Qurtubah, Riyadh. Built as a calm, editorial, desert-modern
experience rather than a template.

## Stack

- **Next.js 15** (App Router, React Server Components)
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **Motion** (`motion/react`) for the reveal / parallax choreography
- **next/font** — Bricolage Grotesque (display) + Instrument Sans (body)
- Typescript throughout

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```

## Design direction

- **Accent (locked):** desert teal `#2f8a7e`, taken straight from the café's
  identity (the saguaro logo, the neon glass line-art, the La Marzocco, the
  cups). Used identically on every section.
- **Neutrals:** warm limestone paper, concrete grey, and one deep charcoal-green
  used only for the single "Step inside" section.
- **Type:** sans display, no serif — closer to the architecture-studio / Apple
  reference than to a generic café template.
- **Motion:** one house gesture (slow fade + rise + de-blur), plus gentle
  parallax on the two full-bleed sections. Everything honours
  `prefers-reduced-motion`.

## Structure

```
app/            layout (fonts, metadata), globals (tokens), page (composition)
lib/site.ts     all copy + real business data (address, hours, drinks)
components/
  Nav.tsx
  ui/           Media, Reveal/Stagger, Logo, Kicker
  sections/     Hero, About, Signature, Menu, Interior, WhyVisit,
                Gallery, Location, Footer
public/images/  the café's own photography (HEIC originals, re-oriented + optimised)
```

## Swapping images for video later (built in)

Every visual renders through `components/ui/Media.tsx`. To turn any still into a
cinematic clip, add a `video` source — the component renders a muted, looping,
autoplay `<video>` and keeps the still as its poster, with the same crop and
rounding. No section rewrites:

```tsx
// today
<Media src="/images/hero-staircase.jpg" alt="…" priority />

// later (image-to-video)
<Media src="/images/hero-staircase.jpg" video="/media/hero.mp4" alt="…" priority />
```

Drop `.mp4` files in `public/media/` and flip the prop. The hero and the
"Step inside" section are the natural first candidates for the planned
image-to-video scroll transitions.

## Notes / TODO for the owner

- Social handles are intentionally omitted (no verified Instagram/TikTok URL was
  available). Add them in `lib/site.ts` + the footer when confirmed.
- Dessert photography is a placeholder set drawn from the real coffee/cup shots;
  swap in genuine pastry photos in `components/sections/Menu.tsx` when available.
- Drink and sweet names are representative of the menu; confirm against the
  current in-store list.
