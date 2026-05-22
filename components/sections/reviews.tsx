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
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-36">
        <div className="grid grid-cols-12 gap-x-5 gap-y-6 md:gap-x-10 md:gap-y-10">
          <Reveal className="col-span-12 md:col-span-3">
            <SectionEyebrow>Stimmen unserer Gäste</SectionEyebrow>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-8 md:col-start-4" delay={0.05}>
            <h2 className="font-display display-lg text-ink">
              Was unsere Gäste{" "}
              <em className="italic">sagen</em>.
            </h2>
            <div className="mt-6 flex flex-wrap items-baseline gap-x-5 gap-y-2 md:mt-8">
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

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 md:mt-20 md:grid-cols-2 md:gap-y-14">
          {reviews.map((r, i) => (
            <Reveal
              key={r.author}
              delay={0.05 + i * 0.05}
            >
              <figure className="flex h-full flex-col border-t border-rule pt-6 md:pt-8">
                <blockquote className="font-display italic font-display-soft text-[clamp(1.15rem,2.4vw,1.5rem)] leading-[1.45] text-ink">
                  „{r.quote}"
                </blockquote>
                <figcaption className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm md:mt-6">
                  <span className="text-ink-2">{r.author}</span>
                  <span aria-hidden className="text-ink-3">·</span>
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
