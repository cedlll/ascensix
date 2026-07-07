# Ascensix Brand & Design System

Derived from the new A6 monogram (metallic-black italic A interlocked with a polished-gold 6) and the owner's directive: **dominant metallic black, sans-serif only**. This document is implementation-ready: every token maps onto the existing names in `src/index.css` so the retheme is mechanical. Places where mechanical inversion breaks are flagged explicitly in §2.6.

---

## 1. Brand read

What the logo projects — the system must deliver each of these on every screen:

- **Ascendant** — the A and 6 share a rising diagonal; upward motion is the brand's one gesture (the AscentLine motif already owns this).
- **Machined** — glossy piano-black with specular edges reads as precision engineering, not decoration. Craft = tolerances, hairlines, exact edges.
- **Discreet luxury** — champagne gold used as an accent metal, never a wash. Private-equity polish: the room is dark, the hardware is expensive, nobody is shouting.
- **Fused judgment + craft** — two glyphs interlocked into one form: advisory (A) and execution (6) as a single object.
- **Confident scale** — wide-tracked geometric caps are the typography of institutions. The system speaks in few, large, exact words.
- **Serious, not somber** — the gold's warmth keeps the black from reading funereal or crypto-nightclub. Warmth arrives through light (highlights, gradients), never through saturated color fields.

---

## 2. Color system (dark-first)

### 2.1 Token remap

The site's components use `bg-paper` as "ground" and `text-ink-*` as "text on ground." The site inverts to dark, so **paper becomes near-black and the ink scale becomes light-on-dark**. Same token names, new values — components retheme without edits except where flagged in §2.6.

```css
@theme {
  /* Metallic-black ground scale */
  --color-paper:   #0B0B0D;   /* ground: near-black, faint cool-neutral */
  --color-paper-2: #121214;   /* raised surface: cards, artifacts, panels */
  --color-line:    #232328;   /* hairline borders & dividers */

  /* Ink scale — now LIGHT on dark (warm, champagne-tinged neutrals
     so the grays harmonize with gold rather than fighting it) */
  --color-ink-950: #F4F2ED;   /* primary text, headlines */
  --color-ink-800: #C6C3BC;   /* secondary / long body copy */
  --color-ink-600: #A19E96;   /* muted text, kickers */
  --color-ink-400: #85827B;   /* faint labels, captions, meta */

  /* Single accent: champagne gold */
  --color-accent:      #D4A84B;   /* primary gold — text, numbers, motif, focus */
  --color-accent-soft: #E9CE93;   /* champagne — hover states, endpoint glints,
                                     gold text on raised/lighter surfaces */
}
```

Supporting values (not `@theme` tokens; used inside recipes below):

| Name | Value | Use |
|---|---|---|
| Surface-3 (elevated) | `#17171A` | top stop of raised-card gradients |
| Deep gold | `#8F6A1F` | dark stop of gold gradients — never as flat fill |
| Gold-on-gold ink | `#131108` | text on gold surfaces (primary CTA) |
| Edge highlight | `rgba(244, 242, 237, 0.06)` | 1px machined top-edge on raised surfaces |
| Gold tint | `rgba(212, 168, 75, 0.35)` | hover borders, imagery warm bias |

Functional colors (rare on a pitch site, defined for completeness): success `#7FB069`, error `#D4726A`, both used only as text/icon on ground, never as fills.

### 2.2 The "metal craft" spec

"Metallic" is achieved through **light behavior**, not texture. Four recipes, used exactly and nowhere else — no glassmorphism, no noise, no chrome textures:

**Ground luminance** — the page is not flat black; it has a faint overhead-light falloff:
```css
body {
  background: radial-gradient(120% 80% at 50% 0%, #131316 0%, #0B0B0D 55%)
              fixed var(--color-paper);
}
```

**Raised surface (machined card)** — vertical luminance + 1px top-edge highlight, the signature "milled edge":
```css
.card-metal {
  background: linear-gradient(180deg, #17171A 0%, #121214 100%);
  border: 1px solid var(--color-line);
  box-shadow: inset 0 1px 0 rgba(244, 242, 237, 0.06);
  border-radius: 0.5rem;
}
.card-metal:hover { border-color: rgba(212, 168, 75, 0.35); } /* restrained sheen */
```

