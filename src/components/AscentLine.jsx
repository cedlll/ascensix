import { motion } from "framer-motion";
import { useId } from "react";
import { EASE } from "../lib/motion";

// Ascending line — the brand's one motif. Draws itself from low-left to
// high-right in gold (docs/BRAND-SYSTEM.md §5.5). Geometry and weight are
// tunable via props so the same idea can read as a quiet accent or a full
// hero backdrop; non-scaling-stroke keeps the stroke crisp at any size.
export default function AscentLine({
  className = "",
  delay = 0,
  color = "var(--color-accent)",
  gradient = false,
  strokeWidth = 1.5,
  viewBox = "0 0 1200 160",
  d = "M0 150 H150 V118 H320 V88 H500 V60 H700 V34 H920 V10 H1180",
}) {
  const gradientId = useId();
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      {gradient && (
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8F6A1F" />
            <stop offset="100%" stopColor="#E9CE93" />
          </linearGradient>
        </defs>
      )}
      <motion.path
        d={d}
        stroke={gradient ? `url(#${gradientId})` : color}
        strokeWidth={strokeWidth}
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: EASE, delay }}
      />
    </svg>
  );
}
