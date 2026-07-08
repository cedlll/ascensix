import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EASE } from "../lib/motion";
import logoHorizontal from "../assets/ascensix-horizontal-nav.png";

const LINKS = [
  { href: "#why", label: "Why Ascensix" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
      className={`transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-paper/85 backdrop-blur-sm"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-6 md:px-10"
      >
        <a href="#top" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <img
            src={logoHorizontal}
            alt="Ascensix"
            width="777"
            height="112"
            className="h-6 w-auto lg:h-7"
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-950"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-line px-5 py-2 text-sm font-medium text-ink-950 transition-colors duration-300 hover:border-accent/50 hover:text-accent-soft"
          >
            Book an intro call
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`h-px w-5 bg-ink-950 transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-5 bg-ink-950 transition-transform duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line px-6 pt-2 pb-6 lg:hidden">
          <ul className="flex flex-col">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3 text-base font-medium text-ink-800"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 inline-block rounded-full border border-line px-5 py-2.5 text-sm font-medium text-ink-950"
          >
            Book an intro call
          </a>
        </div>
      )}
    </motion.header>
  );
}
