import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { Rating } from "@/components/ui/rating";
import { business, reviews } from "@/lib/content";

export function Reviews() {
  return (
    <section
      id="stimmen"
      className="relative"
      aria-label="Stimmen unserer Gäste"
    >
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-3">
            <SectionEyebrow number="§ IV">Stimmen</SectionEyebrow>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-8 md:col-start-4" delay={0.05}>
            <h2 className="font-display display-lg text-ink">
              Was unsere Gäste{" "}
              <em className="italic">über uns sagen</em>.
            </h2>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-display display-md tabular-nums text-ink">
                {business.rating.value.toFixed(1)}
              </span>
              <Rating
                value={business.rating.value}
                count={business.rating.count}
                size="md"
              />
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-16 md:mt-24 md:gap-x-10">
          {reviews.map((r, i) => (
            <Reveal
              key={r.author}
              delay={0.05 + i * 0.06}
              className={
                i % 2 === 0
                  ? "col-span-12 md:col-span-7 md:col-start-2"
                  : "col-span-12 md:col-span-6 md:col-start-7"
              }
            >
              <figure className="relative">
                <span
                  aria-hidden
                  className="absolute -left-6 top-0 font-display italic text-5xl text-accent/40 md:-left-10 md:text-6xl"
                >
                  „
                </span>
                <blockquote className="font-display italic font-display-soft text-[clamp(1.5rem,2.6vw,2.2rem)] leading-[1.25] tracking-tight text-ink">
                  {r.quote}
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 text-sm">
                  <span aria-hidden className="h-px w-8 bg-rule-strong" />
                  <span className="text-ink-2">{r.author}</span>
                  <span className="eyebrow text-ink-3">via {r.source}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
      <div className="rule mx-5 md:mx-10" />
    </section>
  );
}
