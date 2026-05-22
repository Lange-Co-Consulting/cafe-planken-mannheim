import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { intro } from "@/lib/content";

export function Intro() {
  return (
    <section className="relative" aria-label="Über uns">
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-36">
        <div className="grid grid-cols-12 gap-x-5 gap-y-8 md:gap-x-10 md:gap-y-10">
          <Reveal className="col-span-12 md:col-span-3">
            <SectionEyebrow number="§ I">Über uns</SectionEyebrow>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-8 md:col-start-4" delay={0.05}>
            <p className="font-display font-display-soft text-[clamp(1.25rem,3.4vw,2.1rem)] leading-[1.35] tracking-[-0.01em] text-ink">
              {intro.body}
            </p>
          </Reveal>

          <Reveal
            className="col-span-12 md:col-span-7 md:col-start-4 md:mt-8"
            delay={0.15}
          >
            <div className="relative aspect-[27/20] w-full overflow-hidden bg-bg-soft">
              <Image
                src="/img/cake-mosaik.jpg"
                alt="Eierlikör-Mosaiktorte mit dunklen Schokoladenstücken auf weißem Teller, hausgemacht im Café Planken."
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal
            className="col-span-12 md:col-span-3 md:col-start-2"
            delay={0.1}
          >
            <div className="space-y-2 border-t border-rule pt-4 text-sm md:border-t-0 md:pt-0">
              <p className="eyebrow text-ink-3">Manufaktur · Eis · Pasta</p>
              <p className="text-ink-2">
                In Kooperation mit der Mannheimer Eismanufaktur, Mohrenköpfle
                und der Rösterei Agáta.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="rule mx-5 md:mx-10" />
    </section>
  );
}
