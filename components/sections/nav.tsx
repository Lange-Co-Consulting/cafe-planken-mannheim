"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { nav as navItems, business } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-colors duration-300",
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-rule/60"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1320px] items-center justify-between px-5 md:h-20 md:px-10">
        <Wordmark size="md" />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Hauptnavigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink-2 transition-colors hover:text-ink link-underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <a
            href={`tel:${business.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-paper px-4 py-2 text-sm text-ink transition-all hover:border-ink/40 hover:bg-ink hover:text-bg"
          >
            <Phone size={14} strokeWidth={1.8} />
            <span className="tabular-nums">{business.phoneDisplay}</span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="md:hidden -mr-1 p-1 text-ink"
          aria-label="Menü öffnen"
        >
          <Menu size={22} strokeWidth={1.6} />
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-bg transition-opacity duration-300 md:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <Wordmark size="md" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="-mr-1 p-1 text-ink"
            aria-label="Menü schließen"
          >
            <X size={22} strokeWidth={1.6} />
          </button>
        </div>
        <div className="rule" />
        <nav className="flex flex-col px-5 pt-6" aria-label="Mobile Navigation">
          {navItems.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-rule py-5 font-display font-display-soft text-3xl tracking-tight text-ink"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="px-5 pt-8">
          <a
            href={`tel:${business.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-bg"
          >
            <Phone size={14} strokeWidth={1.8} />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
