import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

// Combined proof: each engagement told as a visual — one image, a one-line
// story, and the numbers we were held to. Anonymized under NDA.
// PLACEHOLDER images — replace with owned or cleared photography before launch.
const CASES = [
  {
    client: "Consumer retail brand",
    tag: "Social media marketing",
    title: "A 12-month content push that outgrew its own reach",
    body: "Facebook and Instagram presence lifted across visibility, engagement, and traffic over roughly twelve months, with activity spiking around July–August and again in late October. Link clicks outpaced raw reach growth on both platforms — a sign of strong creative and CTA performance, not just wider distribution.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    alt: "Laptop screen showing a marketing analytics dashboard with traffic and engagement graphs",
    stats: [
      { value: "27.0M", label: "Facebook views (12 mo)" },
      { value: "+604%", label: "Facebook link clicks" },
      { value: "+220%", label: "Facebook page visits" },
      { value: "923.4K", label: "Instagram reach" },
      { value: "+8.4K%", label: "Instagram link clicks" },
      { value: "+278%", label: "Instagram profile visits" },
    ],
  },
  {
    client: "B2B SaaS company",
    tag: "Software development",
    title: "A product rebuilt and shipped in a single quarter",
    body: "Scoping to production in twelve weeks, with AI-assisted development compressing the build without cutting corners.",
    image:
      "https://images.unsplash.com/photo-1754039984985-ef607d80113a?q=80&w=1600&auto=format&fit=crop",
    alt: "Close-up of application source code on a monitor in a dev workspace",
    stats: [
      { value: "12 wks", label: "scope to launch" },
      { value: "+38%", label: "faster delivery" },
      { value: "0", label: "critical defects at release" },
    ],
  },
  {
    client: "Consumer mobile app",
    tag: "UX design",
    title: "Onboarding redesigned to stop the drop-off",
    body: "Seven coded onboarding variants tested against real behavior before engineering committed to one.",
    image:
      "https://images.unsplash.com/photo-1602576666092-bf6447a729fc?q=80&w=1600&auto=format&fit=crop",
    alt: "Laptop screen showing a UI component and icon kit used for onboarding screens",
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
                    <p className="label-mono text-ink-400">{c.client}</p>
                    <p className="label-mono mt-1 text-accent-soft">{c.tag}</p>
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
