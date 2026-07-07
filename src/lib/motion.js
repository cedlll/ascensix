// Shared motion vocabulary. One easing curve, one viewport contract,
// a small set of variants — so every section moves the same way.
// Reduced-motion preferences are honored globally via
// <MotionConfig reducedMotion="user"> in App.jsx.

export const EASE = [0.22, 1, 0.36, 1];

export const viewport = { once: true, margin: "-10% 0px" };

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
};

// Masked line reveal for display headlines (pair with overflow-hidden parent).
export const lineReveal = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.7, ease: EASE },
  },
};

export const stagger = (staggerChildren = 0.09, delayChildren = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
});
