import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";

export function Gallery() {
  return (
    <section
      className="relative bg-bg-soft"
      aria-label="Aus dem Tresen"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-8 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-5">
            <SectionEyebrow>Aus dem Tresen</SectionEyebrow>
            <h2 className="mt-6 font-display display-md text-ink">
              Was diese Woche <em className="italic">unter Glas</em> steht.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.05}>
            <p className="max-w-[34ch] text-sm text-ink-2">
              Direkt aus unserer Konditorei. Die Karte rotiert wöchentlich —
              folgt uns auf Instagram für das aktuelle Tagesangebot.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-6 md:mt-20 md:gap-x-10">
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
              <div className="relative aspect-[5/6] w-full overflow-hidden bg-bg">
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
              className="group relative flex aspect-[5/3] w-full items-center justify-between gap-4 overflow-hidden border border-rule bg-paper p-5 transition-colors hover:border-rule-strong md:aspect-[5/4] md:p-6"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="eyebrow-accent">Instagram</span>
                <div>
                  <p className="font-display font-display-soft text-xl leading-tight text-ink md:text-2xl">
                    @cafeplanken_<wbr />mannheim
                  </p>
                  <p className="mt-1 text-xs text-ink-3">
                    Tagesangebot, neue Eissorten, was gerade frisch ist.
                  </p>
                </div>
              </div>
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-rule transition-transform group-hover:rotate-3 md:h-20 md:w-20">
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
