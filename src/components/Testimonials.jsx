import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

// PLACEHOLDER — sample testimonials written to show the format. Replace with
// real, attributable quotes (with permission) before this goes to a client.
const QUOTES = [
  {
    quote:
      "They ran our paid and organic channels as one coordinated push instead of three disconnected vendors. That's the difference between reporting and results.",
    name: "CEO",
    org: "Consumer retail brand",
  },
  {
    quote:
      "Every recommendation came with a working test and the numbers to defend it. We stopped debating which creative worked and started shipping what did.",
    name: "Head of Marketing",
    org: "B2B SaaS",
  },
  {
    quote:
      "Pipeline reporting finally tied to closed revenue, not vanity metrics. Reps trusted the leads coming in for the first time in years.",
    name: "Head of Sales",
    org: "Mid-market services firm",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" aria-label="Testimonials" className="py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionIntro
          no="04"
          label="In their words"
          title="What partners say."
        />

        <motion.ul
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {QUOTES.map((q) => (
            <motion.li key={q.org} variants={fadeUp}>
              <figure className="card-metal flex h-full flex-col p-8">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl leading-none text-accent/70"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-4 flex-1 text-[0.9375rem] leading-relaxed text-ink-800">
                  {q.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-medium text-ink-950">{q.name}</p>
                  <p className="label-mono mt-1 text-ink-400">{q.org}</p>
                </figcaption>
              </figure>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
