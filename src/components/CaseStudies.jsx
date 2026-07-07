import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

// Combined proof: each engagement told as a visual — one image, a one-line
// story, and the numbers we were held to. Anonymized under NDA.
// PLACEHOLDER images — replace with owned or cleared photography before launch.
const CASES = [
  {
    tag: "Enterprise software",
    title: "One coded design system across eleven product teams",
    body: "Eleven pattern libraries consolidated into a single coded system the teams now run themselves.",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
    alt: "Open-plan enterprise office with teams collaborating",
    stats: [
      { value: "11", label: "teams on one system" },
      { value: "38%", label: "faster UI delivery" },
      { value: "62%", label: "fewer design defects" },
    ],
  },
  {
    tag: "Wealth platform",
    title: "Member self-service that moved retirement journeys online",
    body: "Member research and flow redesign moved core journeys online, with a paper trail risk teams accept.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop",
    alt: "Analyst reviewing financial data on screen",
    stats: [
      { value: "+24%", label: "digital task completion" },
      { value: "-41%", label: "call volume on those flows" },
      { value: "10 wks", label: "research to shipped" },
    ],
  },
  {
    tag: "Fintech",
    title: "KYC onboarding without the drop-off",
    body: "Seven coded onboarding variants tested against real upload behavior before engineering committed to one.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1600&auto=format&fit=crop",
    alt: "Person completing a secure sign-up on a phone",
    stats: [
      { value: "+31%", label: "completion at launch" },
      { value: "7 in 9", label: "variants tested in days" },
      { value: "0", label: "compliance findings" },
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