**Machined groove (section divider)** — a hairline plus its catch-light:
```css
.divider-groove {
  border-top: 1px solid var(--color-line);
  box-shadow: 0 1px 0 rgba(244, 242, 237, 0.04);
}
```

**Gold metal gradient** — reserved for "special moments" only: primary CTA fill, the monogram, the AscentLine endpoint glint, and the footer ghost "SIX". Never on body text, never as a large background:
```css
--gradient-gold: linear-gradient(160deg, #E9CE93 0%, #D4A84B 48%, #8F6A1F 100%);
```

### 2.3 Contrast (WCAG AA, computed against actual values)

| Pair | Ratio | Verdict |
|---|---|---|
| Body text `#F4F2ED` on ground `#0B0B0D` | **17.6 : 1** | AAA |
| Secondary `#C6C3BC` on ground | **11.2 : 1** | AAA |
| Muted `#A19E96` on ground | **7.3 : 1** | AAA |
| Faint labels `#85827B` on ground | **5.1 : 1** | AA (4.5+ even at label sizes) |
| Faint labels `#85827B` on raised `#121214` | **4.9 : 1** | AA |
| Gold `#D4A84B` on ground | **10.0 : 1** | AAA — gold is safe for small text |
| Champagne `#E9CE93` on ground | **12.8 : 1** | AAA |
| Ink `#131108` on gold `#D4A84B` | **9.6 : 1** | AAA — black-on-gold CTA passes |
| Ink `#131108` on deep-gold gradient stop `#C79A3C` (worst case) | **~7.0 : 1** | AA — keep CTA text off the darkest gradient third |

### 2.4 Selection & focus

