import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

// PLACEHOLDER — sample testimonials written to show the format. Replace with
// real, attributable quotes (with permission) before this goes to a client.
const QUOTES = [
  {
    quote:
      "They embedded a designer who understood our compliance constraints on day one. No ramp, no hand-holding — the enterprise pedigree is real.",
    name: "VP Product",
    org: "Series B fintech, US",
  },
  {
    quote:
      "Every AI recommendation came with a working prototype and the numbers to defend it. That ended a debate we'd been stuck in for a quarter.",
    name: "Head of Design",
    org: "Wealth platform, AU",
  },
  {
    quote:
      "We hired two specialists through them and brought them in to advise the same engagement. One standard across both — that's rare.",
    name: "Director of Engineering",
    org: "Enterprise SaaS, US",
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
          kicker="A representative sample of the response to our work."
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-400"
        >
          Sample quotes shown to illustrate format. Attributed testimonials are
          added with each client&rsquo;s written permission.
        </motion.p>
      </div>
    </section>
  );
}
