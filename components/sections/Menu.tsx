import { Media } from "@/components/ui/Media";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";

const sweets = [
  {
    name: "Pistachio basbousa",
    note: "Semolina cake, rosewater syrup, crushed pistachio.",
  },
  {
    name: "Kunafa cheesecake",
    note: "A Levantine classic meets New York.",
  },
  {
    name: "Date & tahini cookie",
    note: "Soft, dark, and not too sweet.",
  },
  {
    name: "Butter croissant",
    note: "Laminated in-house, baked through the night.",
  },
  {
    name: "Saffron & cardamom cake",
    note: "The flavour of a Saudi kitchen.",
  },
  {
    name: "Cold cheesecake jar",
    note: "Layered, spoonable, made to travel.",
  },
];

export function Menu() {
  return (
    <section id="sweets" className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36">
      <div className="max-w-3xl">
        <Reveal>
          <h2 className="text-display fluid-h2 text-ink">
            Sweet things, made in-house.
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-soft">
            Pastry that leans on the region as much as the classics. Best eaten
            slowly, with a second cup on the way.
          </p>
        </Reveal>
      </div>

      {/* Editorial image row — varied heights, not a card grid */}
      <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
        <Reveal className="lg:mt-10" y={44}>
          <Media
            src="/images/coffee-iced-1.jpg"
            alt="Two layered iced lattes in clear Cacti cups on a wooden serving board, espresso settling over cold milk."
            sizes="(max-width: 1024px) 50vw, 24vw"
            className="aspect-[4/5] rounded-media"
          />
        </Reveal>
        <Reveal delay={0.08} y={44}>
          <Media
            src="/images/cups-duo.jpg"
            alt="A teal and a cream Cacti Café takeaway cup side by side, each printed with the geometric cactus mark."
            sizes="(max-width: 1024px) 50vw, 24vw"
            className="aspect-[4/5] rounded-media"
          />
        </Reveal>
        <Reveal delay={0.16} className="lg:mt-10" y={44}>
          <Media
            src="/images/coffee-iced-2.jpg"
            alt="A close view of an iced Spanish latte, condensed milk swirling up through the glass."
            sizes="(max-width: 1024px) 50vw, 24vw"
            className="aspect-[4/5] rounded-media"
          />
        </Reveal>
        <Reveal delay={0.24} y={44}>
          <Media
            src="/images/cup-cream.jpg"
            alt="A single cream Cacti Café espresso cup with the teal cactus logo, resting on a pale counter."
            sizes="(max-width: 1024px) 50vw, 24vw"
            className="aspect-[4/5] rounded-media"
          />
        </Reveal>
      </div>

      {/* Typographic sweets list */}
      <Stagger className="mt-20 grid grid-cols-1 gap-x-16 gap-y-0 md:grid-cols-2">
        {sweets.map((s) => (
          <StaggerItem key={s.name}>
            <div className="flex items-baseline justify-between gap-6 border-b border-line py-5">
              <span className="text-display text-xl text-ink sm:text-2xl">
                {s.name}
              </span>
              <span className="max-w-[24ch] text-right text-sm text-ink-mute">
                {s.note}
              </span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
