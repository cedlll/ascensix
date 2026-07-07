import { motion } from "framer-motion";
import { EASE } from "../lib/motion";

// Stepped ascent line — the brand motif. Draws itself left to right in
// solid gold on every ground, closing on a champagne endpoint glint —
// the system's one permitted glow (docs/BRAND-SYSTEM.md §5.5).
export default function AscentLine({
  className = "",
  delay = 0,
  color = "var(--color-accent)",
}) {
  return (
    <svg
      viewBox="0 0 1200 160"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        d="M0 150 H150 V118 H320 V88 H500 V60 H700 V34 H920 V10 H1180"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay }}
      />
      <motion.circle
        cx="1180"
        cy="10"
        r="4"
        fill="var(--color-accent-soft)"
        style={{ filter: "drop-shadow(0 0 6px rgba(212, 168, 75, 0.55))" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE, delay: delay + 1.2 }}
      />
    </svg>
  );
}