```css
::selection { background: var(--color-accent); color: #131108; }
:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 3px; border-radius: 2px; }
```
(The current `::selection` uses `color: var(--color-paper)` — after remap that's near-black on gold, which is correct; hardcoding `#131108` is cleaner but the mechanical result already passes.)

### 2.5 Accent discipline (unchanged)

ONE accent, used sparingly: section-label numerals, one emphasized hero word, the AscentLine, hover states, and the two CTAs. Gold is more assertive than the old blue — if anything, use it in **fewer** places, not more. The gold *gradient* is rarer still (§2.2).

### 2.6 Where mechanical inversion needs component attention

1. **`CaseStudies.jsx` — the biggest one.** It hardcodes `bg-ink-950 text-paper` plus `border-paper/15`, `bg-paper/[0.03]`, `text-paper/70`, `text-paper/60`, `text-paper/50`. After remap that becomes a huge near-white section — off-brief. The section must differentiate by **elevation instead of inversion**: section wrapper `bg-paper-2` bounded by `.divider-groove` top and bottom, cards get the `.card-metal` recipe (they sit one more step up, on `#17171A→#121214`), and every `text-paper/N` becomes the equivalent `ink` step (`text-paper` → `text-ink-950`, `/70` → `text-ink-800`, `/60` → `text-ink-600`, `/50` → `text-ink-400`). Tags keep `text-accent-soft` (champagne, 12.8:1 on the raised ground). `SectionIntro`'s `dark` prop becomes a no-op — pass nothing, or remove the branch.
2. **`.duotone`** — its `::after` tints with `--color-ink-800`, which is now light gray; photos would wash out. Full replacement recipe in §6.
3. **Buttons** — `bg-ink-950 text-paper` (Nav, Hero, Contact) mechanically inverts to a near-white button, which is a legitimate dark-UI pattern but not the decision here. Respec per §5.2: gold primary at hero + close, hairline ghost in the nav.
4. **`Services.jsx` artifact labels** — `bg-paper px-2` masks the border behind floating labels; after remap the mask is near-black on the near-black ground. Works — but if the artifact card gets the raised recipe, the mask must become the card's surface color, not `bg-paper`.
5. **Footer ghost wordmark** — `text-ink-950/[0.07]` becomes white-at-7%: correct as-is. New content per §4.4.
6. **`AscentLine` hero instance** passes `var(--color-accent-soft)` — now champagne; acceptable, but the respec in §5.5 standardizes on primary gold.
7. **`index.html`** — add `<meta name="theme-color" content="#0B0B0D">`; browser chrome should match the ground.

---

## 3. Typography

### 3.1 The pairing: Clash Display + Switzer (both Fontshare)

- **Clash Display** — headlines and display. A geometric grotesque with sharp, angled terminal cuts and tight apertures. The justification is in the logo: the ASCENSIX wordmark is geometric caps and the monogram's A is a sharp, serifless, angular glyph with a short cut crossbar — Clash Display's skeleton is the same species: compass-drawn rounds, decisive flat cuts. At 60–200px it has real character (the cut terminals do what Fraunces's serifs used to do: signal authorship) without drifting techno or crypto.
- **Switzer** — body and UI. A neutral grotesque workhorse with a tall x-height, built for 15–16px screen text. It stays quiet under Clash the way Archivo stayed quiet under Fraunces, and — same foundry (ITF) — shares proportions with Clash, so caps-label settings of Switzer echo the wordmark cleanly.

One CDN line replaces the Google Fonts line in `index.html`:

```html
<link href="https://api.fontshare.com/v2/css?f[]=clash-display@500,600&f[]=switzer@400,500,600&display=swap" rel="stylesheet">
```

Token updates:

```css
--font-display: "Clash Display", "Avenir Next", "Helvetica Neue", sans-serif;
--font-sans: "Switzer", "Helvetica Neue", Arial, sans-serif;
--tracking-tightest: -0.02em;  /* Clash needs far less negative tracking than Fraunces */
```

Remove `font-feature-settings: "ss01"` from `body` (it was an Archivo setting; Switzer needs nothing).

### 3.2 Scale

| Role | Face / weight | Size | Tracking | Leading |
|---|---|---|---|---|
| Display (hero) | Clash Display 500 | `clamp(2.5rem, 6.5vw, 4.75rem)` | `-0.02em` | 1.04 |
| H2 (section titles) | Clash Display 500 | `clamp(1.875rem, 4vw, 3rem)` | `-0.015em` | 1.08 |
| H3 (card titles) | Clash Display 500 | 1.375–1.5rem | `-0.01em` | 1.25 |
| Big stat numerals | Clash Display 600 | 2.25–3rem | `-0.02em` | 1 |
| Body | Switzer 400 | 1rem (16px) | 0 | 1.6 |
| Small / captions | Switzer 400 | 0.875rem | 0 | 1.55 |
| Label (§3.3) | Switzer 500 | 0.6875rem | `+0.22em` | 1 |
| Buttons | Switzer 500 | 0.875rem | `+0.01em` | 1 |

Rules: display sizes track tight (never below `-0.02em`); all-caps always tracks wide (`0.18–0.24em`) to echo the wordmark; body keeps the ~65ch measure; weight 600 is the ceiling — no bold-700 anywhere.

### 3.3 The editorial label device

`label-mono` (system mono) retires with the serif. Its replacement is **wide-tracked Switzer caps** — the wordmark's own voice at small size, which now does the "documentation rigor" job the mono did. Redefine the existing utility in place so no component edits are needed (optionally rename to `.label-caps` later):

```css
.label-mono {
  @apply font-sans text-[0.6875rem] font-medium tracking-[0.22em] uppercase;
  font-feature-settings: "tnum" 1;  /* index numerals ("01", "S.01") stay tabular */
}
```

Numbered section labels keep their structure: numeral in `text-accent`, label in `text-ink-600`.

---

## 4. Logo usage

Assets (recreated placeholders — replace with official vectors):
- `src/assets/logo-monogram.svg` — A6 interlock, chrome-black A + gold 6
- `src/assets/logo-lockup.svg` — monogram + ASCENSIX wordmark, **dark-ground variant**
- `public/favicon.svg` — simplified monogram on a dark rounded tile

### 4.1 Monogram vs wordmark

- **Monogram (A6)**: nav, favicon, avatars, any space under ~140px wide.
- **Lockup**: footer brand line, documents, anywhere the full name must read.
- Never set "Ascensix" in running-text next to the monogram as a pseudo-lockup; use the lockup asset or the plain word.

### 4.2 Color adaptation — stated rule

The official logo is **black A + gold 6 on white**. This site is near-black, so **the black letterforms flip to light**: the A renders in polished graphite (`#C9C8CE → #55555E` gradient) and ASCEN in near-white `#F4F2ED`. **The gold never changes** — the 6 and SIX are gold on every ground. `logo-lockup.svg` ships as this dark-ground variant; `logo-monogram.svg` carries a brighter top stop (`#85858F`) so its edges catch light on both grounds.

### 4.3 Minimums and clearspace

- Monogram: minimum 20px height (favicon variant handles 16px).
- Lockup: minimum 120px width; below that, monogram only.
- Clearspace: half the monogram's height on all sides, both marks.
- Never: recolor the 6, outline the marks, place on gold fields, or rotate.

### 4.4 Nav lockup and footer ghost — exact replacements

- **Nav** (`Nav.jsx:45`): `Ascend<span class="text-accent">.</span>` → monogram SVG at 24px + `ASCENSIX` in Switzer 500, 0.875rem, `tracking-[0.22em]` uppercase, with `ASCEN` in `text-ink-950` and `SIX` in `text-accent`. The `label-mono` descriptor next to it is dropped (§7).
- **Footer ghost closer** (`Footer.jsx:24`): `Ascend.` → `ASCENSIX` — Clash Display 500 caps, `tracking-[0.06em]` (the ghost runs near-solid; wide tracking at 13rem would overflow), sized `text-[19vw] md:text-[11rem]`, with `ASCEN` in `text-ink-950/[0.08]` and `SIX` in `text-accent/25`. The gold ghost of "SIX" is the page's final glint — keep the entrance animation as-is.
- **Footer brand line** (`Footer.jsx:31`): `Ascend.` → small lockup treatment: `ASCENSIX` caps, `tracking-[0.22em]`, SIX in gold.

### 4.5 Favicon

`public/favicon.svg` (overwritten): 64-viewBox rounded tile `#0B0B0D` (rx 14), simplified A6 — platinum A at 7-unit stroke, gold-gradient 6 — verified legible at 16px. Keep SVG-only; if ICO fallback is ever needed, export at 32 and 16.

---

## 5. Component specs

### 5.1 Nav

Transparent over the hero; once scrolled: `background: rgba(11,11,13,0.85)` + `backdrop-blur-sm` (subtle utility blur, not glassmorphism) + 1px bottom hairline `--color-line`. Links `text-ink-600` → hover `text-ink-950`. Lockup per §4.4.

### 5.2 Buttons — the decision: **gold-filled primary, twice only**

- **Primary (hero CTA + closing CTA only)** — filled gold gradient with near-black text. On a black site this is the maximal-contrast premium move, and because CTA cadence is already restrained to hero + close, gold-filled here *is* the sparing use of the accent:
  ```css
  .btn-primary {
    background: linear-gradient(160deg, #E9CE93 0%, #D4A84B 55%, #C79A3C 100%);
    color: #131108;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.35); /* metal top-light */
    border-radius: 9999px;
    /* hover: filter: brightness(1.06); translateY(-1px); — within the 1–2% motion rule */
  }
  ```
- **Nav CTA — ghost, not gold.** A third gold moment would break the cadence. `border: 1px solid var(--color-line); color: var(--color-ink-950);` hover: `border-color: rgba(212,168,75,0.5); color: var(--color-accent-soft)`.
- **Text links** (e.g. "or write to …"): `text-ink-800`, underline `decoration-line`, hover `text-accent` / `decoration-accent` — mechanical, no change.

### 5.3 Cards

All raised content (case-study cards, engagement artifacts, plan timeline, portraits' frames) uses the `.card-metal` recipe (§2.2). Hover: border warms to gold-tint; no lifts beyond 1–2px, no glows.

### 5.4 Section labels & dividers

Labels per §3.3 (numeral gold, text `ink-600`). Section boundaries that need weight use `.divider-groove`; everything else stays a plain 1px `--color-line`.

### 5.5 AscentLine — the motif, respec'd

Keep the geometry and draw-on animation exactly. Recolor: **stroke = solid `var(--color-accent)` on every ground** (the default prop already does this after remap; remove the `accent-soft` override at `Hero.jsx:134`). The endpoint dot becomes the system's one permitted glow — a gold glint closing the rise:

```jsx
<motion.circle cx="1180" cy="10" r="4" fill="var(--color-accent-soft)"
  style={{ filter: "drop-shadow(0 0 6px rgba(212,168,75,0.55))" }} ... />
```

Optional (hero only): gradient stroke via an SVG `<linearGradient>` from `#8F6A1F` (start) to `#E9CE93` (end) — the line literally brightens as it climbs. Solid gold is the default; do not use the gradient in more than one instance. The `Process.jsx:112` accent diamonds go `fill="var(--color-accent)"` — mechanical.

### 5.6 Motion

Unchanged and non-negotiable: one easing `[0.22, 1, 0.36, 1]`, 0.4–0.7s durations, fade-up on scroll, hover ≤ 1–2%, `reducedMotion="user"`. The retheme adds zero new motion.

---

## 6. Imagery direction

Photography moves from navy duotone to **high-contrast monochrome seated into the black, with a warm highlight bias**: shadows fall into the page's near-black so photos have no hard "screen" edges, while highlights carry a faint champagne cast — the same warm light that hits the gold. No color photography ever; the gold tint lives in the light, not the subject. Exact replacement for the `.duotone` utility (structure unchanged — components keep the class):

```css
.duotone > img {
  display: block;
  filter: grayscale(100%) contrast(1.12) brightness(0.82);
}
.duotone::before {          /* seat the photo into the black ground */
  content: ""; position: absolute; inset: 0; z-index: 1; pointer-events: none;
  background: linear-gradient(180deg, rgba(11,11,13,0) 45%, rgba(11,11,13,0.45) 100%);
}
.duotone::after {           /* warm highlight bias — gold arrives as light */
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background: #D4A84B; mix-blend-mode: soft-light; opacity: 0.35;
}
```

Portrait frames pick up `.card-metal` borders. The `PLACEHOLDER — replace with owned photography` markers stay.

---

## 7. Voice & naming

**The name is "Ascensix", standalone — drop "Talent & Consulting."** The coined name already contains the story ("ascend" + "six") and the descriptor drags the old brand's staffing-agency register into a luxury-advisory identity. Category clarity moves to a plain descriptor line instead: **"Design & AI Advisory — Manila · worldwide."** Copy stays terse; the brand never explains its own name.

Every location where the old name appears — all must change:

| Location | Current | Becomes |
|---|---|---|
| `index.html` `<title>` | "Ascend Talent & Consulting — Design Studio & AI Advisory" | "Ascensix — Design & AI Advisory" |
| `index.html` meta description | "Ascend is a Manila-based…" | "Ascensix is a Manila-based…" (rest unchanged) |
| `Nav.jsx:45` brand | `Ascend.` | ASCENSIX lockup (§4.4) |
| `Nav.jsx:6` + `Footer.jsx:4` link label | "Why Ascend" | "Why Ascensix" |
| `Nav.jsx:47` descriptor | (mono descriptor) | drop, or "Design & AI Advisory" |
| `Footer.jsx:24` ghost | `Ascend.` | `ASCENSIX` (§4.4) |
| `Footer.jsx:31–35` brand + descriptor | `Ascend.` / "Talent & Consulting — Manila · worldwide" | ASCENSIX / "Design & AI Advisory — Manila · worldwide" |
| `Footer.jsx:54` © line | "© {year} Ascend Talent & Consulting" | "© {year} Ascensix" |
| `Contact.jsx:54,57` email | `hello@ascendtalent.co` | **`hello@ascensix.com`** (mailto + visible text; register domain before launch) |
| `CaseStudies.jsx:102` disclosure | "…not client relationships of Ascend." | "…not client relationships of Ascensix." |
| `Team.jsx:40` kicker | "…Ascend keeps it…" | "…Ascensix keeps it…" |
| `Positioning.jsx:34,38` aria-label + section label | "Why Ascend" | "Why Ascensix" |
| `docs/DESIGN-RATIONALE.md` | multiple | update on next revision pass |

Anonymized case studies, honesty disclosures, and the "three observations either way" promise are brand voice — carry them over verbatim (with only the name swapped).
