"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { menu } from "@/lib/content";
import { easeOut } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Menu() {
  const [active, setActive] = useState(menu[0].id);
  const reduce = useReducedMotion();
  const current = menu.find((m) => m.id === active) ?? menu[0];

  return (
    <section id="karte" className="relative" aria-label="Speisekarte">
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-36">
        <Reveal>
          <SectionEyebrow number="§ II">Was es heute gibt</SectionEyebrow>
        </Reveal>

        <div className="mt-6 grid grid-cols-12 items-end gap-x-5 gap-y-6 md:mt-10 md:gap-x-10 md:gap-y-8">
          <Reveal className="col-span-12 md:col-span-7" delay={0.05}>
            <h2 className="font-display display-lg text-ink">
              Eine Karte, die sich <em className="italic">klein hält</em> — und
              ihre Sachen <em className="italic">gut macht</em>.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-4 md:col-start-9" delay={0.1}>
            <p className="max-w-[36ch] text-sm leading-relaxed text-ink-2">
              Preise verstehen sich inkl. MwSt. Vegane Optionen auf Anfrage.
              Was nicht passt, machen wir möglich.
            </p>
          </Reveal>
        </div>

        {/* Category switch */}
        <div className="mt-10 border-b border-rule md:mt-16">
          <div
            role="tablist"
            aria-label="Menükategorien"
            className="no-scrollbar -mx-5 flex gap-4 overflow-x-auto px-5 md:mx-0 md:gap-1 md:px-0"
          >
            {menu.map((cat, i) => {
              const isActive = cat.id === active;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${cat.id}`}
                  id={`tab-${cat.id}`}
                  onClick={() => setActive(cat.id)}
                  className={cn(
                    "relative shrink-0 py-4 text-left transition-colors md:px-5",
                    isActive ? "text-ink" : "text-ink-3 hover:text-ink-2",
                  )}
                >
                  <span className="flex items-baseline gap-2">
                    <span className="eyebrow text-current">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display font-display-soft text-lg tracking-tight md:text-2xl">
                      {cat.label}
                    </span>
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="menu-underline"
                      className="absolute -bottom-px left-0 right-0 h-px bg-ink"
                      transition={
                        reduce
                          ? { duration: 0 }
                          : { duration: 0.4, ease: easeOut }
                      }
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active category panel */}
        <div
          role="tabpanel"
          id={`panel-${current.id}`}
          aria-labelledby={`tab-${current.id}`}
          className="mt-10 grid grid-cols-12 gap-x-5 gap-y-8 md:mt-16 md:gap-x-10 md:gap-y-12"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: easeOut }}
              className="col-span-12 md:col-span-4"
            >
              <p className="max-w-[34ch] font-display-soft text-base leading-snug text-ink-2 md:text-lg">
                {current.caption}
              </p>
              <p className="mt-5 eyebrow md:mt-6">
                {current.items.length} Positionen
              </p>
            </motion.div>

            <motion.ul
              key={`${current.id}-list`}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.35, ease: easeOut }}
              className="col-span-12 md:col-span-8"
            >
              {current.items.map((item, idx) => (
                <motion.li
                  key={item.name}
                  initial={
                    reduce ? false : { opacity: 0, y: 6 }
                  }
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    ease: easeOut,
                    delay: reduce ? 0 : idx * 0.03,
                  }}
                  className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-rule py-4 last:border-b-0 md:gap-x-6 md:py-5"
                >
                  <div className="flex flex-col gap-1 md:gap-1.5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-display font-display-soft text-lg leading-tight tracking-tight text-ink md:text-2xl">
                        {item.name}
                      </span>
                      {item.popular && (
                        <span className="font-display italic text-xs text-accent md:text-sm">
                          beliebt
                        </span>
                      )}
                    </div>
                    {item.note && (
                      <span className="text-xs leading-snug text-ink-3 md:text-sm">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <span className="shrink-0 font-mono text-xs tabular-nums text-ink md:text-sm">
                    {item.price}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
      <div className="rule mx-5 md:mx-10" />
    </section>
  );
}
