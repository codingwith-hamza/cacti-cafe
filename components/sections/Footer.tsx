import { CactiMark } from "@/components/ui/Logo";
import { Reveal } from "@/components/ui/Reveal";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-sand">
      <div className="mx-auto max-w-[1400px] px-5 py-20 sm:px-8 sm:py-28">
        {/* Invitation */}
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
            <p className="text-display fluid-h3 max-w-[14ch] text-ink">
              Come sit in the shade.
            </p>
            <a
              href={site.location.directions}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-teal-deep px-7 py-3.5 text-[0.95rem] font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal active:scale-[0.98]"
            >
              Get directions
            </a>
          </div>
        </Reveal>

        {/* Oversized wordmark */}
        <div className="mt-20 flex items-end gap-5 border-t border-line pt-10">
          <CactiMark className="h-14 w-auto shrink-0 text-teal sm:h-20" />
          <span
            className="text-display leading-none tracking-tight text-ink"
            style={{ fontSize: "clamp(3.5rem, 15vw, 12rem)" }}
          >
            Cacti
          </span>
          <span
            dir="rtl"
            lang="ar"
            className="mb-2 hidden text-2xl text-ink-mute sm:inline"
          >
            {site.nameAr}
          </span>
        </div>

        {/* Meta row */}
        <div className="mt-12 flex flex-col gap-8 text-sm text-ink-soft sm:flex-row sm:items-start sm:justify-between">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="transition-colors hover:text-teal"
              >
                {n.label}
              </a>
            ))}
            <a
              href={site.website}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-teal"
            >
              cacti-sa.com
            </a>
          </nav>

          <div className="text-ink-mute sm:text-right">
            <p>
              {site.location.address}, {site.location.city}
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} {site.name}. Riyadh, Saudi Arabia.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
