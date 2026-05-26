"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import { business, heroCopy } from "@/lib/content";
import { easeOut } from "@/lib/motion";

const t = (delay: number) => ({
  duration: 0.7,
  ease: easeOut,
  delay,
});

const SPECIALS = [
  "Mango-Eis aus der eigenen Manufaktur.",
  "Tagliatelle al Limone, heute frisch gezogen.",
  "Schokoladentarte, siebzig Prozent, mit Meersalz.",
  "Affogato: doppelter Espresso über Vanille.",
  "Spaghetti-Eis, weiße Schokolade und Erdbeere.",
] as const;

function HeuteFrisch({ delay }: { delay: number }) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SPECIALS.length);
    }, 4500);
    return () => clearInterval(id);
  }, [reduce]);

  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };

  return (
    <motion.div
      initial={initial}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className="border-t border-rule pt-5 md:pt-6"
      aria-label="Heute frisch aus der Manufaktur"
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="eyebrow-accent shrink-0">Heute frisch</span>
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={SPECIALS[index]}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.55, ease: easeOut }}
              className="font-display italic text-ink leading-snug text-[clamp(1.125rem,2.4vw,1.75rem)]"
            >
              {SPECIALS[index]}
            </motion.p>
          </AnimatePresence>
        </div>
        <span className="eyebrow hidden shrink-0 tabular-nums md:inline">
          № {String(index + 1).padStart(2, "0")} / {String(SPECIALS.length).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-5 pb-14 pt-6 md:px-10 md:pb-28 md:pt-12 lg:pt-16">
        {/* Editorial top-line: location + EST */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={t(0.05)}
          className="mb-8 flex items-center justify-between text-[11px] md:mb-16"
        >
          <span className="eyebrow">Mannheim · Planken · O6 6</span>
          <span className="eyebrow hidden md:inline">
            Manufaktur · seit {business.established}
          </span>
        </motion.div>

        {/* Headline + accent image side by side */}
        <div className="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-12">
          <motion.h1
            initial={initial}
            animate={animate}
            transition={t(0.1)}
            className="col-span-12 md:col-span-8 lg:col-span-7"
          >
            <span className="font-display display-xl block text-ink">
              {heroCopy.line1}
            </span>
            <span className="font-display display-xl mt-1 block italic text-ink">
              {heroCopy.line2Italic}
            </span>
          </motion.h1>

          <motion.div
            initial={initial}
            animate={animate}
            transition={t(0.25)}
            className="col-span-12 md:col-span-4 lg:col-span-5 lg:translate-y-6"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-soft md:aspect-[3/4]">
              <Image
                src="/img/storefront.jpg"
                alt="Café Planken auf den Planken in Mannheim — goldenes Schild über dem Eingang, Outdoor-Bestuhlung zwischen Pflanzen."
                fill
                priority
                sizes="(min-width: 1024px) 40vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-ink-3">
              <span className="eyebrow text-ink-3">Eingang · O6 6</span>
              <span aria-hidden>→</span>
            </div>
          </motion.div>
        </div>

        {/* Heute frisch — rotating editorial specials line */}
        <div className="mt-14 md:mt-24">
          <HeuteFrisch delay={0.4} />
        </div>

        {/* Sub copy + meta */}
        <div className="mt-10 grid grid-cols-12 gap-x-5 gap-y-8 md:mt-16 md:gap-x-10 md:gap-y-10">
          <motion.p
            initial={initial}
            animate={animate}
            transition={t(0.55)}
            className="col-span-12 max-w-[34ch] font-display-soft text-lg leading-snug text-ink-2 md:col-span-6 md:col-start-2 md:text-2xl"
          >
            {heroCopy.sub}
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={t(0.65)}
            className="col-span-12 flex flex-col gap-3 md:col-span-4 md:col-start-9 md:items-end md:gap-4 md:text-right"
          >
            <Rating
              value={business.rating.value}
              count={business.rating.count}
              size="md"
            />
            <a
              href="#besuchen"
              className="group inline-flex items-center gap-1.5 text-sm text-ink"
            >
              <span className="link-underline">
                {business.address.street} · {business.address.postal}{" "}
                {business.address.city}
              </span>
              <ArrowDownRight
                size={14}
                strokeWidth={1.6}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="rule mx-5 md:mx-10" />
    </section>
  );
}
