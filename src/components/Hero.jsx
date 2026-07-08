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
      className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28"
    >
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
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

        {/* Quiet climb, closing the hero: the brand's one motif spans the
            width of the content column in the whitespace below the CTAs,
            low enough in contrast to read as texture, not a second focal
            point (docs/BRAND-SYSTEM.md §5.5). Absolutely positioned so it
            never affects document flow or the sections below. */}
        <AscentLine
          delay={0.9}
          className="pointer-events-none absolute inset-x-0 top-[calc(100%+1rem)] h-14 w-full opacity-[0.55] md:top-[calc(100%+1.5rem)] md:h-20"
        />
      </div>
    </section>
  );
}
