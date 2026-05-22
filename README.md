# Café Planken — Mannheim

Eine editorial-warme One-Page-Marketingseite für **Café Planken** (O6 6, 68161 Mannheim) — Teil der Mannheimer Eismanufaktur. Eis, Pasta, Kuchen, Kaffee. Manufaktur auf den Planken.

## Stack

- **Next.js 16** · App Router · TypeScript (strict)
- **Tailwind CSS 4** · CSS-first theme via `@theme`
- **Motion 12** (Framer Motion successor)
- **next/font** mit Fraunces (Display), Inter (Body), JetBrains Mono (Mikrolabels)
- **lucide-react** Icons
- Static export-fähig, deploybar auf Vercel / Cloudflare Pages

## Setup

```bash
npm install
npm run dev      # localhost:3000
npm run build    # Production Build
npm run start    # Production Server
npm run lint     # ESLint
```

Node ≥ 20 erforderlich (entwickelt unter Node 24).

## Projektstruktur

```
app/
  layout.tsx          – Root, Fonts, Metadata, JSON-LD
  page.tsx            – One-Page Assembler
  globals.css         – Design Tokens (CSS variables + @theme)
  robots.ts           – /robots.txt
  sitemap.ts          – /sitemap.xml
  icon.svg            – Favicon
  impressum/          – Impressum-Platzhalter
  datenschutz/        – Datenschutz-Platzhalter
components/
  sections/           – Nav, Hero, Intro, Menu, Highlights, Reviews, Visit, Footer
  ui/                 – Wordmark, SectionEyebrow, Rating, ServiceBadge, Reveal
lib/
  content.ts          – Alle Inhalte (Speisekarte, Öffnungszeiten, Adresse, Reviews)
  motion.ts           – Shared Animations-Tokens
  utils.ts            – cn() Helper
```

## Inhalte aktualisieren

Alle redaktionellen Inhalte liegen zentral in `lib/content.ts`:

| Feld                  | Hinweis                                                   |
| --------------------- | --------------------------------------------------------- |
| `business.hours`      | Öffnungszeiten — beeinflusst auch JSON-LD Schema          |
| `business.phone`      | Telefonnummer, wird in Nav / Footer / Visit referenziert  |
| `business.rating`     | Sterne + Anzahl Reviews (Anzeige in Hero & Reviews)       |
| `menu`                | Kategorien + Items + Preise                               |
| `reviews`             | Pullquotes mit Quelle                                     |
| `mapsEmbed`/`mapsLink`| Google-Maps-iFrame-URL und Routenlink                     |

Bilder werden über `next/image` von Unsplash geladen (siehe `next.config.ts` → `images.remotePatterns`). Eigene Fotos einfach in `/public/img/…` ablegen und URLs in `hero.tsx` / `intro.tsx` ersetzen.

## Deployment

### Vercel

```bash
vercel deploy
```

Keine Env-Variablen nötig. Build-Output ist vollständig statisch.

### Cloudflare Pages / Anywhere static

In `next.config.ts` `output: "export"` aktivieren und `npm run build` → Inhalt aus `out/` deployen.

## Design-Entscheidungen

Siehe **DECISIONS.md** für Farbpalette, Typografie-Wahl, Layout-Begründungen und Quellen der Inhaltsrecherche.

## Lizenz & Daten

Alle Inhalte sind aus öffentlich zugänglichen Quellen (Google Reviews, Instagram, Coolibri, TripAdvisor, Mannheimer Eismanufaktur) recherchiert. Vor Live-Gang sind Impressum und Datenschutzerklärung juristisch zu ergänzen.
