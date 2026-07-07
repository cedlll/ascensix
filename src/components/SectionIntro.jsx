import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";

/**
 * Numbered editorial section header. One palette everywhere — sections
 * differentiate by elevation, not inversion (docs/BRAND-SYSTEM.md §2.6).
 */
export default function SectionIntro({ no, label, title, kicker }) {
  return (
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="max-w-3xl"
    >
      <motion.p
        variants={fadeUp}
        className="label-mono flex items-baseline gap-3 text-ink-600"
      >
        <span className="text-accent">{no}</span>
        <span aria-hidden="true" className="select-none">
          /
        </span>
        {label}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tightest text-balance text-ink-950 md:text-5xl"
      >
        {title}
      </motion.h2>
      {kicker && (
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-600"
        >
          {kicker}
        </motion.p>
      )}
    </motion.div>
  );
}
