import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "../lib/motion";

// PLACEHOLDER LOGO WALL — the names and marks below are invented stand-ins,
// NOT real companies. Replace each with an actual client/partner logo only
// where you have permission; presenting a real logo here implies a client
// relationship, so keep it honest.
const LOGOS = [
  {
    name: "Northlane",
    mark: (
      <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
    ),
  },
  {
    name: "Meridian",
    mark: (
      <>
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M2 12 H22" stroke="currentColor" strokeWidth="2" />
      </>
    ),
  },
  {
    name: "Axiom",
    mark: <path d="M12 2 L22 20 H2 Z M12 9 L17 18 H7 Z" fillRule="evenodd" />,
  },
  {
    name: "Vanta Group",
    mark: <path d="M2 5 L12 20 L22 5 L18 5 L12 13 L6 5 Z" />,
  },
  {
    name: "Kestrel",
    mark: <path d="M2 18 L12 4 L12 12 L22 6 L14 20 L12 15 Z" />,
  },
  {
    name: "Arclight",
    mark: (
      <>
        <path d="M3 20 A12 12 0 0 1 21 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="20" r="2" />
      </>
    ),
  },
];

export default function TrustBand() {
  return (
    <section
      aria-label="Trusted by"
      className="divider-groove border-b border-line py-14"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="label-mono mb-10 text-center text-ink-400"
        >
          Trusted by teams across industries and stages of growth
        </motion.p>

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-16"
        >
          {LOGOS.map((l) => (
            <motion.li
              key={l.name}
              variants={fadeUp}
              className="flex items-center gap-2.5 text-ink-400 grayscale transition-colors duration-300 hover:text-ink-950"
              title={l.name}
            >
              <svg
                viewBox="0 0 24 24"
                width="22"
                height="22"
                fill="currentColor"
                aria-hidden="true"
                className="shrink-0"
              >
                {l.mark}
              </svg>
              <span className="text-base font-semibold tracking-[0.14em] uppercase">
                {l.name}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
