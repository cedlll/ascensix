import { motion, useReducedMotion } from "framer-motion";
import { EASE, fade, fadeUp, lineReveal, stagger } from "../lib/motion";

const HEADLINE = [
  <>World-class business</>,
  <>consulting, powered by AI.</>,
  <>
    For companies at{" "}
    <em className="font-display font-medium text-accent italic">every stage</em>.
  </>,
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  // Reduced motion: masked slides become plain fades.
  const revealVariant = reduceMotion ? fade : lineReveal;

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] flex-col overflow-hidden"
    >
      {/* Copy block — centered in the viewport. */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pt-36 pb-10 md:px-10 md:pt-32">
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
                  <motion.span variants={revealVariant} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="mailto:ascensix@gmail.com?subject=Intro%20call"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="btn-primary px-7 py-3.5 text-sm font-medium"
            >
              Email us
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
    </section>
  );
}
