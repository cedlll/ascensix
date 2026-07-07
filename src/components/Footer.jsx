const LINKS = [
  { href: "#why", label: "Why" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-ink-600 transition-colors hover:text-ink-950"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-sm text-ink-400">
          © {new Date().getFullYear()} Ascensix
        </p>
      </div>
    </footer>
  );
}
