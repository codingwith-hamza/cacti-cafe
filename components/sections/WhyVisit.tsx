import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { reasons } from "@/lib/site";

export function WhyVisit() {
  return (
    <section id="visit" className="bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-40">
        <Reveal>
          <h2 className="text-display fluid-h2 max-w-[16ch] text-ink">
            Three good reasons to make the trip.
          </h2>
        </Reveal>

        <Stagger className="mt-16 sm:mt-24">
          {reasons.map((r) => (
            <StaggerItem key={r.no}>
              <div className="grid grid-cols-1 items-start gap-4 border-t border-line py-10 md:grid-cols-12 md:gap-8">
                <span className="text-display text-3xl text-teal md:col-span-2 md:text-4xl">
                  {r.no}
                </span>
                <h3 className="text-display text-2xl leading-tight text-ink md:col-span-5 md:text-3xl">
                  {r.title}
                </h3>
                <p className="max-w-[42ch] text-lg leading-relaxed text-ink-soft md:col-span-5">
                  {r.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
