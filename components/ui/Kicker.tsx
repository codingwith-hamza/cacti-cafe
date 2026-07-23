// A restrained section label: short teal rule + normal-case word.
// Deliberately NOT the uppercase wide-tracking "eyebrow" that templated pages
// stamp above every heading — used on only a few sections.

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-3 text-sm text-teal">
      <span className="h-px w-8 bg-teal/45" />
      {children}
    </span>
  );
}
