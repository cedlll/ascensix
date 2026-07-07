import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

const SERVICES = [
  {
    no: "S.01",
    title: "Design systems",
    outcome: "A component system your engineers actually adopt.",
    deliverables: [
      "Token architecture and naming standard",
      "Coded component library with Figma parity",
      "Contribution and governance model",
      "Adoption metrics and rollout plan",
    ],
  },
  {
    no: "S.02",
    title: "AI-assisted prototyping",
    outcome: "Working software in days, not decks in weeks.",
    deliverables: [
      "Coded prototypes, not clickthroughs",
      "Model and tooling feasibility memo",
      "Cost and latency estimates per variant",
      "Handoff-ready repository",
    ],
  },
  {
    no: "S.03",
    title: "UX research & consulting",
    outcome: "Evidence strong enough to end the internal debate.",
    deliverables: [
      "Study design and participant recruiting",
      "Moderated sessions with recordings",
      "Synthesis mapped to product metrics",
      "Prioritized decision memo",
    ],
  },
  {
    no: "S.04",
    title: "AI training & workshops",
    outcome: "Your team shipping with AI tools in weeks, policy included.",
    deliverables: [
      "Hands-on curriculum on your real backlog",
      "Tool selection and usage policy",
      "Before-and-after skill assessment",
      "30-day follow-up support",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionIntro
              no="02"
              label="Services"
              title="Four things, done to an enterprise standard."
              kicker="Every engagement ends in an artifact you can hold, run, or measure."
            />
          </div>

          {/* Engagement artifact: annotated coded-prototype fragment,
              built in-system. Decorative. */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            aria-hidden="true"
            className="relative hidden lg:col-span-5 lg:block"
          >
            <div className="card-metal">
              <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="label-mono ml-3 text-ink-400">
                  S.02 / coded-prototype
                </span>
              </div>
              <div className="space-y-4 p-6">
                <div className="h-3 w-2/5 rounded-sm bg-ink-950/15" />
                <div className="space-y-2">
                  <div className="h-2 w-full rounded-sm bg-ink-950/[0.07]" />
                  <div className="h-2 w-4/5 rounded-sm bg-ink-950/[0.07]" />
                </div>
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="h-20 rounded-md border border-line bg-paper-2" />
                  <div className="h-20 rounded-md border border-line bg-paper-2" />
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <div className="h-8 w-28 rounded-full bg-ink-950" />
                  <div className="h-2 w-16 rounded-sm bg-ink-950/[0.07]" />
                </div>
              </div>
            </div>
            {/* blueprint-style annotation tags — masks match the raised
                card's surface, not the ground (docs/BRAND-SYSTEM.md §2.6.4) */}
            <p className="label-mono absolute -top-2.5 right-6 bg-paper px-2 text-accent">
              A.1 — tokens
            </p>
            <p className="label-mono absolute -bottom-2.5 left-6 bg-paper px-2 text-accent">
              A.2 — variant
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 border-t border-line"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.no}
              variants={fadeUp}
              className="group grid gap-6 border-b border-line py-10 transition-colors duration-300 hover:bg-paper-2 md:grid-cols-12 md:gap-8 md:px-4 md:py-12"
            >
              <p className="label-mono pt-1.5 text-ink-400 transition-colors duration-300 group-hover:text-accent md:col-span-1">
                {s.no}
              </p>
              <div className="md:col-span-6">
                <h3 className="font-display text-2xl font-medium tracking-tight text-ink-950 md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-600">
                  {s.outcome}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="label-mono text-ink-400">What you get</p>
                <ul className="mt-3 space-y-2">
                  {s.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-800"
                    >
                      <span aria-hidden="true" className="mt-0.5 text-accent">
                        —
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
