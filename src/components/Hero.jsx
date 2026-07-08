import { motion } from "framer-motion";
import { EASE, fadeUp, lineReveal, stagger } from "../lib/motion";
import AscentLine from "./AscentLine";

const HEADLINE = [
  <>World-class business</>,
  <>consulting, powered by AI.</>,
  <>
    For companies at{" "}
    <em className="font-display font-medium text-accent italic">every stage</em>.
  </>,
];

export default function Hero() {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden pt-40 pb-44 md:pt-48 md:pb-72"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="label-mono text-ink-600">
            One consultancy for the disciplines you'd otherwise hire separately
          </motion.p>

          <div className="mt-8">
            <h1 className="font-display text-[2.75rem] leading-[1.02] font-medium tracking-tightest text-ink-950 sm:text-6xl lg:text-7xl">
              {HEADLINE.map((line, i) => (
                <span key={i} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                  <motion.span variants={lineReveal} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="btn-primary px-7 py-3.5 text-sm font-medium"
            >
              Book an intro call
            </motion.a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-800 transition-colors hover:text-accent"
            >
              See who we've helped
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* The ascent, at full scale: the brand's one motif as an actual hero
          visual rather than a margin accent — a large gold line climbing
          through a dedicated band below the copy, full-bleed to the
          viewport edge, closing on a soft glint. Confined to its own fixed
          band beneath the content (never overlapping the headline/CTAs)
          and absolutely positioned so it never affects layout/flow. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40 md:h-64"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 1.9 }}
          className="absolute top-0 right-0 h-32 w-32 -translate-y-1/3 translate-x-1/4 rounded-full bg-accent/[0.18] blur-[70px] md:h-48 md:w-48 md:blur-[100px]"
        />
        <AscentLine
          gradient
          delay={0.9}
          strokeWidth={2}
          className="absolute inset-0 h-full w-full opacity-[0.6]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: EASE, delay: 2.3 }}
          style={{ boxShadow: "0 0 20px 5px rgba(212, 168, 75, 0.55)" }}
          className="absolute top-1 right-1 h-2.5 w-2.5 rounded-full bg-accent-soft"
        />
      </div>
    </section>
  );
}
