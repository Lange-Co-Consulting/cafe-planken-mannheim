import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { highlights } from "@/lib/content";

export function Highlights() {
  return (
    <section
      id="manufaktur"
      className="relative bg-bg-soft"
      aria-label="Was uns ausmacht"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-12 items-end gap-x-6 gap-y-8 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-7">
            <SectionEyebrow number="§ III">Manufaktur</SectionEyebrow>
            <h2 className="mt-6 font-display display-lg text-ink">
              Drei Dinge, die uns <em className="italic">wichtig</em> sind.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.05}>
            <p className="max-w-[36ch] text-sm text-ink-2">
              Wir reden ungern groß über das, was wir machen — am liebsten
              probierst Du es einfach. Drei Sätze für den Anfang.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-24 md:gap-x-10">
          {highlights.map((h, i) => (
            <Reveal
              key={h.title}
              delay={0.05 + i * 0.08}
              className="col-span-12 md:col-span-4"
            >
              <article className="flex h-full flex-col gap-4 border-t border-rule-strong/40 pt-6">
                <span className="eyebrow-accent">{h.eyebrow}</span>
                <h3 className="font-display display-md max-w-[16ch] text-ink">
                  {h.title}
                </h3>
                <p className="max-w-[34ch] text-base leading-relaxed text-ink-2">
                  {h.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
