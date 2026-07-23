// Cacti mark — a geometric saguaro built from a few rounded bars, rebuilt to
// echo the café's real cup logo. Single simple brand glyph, uses currentColor
// so it inverts cleanly on the dark section.

export function CactiMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 48"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {/* central trunk */}
      <rect x="16.5" y="4" width="7" height="42" rx="3.5" />
      {/* left arm */}
      <rect x="6" y="16" width="6" height="20" rx="3" />
      {/* left elbow */}
      <rect x="6" y="16" width="12" height="6" rx="3" />
      {/* right arm */}
      <rect x="28" y="10" width="6" height="14" rx="3" />
      {/* right elbow */}
      <rect x="22" y="18" width="12" height="6" rx="3" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <CactiMark className="h-6 w-auto text-teal" />
      <span className="text-display text-[1.35rem] leading-none tracking-tight">
        Cacti
      </span>
    </span>
  );
}
