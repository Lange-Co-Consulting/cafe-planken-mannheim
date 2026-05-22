# DECISIONS.md

Eine kompakte Begründung der wichtigsten Design- und Architekturentscheidungen für das Café-Planken-Projekt. Wenn etwas geändert werden soll: erst hier den Grund lesen, dann handeln.

---

## 1 — Stilreferenz & Übersetzung

Referenz: **19sieben.pages.dev** — Café in Münster mit redaktioneller Bildsprache, ehrlichem Tonfall, modularer Sektions­führung und nummerierten Karten-Kategorien.

Übernommen wurde das **System**, nicht die Optik:

- Modulare, klar nummerierte Sektionen (§ I — V)
- Großzügiger vertikaler Rhythmus, kein Center-Aligned-Default
- Redaktioneller Tonfall in der Du-Form, ohne Klischees
- Hausgemachte Sterne-Statistik prominent
- Kein Reservierungs-Lärm, dafür Telefonnummer als CTA

Differenz: Wir nutzen **Serif-Display** (Fraunces) statt der humanist-sans Lösung des Originals, eine deutlich tiefere Farbpalette (Espresso/Terrakotta statt Orange/Cream) und Pullquote-Reviews statt Karten-Grid.

## 2 — Farbpalette

| Token             | Hex       | Rolle                                  |
| ----------------- | --------- | -------------------------------------- |
| `--bg`            | `#F4ECE0` | Warme Cream-Hauptfläche                |
| `--bg-soft`       | `#ECE2D2` | Sektions-Hinterlegung (Manufaktur)     |
| `--paper`         | `#FAF5EB` | Nahezu weiße Karten / Map-Frame        |
| `--ink`           | `#1C1812` | Tiefer Espresso — Headlines & Body     |
| `--ink-2`         | `#524A3F` | Sekundärtext                            |
| `--ink-3`         | `#8A8275` | Muted (Eyebrows, Captions)             |
| `--rule`          | `#DDD0BC` | Haarlinien                              |
| `--accent`        | `#A64D38` | Warm-Terrakotta — Sterne, Beliebt-Tag  |
| `--accent-deep`   | `#823720` | Hover-Variante                          |

**Warum diese Palette:** Mannheim-Innenstadt, Eismanufaktur, Holzgastronomie auf den Planken — eine warme, geerdete Welt. Bewusst kein Orange (wie 19sieben), sondern ein erdiges Terrakotta, das Eigenständigkeit signalisiert. Espresso-Ink statt reinem Schwarz hält die ganze Seite weich.

## 3 — Typografie

- **Display: Fraunces** — variable Serif mit `opsz`/`SOFT`/`WONK`-Achsen. Hat in der Italic-Variante eine eigenwillige, kalligrafische Note ("ein Stück Mannheim."), in Roman die ruhige Editorial-Strenge. Nicht-AI-haft, keines der verbotenen Klischees (Playfair/Lora/Poppins/Montserrat).
- **Sans: Inter** — robuste Deutschland-Lesbarkeit, korrekte Umlaute, ruhig im Hintergrund.
- **Mono: JetBrains Mono** — ausschließlich für Mikrolabels (11px, +0.18em Tracking, uppercase) und Preise.

**Skala:** Clamp-basiert. `display-xl` → `clamp(2.75rem, 7.5vw, 6.5rem)`, `display-lg` → `clamp(2.25rem, 5.5vw, 4.5rem)`. Headlines tracken negativ (`-0.025em`), Mikrolabels positiv (`+0.18em`).

## 4 — Layout-Logik

- **Asymmetrische 12-Spalten-Grids** in jeder Sektion. Hero: Headline 7/12 + Bild 5/12 mit y-Offset. Reviews: alternierende Spalten 2-7-7-12 für Pullquote-Rhythmus.
- **One-Page mit Anchor-Scroll**: `#karte`, `#manufaktur`, `#stimmen`, `#besuchen`. `scroll-margin-top` global auf 5.5rem für sticky Nav.
- **Sektionshöhen**: `py-24 md:py-36` als Default — bewusst luftig, kein "dichter" Marketing-Vibe.
- **Hairlines** zwischen Sektionen (`mx-5 md:mx-10`), nicht edge-to-edge — gibt der Seite einen Editorial-Rand.

## 5 — Motion

Disziplin nach Emil Kowalski: kurz, ease-out, nur dort wo es Bedeutung trägt.

- Hero: Staggered Fade-Up von Headline → Bild → Sub → Meta (delays 0.05 → 0.45)
- Sektionen: `Reveal`-Komponente mit `whileInView`, Threshold 10 %, once
- Menu-Tabs: `layoutId` Underline mit 0.4s ease-out
- Menu-Items: micro-stagger 30ms beim Tab-Wechsel
- `prefers-reduced-motion`: vollständig respektiert via `useReducedMotion` und CSS `@media`

**Bewusst nicht gemacht:** Bouncing, Spring-Overshoot, Parallax, animierte Gradients, Scroll-Linked-Transforms.

## 6 — Bildwelt

Drei Unsplash-Bilder, gezielt warm und ungekünstelt:

