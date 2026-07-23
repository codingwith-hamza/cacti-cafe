import { Reveal } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { site } from "@/lib/site";

export function Location() {
  const { location } = site;
  return (
    <section id="location" className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Details */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <Kicker>Find us</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display fluid-h2 mt-6 text-ink">
                Qurtubah, Riyadh.
              </h2>
            </Reveal>

            <div className="mt-12 space-y-10">
              <Reveal delay={0.08}>
                <div>
                  <p className="text-sm text-ink-mute">Address</p>
                  <p className="mt-2 text-xl leading-relaxed text-ink">
                    {location.address}
                    <br />
                    {location.city}, {location.country}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="grid grid-cols-1 gap-8 border-t border-line pt-10 sm:grid-cols-2">
                  <div>
                    <p className="text-sm text-ink-mute">Hours</p>
                    <p className="mt-2 text-xl text-ink">
                      {location.hoursPrimary}
                    </p>
                    <p className="mt-1 text-ink-soft">
                      {location.hoursPrimaryDetail}
                    </p>
                    <p className="mt-3 text-sm text-ink-mute">
                      {location.hoursSecondary}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-ink-mute">Online</p>
                    <a
                      href={site.website}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 block text-xl text-ink underline decoration-line underline-offset-4 transition-colors hover:text-teal hover:decoration-teal"
                    >
                      cacti-sa.com
                    </a>
                    <p className="mt-1 text-ink-soft">{site.tagline}</p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.16}>
                <a
                  href={location.directions}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-teal-deep px-7 py-3.5 text-[0.95rem] font-medium text-paper transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal active:scale-[0.98]"
                >
                  Get directions
                </a>
              </Reveal>
            </div>
          </div>

          {/* Map */}
          <Reveal delay={0.1} y={40}>
            <div className="overflow-hidden rounded-media border border-line">
              <iframe
                title="Map to Cacti Café, Qurtubah, Riyadh"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  location.mapsQuery
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full grayscale-[0.25] lg:h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
