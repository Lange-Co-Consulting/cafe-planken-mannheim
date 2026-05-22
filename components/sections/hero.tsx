"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { Rating } from "@/components/ui/rating";
import { business, heroCopy } from "@/lib/content";
import { easeOut } from "@/lib/motion";

const t = (delay: number) => ({
  duration: 0.7,
  ease: easeOut,
  delay,
});

export function Hero() {
  const reduce = useReducedMotion();
  const initial = reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 };
  const animate = { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-5 pb-16 pt-8 md:px-10 md:pb-28 md:pt-12 lg:pt-16">
        {/* Editorial top-line: location + EST */}
        <motion.div
          initial={initial}
          animate={animate}
          transition={t(0.05)}
          className="mb-10 flex items-center justify-between text-[11px] md:mb-16"
        >
          <span className="eyebrow">Mannheim · Planken · O6 6</span>
          <span className="eyebrow hidden md:inline">
            Manufaktur · seit {business.established}
          </span>
        </motion.div>

        {/* Headline + accent image side by side */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-12 md:gap-x-10">
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

        {/* Sub copy + meta */}
        <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-10 md:mt-20 md:gap-x-10">
          <motion.p
            initial={initial}
            animate={animate}
            transition={t(0.35)}
            className="col-span-12 max-w-[34ch] font-display-soft text-xl text-ink-2 md:col-span-6 md:col-start-2 md:text-2xl"
          >
            {heroCopy.sub}
          </motion.p>

          <motion.div
            initial={initial}
            animate={animate}
            transition={t(0.45)}
            className="col-span-12 flex flex-col gap-4 md:col-span-4 md:col-start-9 md:items-end md:text-right"
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
