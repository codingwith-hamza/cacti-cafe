import { Nav } from "@/components/Nav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Signature } from "@/components/sections/Signature";
import { Menu } from "@/components/sections/Menu";
import { Interior } from "@/components/sections/Interior";
import { WhyVisit } from "@/components/sections/WhyVisit";
import { Gallery } from "@/components/sections/Gallery";
import { Location } from "@/components/sections/Location";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Signature />
        <Menu />
        <Interior />
        <WhyVisit />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </>
  );
}
