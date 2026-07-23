import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";

const shots = [
  {
    src: "/images/interior-cactus.jpg",
    alt: "A double-height corner of the café at night, a single tall cactus on a pine table under warm linear wall lights.",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/seating-orange.jpg",
    alt: "A lounge of tan and cognac leather armchairs around low wooden tables, framed by a glass facade onto the street.",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/logo-pebble.jpg",
    alt: "The teal Cacti cactus mark set into a wall of white river stones beside warm pine boards.",
    aspect: "aspect-[3/2]",
  },
  {
    src: "/images/cactus-garden.jpg",
    alt: "The indoor cactus garden in pale gravel, saguaro and barrel cacti clustered against white plaster.",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/coffee-counter.jpg",
    alt: "The river-stone coffee bar with its teal La Marzocco and rows of branded cups.",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/pebble-bench.jpg",
    alt: "Pine bench seating running along the tall river-stone wall, soft cushions and small succulents.",
    aspect: "aspect-[5/6]",
  },
];

export function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-36">
      <Reveal>
        <h2 className="text-display fluid-h2 text-ink">A look around.</h2>
      </Reveal>

      <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
        {shots.map((s, i) => (
          <Reveal
            key={s.src}
            as="figure"
            delay={(i % 3) * 0.06}
            y={40}
            className="group mb-5 block break-inside-avoid overflow-hidden rounded-media"
          >
            <Media
              src={s.src}
              alt={s.alt}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className={`${s.aspect} w-full`}
              mediaClassName="transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
