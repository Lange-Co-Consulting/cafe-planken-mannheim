import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { Menu } from "@/components/sections/menu";
import { Highlights } from "@/components/sections/highlights";
import { Gallery } from "@/components/sections/gallery";
import { Reviews } from "@/components/sections/reviews";
import { Visit } from "@/components/sections/visit";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Intro />
        <Menu />
        <Highlights />
        <Gallery />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
