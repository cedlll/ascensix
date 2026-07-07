# Ascend Marketing Site — Design Rationale

A short defense of the key decisions, written so anyone on the Ascend side can explain them in a pitch.

## Typography

Two faces, no more. **Fraunces** (a high-contrast editorial serif, used at its display optical size) carries every headline; **Archivo** (a neutral grotesque) carries body copy and UI. The pairing is deliberate: the serif says *judgment and authorship* — the visual language of publishing houses and professional-services firms — while the grotesque keeps the operational copy plain and unornamented. Large sizes run tight tracking (-0.045em) and near-solid leading; body copy runs generous leading on a max-width measure (~65 characters) so long claims stay readable. Small editorial index labels ("01 / Why Ascend", "S.01", "P.1") are set in the system mono stack — a documentation cue that signals engineering rigor without loading a third font.

## Palette

Warm paper (#faf7f0), warm near-black ink (#181310), and a single copper accent (#a84b17). Nothing else. The warm ground reads as print — proposals, contracts, published thinking — rather than SaaS. Copper appears only where attention should land: the index numbers, one italic word in the hero, hover states, and the CTA hover. One inverted ink-on-dark section (the case studies) breaks the rhythm exactly once, giving the proof section physical weight in the scroll. Deliberately absent: gradients, glass effects, and a second accent — the fastest tells of a template.

## Section sequencing vs. the research brief

The brief's core pattern — claim → proof → mechanism → outcomes → conversion — is kept, with the boutique adaptations from section 6 applied:

- **Compressed three-part hero claim** (quality / differentiator / delivery model) with the credibility strip one scroll-beat below, honestly labeled "Experience spanning" rather than posed as client logos.
- **Depth over volume:** three metric-led engagement cards using the 3-stat scoreboard anatomy, not a fifteen-card carousel. Each card carries an anonymization note so the numbers stay defensible under questioning.
- **Judgment over process:** the "why us" pillars are falsifiable commitments (prototype with every recommendation, three-client cap, named timezone overlap) rather than adjectives, and the founder story is framed as mechanism — *why this team can hold this standard* — per the brief.
- **Calendar-first conversion:** the closing CTA sells a 30-minute working session with a concrete promise ("three observations either way"), with a plain email fallback. No forms, no popups, no urgency theater.
- CTA cadence is restrained to hero + close, matching a boutique's single-audience funnel instead of Pearl's per-section prompts.

## Motion philosophy

One easing curve ([0.22, 1, 0.36, 1]), durations 0.4–0.7s, one shared variants module. The hero gets a single orchestrated entrance (masked line-by-line headline reveal); everything after is a subtle fade-up on first scroll into view, staggered only where it clarifies reading order. Hover states move 1–2% at most. Reduced-motion preferences are honored globally (`MotionConfig reducedMotion="user"`, plus a CSS guard on smooth scrolling). The argument to a client: motion here demonstrates the same discipline being sold — hierarchy first, decoration never.

## Revision: density pass (v2)

The first build carried its argument in prose; this revision moves the weight onto type, numerals, and one ownable device. Body copy was cut roughly 40% — every section kicker and card body now runs one sentence, and no claim was lost: the specifics moved into oversized figures (the positioning pillars now lead with 10 yrs / 100% / GMT+8 / 3 max in display type), lists, and the duration/artifact columns. Two visual devices were added, both earned by the brand rather than decorative: the **ascent line** — a stepped rising line in copper that draws itself across the hero, a literal reading of the name — and an oversized ghost **"Ascend."** wordmark closing the footer, an editorial device that ends the page with identity instead of more words. Process phases gained large ghost numerals so the four-step arc is scannable at a glance. The argument to a client: a pitch site should be readable at scroll speed; anything that requires slowing down to read had to justify itself or become a number.

## Revision: institutional palette + imagery pass (v3)

The warm paper/copper scheme read as *editorial*; the buyer we sell to reads *institutional*. This pass rethemed every token and gave the page visual proof, grounded in the ui-ux-pro-max design database rather than taste.

**Palette.** Three candidates came out of the database queries ("consulting professional services trust", "enterprise B2B credibility"):

1. *Authority navy + trust gold* (Legal Services: `#1E3A8A` / `#B45309`) — courtroom authority, but the gold accent drifts back toward the copper this revision retires, and navy-plus-gold reads law firm, not design studio.
2. *Professional navy + blue CTA* (B2B Service: ink `#0F172A`, accent `#0369A1`, ground `#F8FAFC`) — the database's direct answer to "enterprise B2B credibility": a monochrome navy-slate ink scale with one restrained blue accent.
3. *Trust navy + premium gold* (Banking/Traditional Finance: `#0F172A` / `#A16207`) — premium, but two-metal luxury cues sell wealth management, not judgment.

Candidate 2 won: it is the exact-match result for the audience we name in the brief, it preserves the one-accent discipline (blue is the only chroma on the page), and its deep-navy ink gives the dark case-studies section a ground that derives from the same scale instead of sitting apart from it. Final tokens: ground `#F8FAFC` / `#EDF1F6`, line `#D9E1EA`, ink `#0F172A → #334155 → #475569 → #5D6D86`, accent `#0369A1`, dark-surface accent `#6FB1D8`. Every text/ground pair was checked against WCAG AA: body and muted inks run 4.6–17:1 on both light surfaces; accent text is 5.7:1 on the ground; the soft accent is 7.6:1 on the dark section. The paper-grain overlay was removed, not ported — "print grain" was the warm palette's story; on a cool institutional ground it reads as screen noise, and the crispness *is* the new story.

**Imagery.** The page was typography-only; enterprise buyers also weigh visual proof and human presence. The rule: one photographic treatment site-wide — full desaturation plus an ink-navy tint — so photography obeys the same single-accent discipline as everything else, and no smiling-stock color ever enters the system. One atmospheric architectural image now sits under the hero's ascent line (the line literally climbs the towers, in the dark-surface accent), and the principals carry consistently cropped duotone portraits. All photographs are licensed-free Unsplash placeholders, marked `PLACEHOLDER — replace with owned photography before launch` in code; the pitch position is that a firm selling owned judgment should ship owned photography. The remaining visuals are deliberately *not* photos: two engagement artifacts built in code — an annotated coded-prototype fragment beside the services list, and the four-phase plan drawn as a week-by-week timeline with an accent diamond at every shipped artifact — because a consultancy's most honest imagery is its own working documents.

## Rebrand: Ascensix

The company is now **Ascensix** — the coined name carries the story ("ascend" + "six"), so the staffing-register descriptor "Talent & Consulting" is retired in favor of a plain category line, "Design & AI Advisory" (docs/BRAND-SYSTEM.md §7). The visual system follows the new A6 monogram: dominant metallic black, one gold accent, sans-serif only.

**Why metallic black + gold reads enterprise, not nightclub.** The system's premise (BRAND-SYSTEM.md §1–2) is that "metallic" is light behavior, not texture: a faint overhead-light falloff on the ground, a 1px machined top-edge highlight on raised surfaces, grooved hairline dividers — tolerances, not decoration. Warmth arrives only as light (champagne-tinged neutrals, one gold gradient reserved for the two CTAs and the footer glint), never as a saturated field. That restraint is the same argument the old paper-and-copper and navy systems made — one accent, used sparingly — executed at private-equity register: the room is dark, the hardware is expensive, nobody is shouting. Every text/ground pair was computed against WCAG (§2.3); gold itself clears 10:1 on the ground, so the accent is never a legibility tax.

**The structural change:** the case-studies section previously broke rhythm by *inversion* (one ink-dark band on a light page). On a dark-first site that trick is unavailable, so proof now differentiates by **elevation** — the section steps up to the raised surface between two machined grooves, and each engagement card sits one step higher on the milled-edge card recipe (§2.6.1). The page's one rhythm break survives; it just moves toward the light instead of away from it. Typography swaps Fraunces/Archivo for Clash Display/Switzer (§3): the display face's cut terminals now do the authorship work the serifs used to, and the retired mono labels are replaced by wide-tracked Switzer caps — the wordmark's own voice at documentation size. Photography keeps its single-treatment discipline, re-tuned to warm-highlight monochrome seated into the black (§6). Motion is untouched: the rebrand adds zero new movement, which is itself the pitch.

## How the design supports pitch credibility

Every choice answers the buyer's silent question — *"are these people rigorous?"* — before the copy does. The numbered sections and artifact-per-phase process table read like an engagement plan, not a brochure. Claims are specific and checkable (durations, caps, percentages), which is what enterprise procurement expects. And the honesty devices — anonymized cases explicitly labeled, background brands explicitly framed as team experience — protect the pitch from the one question that kills agencies in the room: "can we call these clients?"
