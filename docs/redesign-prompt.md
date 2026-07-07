# Retheme + Imagery Pass — Ascend Marketing Site

*Improved prompt produced by the prompt-engineering agent (from the original: "Use the necessary skills in ui-ux-pro-max-skill to further improve the site. I don't like the current colors. I want colors that can give credibility and professionalism. I also want more photos and visuals similar to https://www.pearltalent.com/"). Executed by a second agent.*

## Objective

Two changes to the site at `/Users/cedriclee/Projects/ascend`, grounded in ui-ux-pro-max research:

1. **Replace the warm paper/copper palette** with one that signals institutional credibility and professionalism to US enterprise buyers.
2. **Add photography and non-photo visuals** — the site is currently typography-only; it needs human presence and visual richness, executed to a consulting-firm standard (not a stock-photo standard).

Everything else — copy, section order, motion, layout structure — stays.

## Context

Single-page pitch site for Ascend Talent and Consulting (Manila-based design studio + AI advisory, selling to US enterprises). React 19 + Vite + Tailwind v4 + Framer Motion. **All design tokens live in the `@theme` block of `src/index.css`** (no tailwind.config). Components in `src/components/`: Nav, Hero, Positioning, Services, CaseStudies (the one dark section, `bg-ink-950 text-paper`), Process, Team, Contact, Footer, plus AscentLine (a stepped rising line in the accent color that draws itself across the hero — the brand's one ownable motif).

**Read before touching anything:** `docs/DESIGN-RATIONALE.md`, `docs/research-brief.md`, `src/index.css`, and skim `src/components/*.jsx`. Standing constraints from those docs that survive this redesign: two typefaces only (Fraunces display + Archivo text — do not change); one accent color used sparingly (index numbers, one italic hero word, hovers, CTA); restrained motion (one easing curve, honored reduced-motion); no purple-gradient AI clichés, no glassmorphism, no urgency theater; anonymized case studies; credibility strip framed as "Experience spanning," never as client logos. A recent pass cut body copy ~40% — **do not add or rewrite copy.**

## Step 1: Research via ui-ux-pro-max

The skill is at `/Users/cedriclee/.claude/plugins/cache/ui-ux-pro-max-skill/ui-ux-pro-max/2.6.2/`. Read its `CLAUDE.md` first. Run at minimum:

```bash
SKILL=/Users/cedriclee/.claude/plugins/cache/ui-ux-pro-max-skill/ui-ux-pro-max/2.6.2
python3 $SKILL/src/ui-ux-pro-max/scripts/search.py "consulting professional services trust" --domain color
python3 $SKILL/src/ui-ux-pro-max/scripts/search.py "enterprise B2B credibility" --domain color
python3 $SKILL/src/ui-ux-pro-max/scripts/search.py "premium agency portfolio" --domain style
python3 $SKILL/src/ui-ux-pro-max/scripts/search.py "consulting services landing page" --domain landing
python3 $SKILL/src/ui-ux-pro-max/scripts/search.py "imagery photography trust" --domain ux
```

Add follow-up queries as results suggest. From the color results, assemble **2–3 candidate palettes**, state a one-line case for each, pick one, and record why. Likely territory is deep navy / slate / forest-institutional, but let the database results drive the choice — do not pick from taste alone.

## Step 2: Retheme

Rewrite the `@theme` tokens in `src/index.css` as a complete, coherent set: ground + secondary surface (`--color-paper`, `--color-paper-2`), border (`--color-line`), full ink scale (`--color-ink-950/800/600/400`), one accent (`--color-accent`, `--color-accent-soft`). Keep the existing token *names* so component classes keep working — this is a retheme, not a rename.

Non-negotiables:

- **WCAG AA contrast** for all text/background pairs, including accent-on-ground and the dark section's soft-accent labels.
- **One accent, used exactly where copper is used now.** The AscentLine motif and ghost "Ascend." wordmark must read correctly in the new accent.
- **The dark CaseStudies section must be redesigned as part of the system**, not left as an orphaned warm-black block — its ground, text, and accent treatment must derive from the new palette.
- **Re-evaluate the `.grain` paper-texture overlay** in `src/index.css`: keep, adjust, or remove it based on whether "print grain" still fits the new palette's story. Decide; don't leave it half-migrated.
- Update `::selection` and `:focus-visible` colors to match.

## Step 3: Imagery

Do **not** copy pearltalent.com's images or replicate its aesthetic wholesale. Translate the underlying need — human presence and visual proof — into Ascend's own system:

- **Sourcing:** licensed-free photography (Unsplash source URLs acceptable for this prototype). Add a code comment at each image: `{/* PLACEHOLDER — replace with owned photography before launch */}`.
- **Art direction:** one consistent treatment across all photos (e.g., duotone or a desaturation + palette-tinted overlay) so imagery obeys the one-accent discipline instead of injecting random color.
- **Placement plan:** Hero — one restrained atmospheric or workspace image integrated with (not fighting) the AscentLine; Team — placeholder portraits with consistent crop/treatment, clearly marked for replacement; CaseStudies — one contextual visual per card is optional and must not crowd the 3-stat scoreboard; Process — prefer a **non-photo** artifact here.
- **Non-photo visuals:** at least two abstract engagement artifacts (e.g., a stylized annotated-prototype fragment, a phase-plan diagram) built in code/SVG in the new palette — these fit a judgment-selling consultancy better than smiling-people stock.
- **Hygiene:** every image gets meaningful `alt` text, explicit `width`/`height` or an aspect-ratio class (no layout shift), and `loading="lazy"` below the fold.

## Constraints (do not touch)

- Copy content and length; section order; nav structure.
- Motion system: easing `[0.22, 1, 0.36, 1]`, existing variants, `MotionConfig reducedMotion="user"`.
- Fonts and type scale.
- No new dependencies unless strictly necessary.

## Verification

- `npm run build` passes clean.
- Run the dev server and visually inspect every section (use preview tools if available): check the new palette in light rendering, the dark section, accent contrast, AscentLine visibility, image loading, and no layout shift.
- Spot-check AA contrast ratios for body text, muted text (`ink-600`/`ink-400` equivalents), and accent text on both grounds.

## Deliverables

1. Updated `src/index.css` tokens and any component-level color/imagery changes.
2. New image/SVG assets or source URLs wired into components.
3. A short new section in `docs/DESIGN-RATIONALE.md` (match its existing pitch-defensible voice): the palette chosen, the 2–3 candidates considered and why this one won (citing the ui-ux-pro-max results), and the imagery strategy including the placeholder-photography caveat.
