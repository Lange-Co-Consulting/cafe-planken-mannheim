import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function Gallery() {
  return (
    <section
      className="relative bg-bg-soft"
      aria-label="Aus dem Tresen"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-12 items-end gap-x-5 gap-y-5 md:gap-x-10 md:gap-y-8">
          <Reveal className="col-span-12 md:col-span-5">
            <SectionEyebrow>Aus dem Tresen</SectionEyebrow>
            <h2 className="mt-5 font-display display-md text-ink md:mt-6">
              Was diese Woche unter <em className="italic">Glas</em> steht.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.05}>
            <p className="max-w-[34ch] text-sm leading-relaxed text-ink-2">
              Direkt aus unserer Konditorei. Die Karte rotiert wöchentlich —
              folgt uns auf Instagram für das aktuelle Tagesangebot.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-5 gap-y-6 md:mt-20 md:gap-x-10">
          <Reveal
            className="col-span-12 md:col-span-7 md:row-span-2"
            delay={0.05}
          >
            <figure className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg">
                <Image
                  src="/img/cake-kirsch.jpg"
                  alt="Stück hausgemachter Kirsch-Quark-Kuchen auf weißem Teller, Café Planken Mannheim."
                  fill
                  sizes="(min-width: 768px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-xs text-ink-3">
                <span className="eyebrow">Kirsch-Quark · Tageskuchen</span>
                <span className="font-mono tabular-nums">№ 01</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.1}>
            <figure className="relative">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-bg md:aspect-[5/6]">
                <Image
                  src="/img/storefront.jpg"
                  alt="Detail des Eingangs zum Café Planken auf den Planken, goldene Wortmarke."
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover object-[60%_30%]"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between text-xs text-ink-3">
                <span className="eyebrow">Eingang · Planken</span>
                <span className="font-mono tabular-nums">№ 02</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.15}>
            <a
              href="https://www.instagram.com/cafeplanken_mannheim/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex w-full flex-col gap-5 overflow-hidden border border-rule bg-paper p-5 transition-colors hover:border-rule-strong md:aspect-[5/4] md:flex-row md:items-center md:justify-between md:p-6"
            >
              <div className="flex flex-1 flex-col gap-3 md:h-full md:justify-between md:gap-0">
                <span className="eyebrow-accent">Instagram</span>
                <div>
                  <p className="font-display font-display-soft text-lg leading-tight text-ink md:text-2xl">
                    @cafeplanken<wbr />_mannheim
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-3">
                    Tagesangebot, neue Eissorten, was gerade frisch ist.
                  </p>
                </div>
              </div>
              <div className="relative h-14 w-14 shrink-0 self-end overflow-hidden rounded-full border border-rule transition-transform group-hover:rotate-3 md:h-20 md:w-20 md:self-auto">
                <Image
                  src="/img/logo.jpg"
                  alt="Café Planken Logo"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
