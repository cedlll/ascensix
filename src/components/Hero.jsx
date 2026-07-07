import { motion } from "framer-motion";
import AscentLine from "./AscentLine";
import { EASE, fadeUp, lineReveal, stagger } from "../lib/motion";
import heroImage from "../assets/pawel-chu-ULh0i2txBCY-unsplash.jpg";

const HEADLINE = [
  <>World-class business</>,
  <>consulting, powered by AI.</>,
  <>
    For companies at{" "}
    <em className="font-display font-medium text-accent italic">every stage</em>.
  </>,
];

// Results shown as visuals, seated over the hero image — proof at a glance.
const PROOF = [
  { value: "+38%", label: "faster delivery" },
  { value: "3.2×", label: "pipeline growth" },
  { value: "-41%", label: "cost to serve" },
];

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="pt-40 md:pt-48">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.div
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="label-mono text-ink-600">
            One consultancy for the disciplines you'd otherwise hire separately
          </motion.p>

          <div className="mt-8">
            <h1 className="font-display text-[2.75rem] leading-[1.02] font-medium tracking-tightest text-ink-950 sm:text-6xl lg:text-7xl">
              {HEADLINE.map((line, i) => (
                <span key={i} className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
                  <motion.span variants={lineReveal} className="block">
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="btn-primary px-7 py-3.5 text-sm font-medium"
            >
              Book an intro call
            </motion.a>
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-ink-800 transition-colors hover:text-accent"
            >
              See who we've helped
              <span
                aria-hidden="true"
                className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Image-led stage: one quiet architectural photograph carrying the
            ascent-line motif, with results seated over it as visual proof. */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.55 }}
          className="duotone relative mt-12 rounded-lg border border-line md:mt-16"
        >
          <img
            src={heroImage}
            alt="Empty glass-walled conference room with a long table and chairs"
            width="2000"
            height="1500"
            className="aspect-[16/11] w-full object-cover sm:aspect-[2/1]"
          />
          <div className="absolute inset-x-5 bottom-5 z-[2] md:inset-x-8 md:bottom-8">
            <AscentLine className="h-14 w-full md:h-20" delay={0.8} />
          </div>

          {/* Result chips — visual proof, top of the frame */}
          <motion.ul
            variants={stagger(0.1, 1)}
            initial="hidden"
            animate="visible"
            className="absolute inset-x-5 top-5 z-[2] flex flex-wrap gap-2.5 md:inset-x-8 md:top-8"
          >
            {PROOF.map((p) => (
              <motion.li
                key={p.label}
                variants={fadeUp}
                className="rounded-full border border-white/25 bg-ink-950/45 px-4 py-2 backdrop-blur-md"
              >
                <span className="font-display text-base font-medium tracking-tight text-white">
                  {p.value}
                </span>
                <span className="label-mono ml-2 text-white/70">{p.label}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.figure>
      </div>
    </section>
  );
}
