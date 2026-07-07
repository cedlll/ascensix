import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

const PILLARS = [
  {
    value: "10",
    unit: "yrs",
    title: "Trained where mistakes cost millions",
    body: "Enterprise platforms, regulated fintech, and high-stakes finance.",
  },
  {
    value: "100",
    unit: "%",
    title: "Advice arrives as a working prototype",
    body: "If we can't demo it running, we don't recommend it.",
  },
  {
    value: "GMT",
    unit: "+8",
    title: "Manila is the advantage, not the discount",
    body: "Live US-afternoon overlap. Senior people, roughly half US rates.",
  },
  {
    value: "3",
    unit: "max",
    title: "Concurrent engagements, capped",
    body: "A principal in every session. No handoff layers.",
  },
];

export default function Positioning() {
  return (
    <section id="why" aria-label="Why Ascensix" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionIntro
          no="01"
          label="Why Ascensix"
          title="An AI-powered business consultancy, on purpose."
          kicker="Business decisions and AI decisions are now the same decision. We make both in one room."
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2"
        >
          {PILLARS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp}
              className="group bg-paper p-8 transition-colors duration-300 hover:bg-paper-2 md:p-10"
            >
              <p className="font-display text-6xl leading-none font-medium tracking-tightest text-ink-950 md:text-7xl">
                {p.value}
                <span className="ml-1 text-2xl text-accent transition-colors duration-300 md:text-3xl">
                  {p.unit}
                </span>
              </p>
              <h3 className="mt-6 font-display text-lg leading-snug font-medium tracking-tight text-ink-950 md:text-xl">
                {p.title}
              </h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-600">
                {p.body}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
