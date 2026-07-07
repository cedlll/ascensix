import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

// Combined proof: each engagement told as a visual — one image, a one-line
// story, and the numbers we were held to. Anonymized under NDA.
// PLACEHOLDER images — replace with owned or cleared photography before launch.
const CASES = [
  {
    tag: "Performance marketing",
    title: "Ad spend rebuilt around what actually converts",
    body: "A full-funnel restructure and a weekly creative-testing loop turned flat spend into a compounding channel.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    alt: "Marketer reviewing campaign performance dashboards",
    stats: [
      { value: "3.2×", label: "return on ad spend" },
      { value: "-34%", label: "cost per acquisition" },
      { value: "6 wks", label: "to first lift" },
    ],
  },
  {
    tag: "Software development",
    title: "A product rebuilt and shipped in a single quarter",
    body: "Scoping to production in twelve weeks, with AI-assisted development compressing the build without cutting corners.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
    alt: "Product team collaborating during a build",
    stats: [
      { value: "12 wks", label: "scope to launch" },
      { value: "+38%", label: "faster delivery" },
      { value: "0", label: "critical defects at release" },
    ],
  },
  {
    tag: "UX design",
    title: "Onboarding redesigned to stop the drop-off",
    body: "Seven coded onboarding variants tested against real behavior before engineering committed to one.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    alt: "Person completing a sign-up on a phone",
    stats: [
      { value: "+31%", label: "completion at launch" },
      { value: "7 in 9", label: "variants tested in days" },
      { value: "-41%", label: "support tickets" },
    ],
  },
];

export default function CaseStudies() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      className="divider-groove border-b border-line bg-paper-2 py-24 md:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionIntro
          no="03"
          label="Selected work"
          title="Who we've helped — and the results."
          kicker="Anonymized under NDA. The pictures are placeholders; the numbers are the ones we were measured on."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-16 space-y-6"
        >
          {CASES.map((c, i) => (
            <motion.article
              key={c.title}
              variants={fadeUp}
              className="card-metal overflow-hidden"
            >
              <div className="grid lg:grid-cols-12">
                {/* Image */}
                <div
                  className={`duotone aspect-[16/10] lg:aspect-auto lg:col-span-5 ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  {/* PLACEHOLDER — replace with owned/cleared photography */}
                  <img
                    src={c.image}
                    alt={c.alt}
                    width="1600"
                    height="1000"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center gap-6 p-8 lg:col-span-7 md:p-12">
                  <div>
                    <p className="label-mono text-accent-soft">{c.tag}</p>
                    <h3 className="mt-4 font-display text-2xl leading-snug font-medium tracking-tight text-ink-950 md:text-3xl">
                      {c.title}
                    </h3>
                    <p className="mt-4 max-w-xl leading-relaxed text-ink-800">
                      {c.body}
                    </p>
                  </div>
                  <dl className="grid grid-cols-3 gap-6 border-t border-line pt-6">
                    {c.stats.map((s) => (
                      <div key={s.label}>
                        <dd className="font-display text-3xl font-medium tracking-tightest text-ink-950 md:text-4xl">
                          {s.value}
                        </dd>
                        <dt className="mt-2 text-xs leading-snug text-ink-600">
                          {s.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.7 }}
          className="mt-10 max-w-2xl text-sm leading-relaxed text-ink-400"
        >
          Representative engagements, anonymized under NDA. Imagery is
          placeholder; specifics follow under a mutual agreement.
        </motion.p>
      </div>
    </section>
  );
}
