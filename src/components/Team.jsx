import { motion } from "framer-motion";
import SectionIntro from "./SectionIntro";
import { fadeUp, stagger, viewport } from "../lib/motion";

// Six co-founders — the "six" in Ascensix. PLACEHOLDER names, bios, and
// photos; replace with the real founding team before launch.
const PRINCIPALS = [
  {
    name: "Cedric Lee",
    role: "Strategy",
    bio: "Sets engagement scope and keeps the work tied to business outcomes.",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Marielle Santos",
    role: "Marketing",
    bio: "Brand and performance marketing for companies from first traction to scale.",
    photo:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Paolo Reyes",
    role: "AI",
    bio: "Engineer turned advisor. Builds AI into how each discipline delivers.",
    photo:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "David Okonkwo",
    role: "Software",
    bio: "Ships production software and leads technical scoping and build.",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Hana Kim",
    role: "Delivery",
    bio: "Keeps every engagement on scope and on date, across disciplines.",
    photo:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Miguel Torres",
    role: "Design",
    bio: "Product and UX design, from research through shipped interface.",
    photo:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Team() {
  return (
    <section id="team" aria-label="Team" className="bg-paper-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionIntro
          no="05"
          label="Founders"
          title="Six founders. One standard."
          kicker="Principals only, no handoffs — six founders who do the work themselves and hold it to one standard."
        />

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRINCIPALS.map((p) => (
            <motion.li key={p.name} variants={fadeUp}>
              <article className="card-metal flex h-full items-center gap-4 p-5">
                <div className="duotone h-14 w-14 shrink-0 overflow-hidden rounded-full border border-line">
                  {/* PLACEHOLDER — replace with owned photography before launch */}
                  <img
                    src={p.photo}
                    alt={`Portrait of ${p.name}`}
                    width="400"
                    height="400"
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base font-medium tracking-tight text-ink-950">
                    {p.name}
                    <span className="label-mono ml-2 align-middle text-accent">
                      {p.role}
                    </span>
                  </h3>
                  <p className="mt-1 text-[0.8125rem] leading-relaxed text-ink-600">
                    {p.bio}
                  </p>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
