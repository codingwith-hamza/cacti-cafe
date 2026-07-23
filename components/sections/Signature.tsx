import { Media } from "@/components/ui/Media";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Kicker } from "@/components/ui/Kicker";
import { drinks } from "@/lib/site";

export function Signature() {
  return (
    <section id="coffee" className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Sticky editorial image */}
          <div className="lg:sticky lg:top-24 lg:h-[78vh]">
            <Reveal className="h-full" y={40}>
              <Media
                src="/images/coffee-counter.jpg"
                alt="The teal La Marzocco espresso machine on a river-stone bar, warm pine ceiling above and neatly stacked branded cups."
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="h-[60vh] w-full rounded-media lg:h-full"
              />
            </Reveal>
          </div>

          {/* Drink index */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <Kicker>The coffee</Kicker>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-display fluid-h2 mt-6 text-ink">
                A short list, poured with care.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[42ch] text-lg leading-relaxed text-ink-soft">
                We keep the menu small on purpose. Every drink earns its place,
                pulled on a teal La Marzocco from beans we roast for balance.
              </p>
            </Reveal>

            <Stagger className="mt-12">
              {drinks.map((d) => (
                <StaggerItem key={d.no}>
                  <div className="group flex items-baseline gap-6 border-t border-line py-6 transition-colors last:border-b hover:border-teal/40">
                    <span className="text-sm text-teal tabular-nums">{d.no}</span>
                    <div className="flex-1">
                      <h3 className="text-display fluid-h3 text-ink transition-transform duration-300 group-hover:translate-x-1">
                        {d.name}
                      </h3>
                      <p className="mt-2 max-w-[40ch] text-ink-soft">
                        {d.note}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
