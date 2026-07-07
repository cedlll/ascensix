import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

const PILLARS = [
  {
    value: "1",
    unit: "standard",
    title: "Caliber of work, not size of client",
    body: "World-class thinking applied the same way for a growing SME as for an enterprise.",
  },
  {
    value: "5",
    unit: "+ disciplines",
    title: "Everything under one engagement",
    body: "Marketing, software, design, staffing — coordinated as one team, not stitched together from separate vendors.",
  },
  {
    value: "0",
    unit: "hype",
    title: "Applied AI, not AI theater",
    body: "AI is embedded in how each discipline is delivered. It shows up in the output, not the pitch.",
  },
  {
    value: "1:1",
    unit: "senior",
    title: "Senior people on the work",
    body: "Direct access to the people doing it — no handoff layers, no juniors learning on your account.",
  },
];

export default function Positioning() {
  return (
    <section id="why" aria-label="Why Ascensix" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionIntro
          no="01"
          label="Why Ascensix"
          title="One consultancy. Every discipline. AI in the work itself."
          kicker="We bring world-class thinking to each discipline and apply AI where it changes the result — coordinated under one engagement, whatever your stage."
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