- **Hero**: Hand mit Gelato-Waffel — direktes Manufaktur-Statement, kein Latte-Art-Klischee.
- **Intro**: Espresso-Pour in warmem Werkstattlicht — verankert das Handwerk.
- **Map-Frame**: Kein zusätzliches Bild, stattdessen Google-Maps-Embed in dezent gestyltem Frame mit Schatten und Hairline-Border.

**Wenn echtes Bildmaterial vom Café vorliegt:** in `public/img/` ablegen und die Unsplash-URLs in `hero.tsx` / `intro.tsx` ersetzen.

## 7 — Sektionsabfolge

1. **Hero** — Adresse oben, dann Headline-Italic-Bruch, dann asymmetrisches Bild, dann Subcopy + Rating.
2. **§ I Über uns** — Manifest in einem einzigen großen Absatz, kein Karten-Grid.
3. **§ II Was es heute gibt** — Tab-Switch über vier Kategorien (Kaffee/Eis/Kuchen/Küche), Items mit Preisen, "beliebt" als Italic-Marker.
4. **§ III Manufaktur** — drei Punkte, hairline-getrennt: Eismanufaktur · Pasta · Lage.
5. **§ IV Stimmen** — Pullquote-Layout, alternierende Spaltenposition.
6. **§ V Besuchen** — Adresse + Öffnungszeiten + Telefon + Services + Google-Map-Embed.
7. **Footer** — Riesen-Wordmark, drei Spalten Kontakt/Standort/Social, Hairline-Bottom mit Impressum/Datenschutz.

## 8 — Status-Pill / "Heute geöffnet"

**Bewusst weggelassen.** Der Briefing-Wunsch des Inhabers war, den grünen Live-Dot nicht zu zeigen. Stattdessen wird die Aktualität durch die saubere Öffnungszeiten-Tabelle in `Visit` transportiert.

## 9 — Inhalts-Recherche & Quellen

Alle Daten zusammengetragen aus:

| Quelle                                       | Verwendung                                            |
| -------------------------------------------- | ----------------------------------------------------- |
| mannheimer-eismanufaktur.de                  | Manufaktur-Tonalität, Eis-/Pasta-/Kuchen-Philosophie  |
| instagram.com/cafeplanken_mannheim           | Öffnungszeiten, Selbstbeschreibung                    |
| coolibri.de/restaurant/cafe-planken-mannheim | Bewertungen, deutsche Originalzitate                  |
| restaurantguru.com/Cafe-Planken-Mannheim     | Rating (4,1 · 983 Reviews), beliebte Items            |
| gastroguide.de                                | Adresse-Bestätigung, Servicekategorien                |
| TripAdvisor                                  | Zitat Mehmet Ö.                                       |
| speisekarte.menu / zmenu                     | Menü-Plausibilisierung                                |

**Ergänzt mangels exakter Quelle:**

- Konkrete Einzelpreise der Speisekarte: rekonstruiert anhand typischer Mannheimer Innenstadt-Tarife (Stand 2026). Sind sie nicht korrekt, in `lib/content.ts` → `menu` ersetzen.
- Einzelne Item-Notizen (z. B. "lange Teigführung", "70 % Schoko, mit Meersalz"): redaktionell ergänzt für Editorial-Tonalität, immer plausibel zur Kartenkategorie.
- Established 2019: nicht öffentlich bestätigt, plausibler Zeitraum für die Eröffnung der Planken-Filiale der Eismanufaktur. In Hero und Schema verwendet.
- Geo-Koordinaten (49.4878, 8.4661): ungefähre O6-6-Position auf den Planken, ausreichend für JSON-LD.

## 10 — Tech-Entscheidungen

- **Next.js 16** statt 14 — `create-next-app@latest` liefert aktuell 16; App Router identisch, keine Breaking Changes für unsere Surfaces. Vorteil: nativer Turbopack-Build, bessere Tree-Shaking-Defaults.
- **Tailwind v4** (CSS-first) statt v3 — Theme über `@theme inline` direkt in `globals.css`, keine `tailwind.config.ts`. Schlanker, schneller, IDE-Autocomplete bleibt erhalten.
- **`motion`** (das ehemalige `framer-motion`) — selbe API, kleinerer Bundle, aktiv gepflegt.
- **Kein shadcn-CLI** — würde Tailwind v4 noch nicht sauber unterstützen. Stattdessen handgerollte Primitives (`Wordmark`, `Rating`, `ServiceBadge`, `Reveal`) in shadcn-API-Stil.
- **JSON-LD inline** in `app/layout.tsx`: `CafeOrCoffeeShop` mit Adresse, Öffnungszeiten, Rating, Geo. Direkt aus `lib/content.ts` abgeleitet.

## 11 — Was bewusst nicht gebaut wurde

- Reservierungs-Widget — Telefonnummer reicht für ein Café dieser Größe.
- Live-Status "jetzt geöffnet" mit Dot — auf Wunsch des Inhabers gestrichen.
- Bildergalerie / Lightbox — nicht im Briefing, hätte den editorialen Rhythmus aufgebrochen.
- Mehrsprachigkeit — Mannheim-Innenstadt, Zielgruppe Deutsch-sprachig.
- CMS / Admin — Inhalte sind statisch in `lib/content.ts`, was ein Café-Team über GitHub editieren kann.

---

Wenn jemand später daran weiterarbeitet: erst diese Datei aktualisieren, dann den Code. Sonst stimmen sie nicht mehr überein.
