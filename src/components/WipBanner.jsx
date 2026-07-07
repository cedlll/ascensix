export default function WipBanner() {
  return (
    <div
      role="status"
      className="border-b border-accent/30 bg-ink-950 px-4 py-2 text-center text-xs leading-snug text-white/90"
    >
      <span className="font-medium text-accent">Work in progress —</span>{" "}
      copy, imagery, and figures shown are placeholders and don&rsquo;t
      reflect real clients, results, or team members.
    </div>
  );
}
