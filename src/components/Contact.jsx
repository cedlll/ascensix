import { motion } from "framer-motion";
import { EASE, fadeUp, stagger, viewport } from "../lib/motion";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="py-28 md:py-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.p variants={fadeUp} className="label-mono text-ink-600">
            <span className="text-accent">06</span>
            <span aria-hidden="true" className="mx-3 select-none">
              /
            </span>
            Start here
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-6 font-display text-4xl leading-[1.05] font-medium tracking-tightest text-balance text-ink-950 md:text-6xl"
          >
            A working session,
            <br />
            not a sales call.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-600"
          >
            Thirty minutes with a principal. Bring your actual challenge — leave
            with three concrete observations, either way.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.a
              href="https://cal.com/ascensix/working-session"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="btn-primary px-8 py-4 text-sm font-medium"
            >
              Book a 30-minute session
            </motion.a>
            <a
              href="mailto:hello@ascensix.com?subject=Working%20session"
              className="px-2 py-4 text-sm font-medium text-ink-800 underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
            >
              or write to hello@ascensix.com
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="label-mono mt-12 text-ink-400">
            No obligation · no pitch deck · replies within one business day
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
