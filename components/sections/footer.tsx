import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Wordmark } from "@/components/ui/wordmark";
import { business } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-ink text-bg">
      <div className="mx-auto max-w-[1320px] px-5 py-16 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-x-5 gap-y-10 md:gap-x-10 md:gap-y-12">
          {/* Giant wordmark */}
          <div className="col-span-12">
            <span className="font-display font-display-soft block text-[clamp(3.25rem,16vw,9rem)] leading-[0.9] tracking-[-0.04em]">
              <span className="italic">Café</span> Planken.
            </span>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow text-bg/60 mb-3">Standort</p>
            <address className="not-italic text-sm leading-relaxed text-bg/85">
              {business.name} <br />
              {business.address.street} <br />
              {business.address.postal} {business.address.city} <br />
              {business.address.country}
            </address>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow text-bg/60 mb-3">Kontakt</p>
            <div className="flex flex-col gap-1 text-sm text-bg/85">
              <a
                href={`tel:${business.phone.replace(/\s+/g, "")}`}
                className="link-underline w-fit"
              >
                {business.phoneDisplay}
              </a>
              <a
                href={`mailto:${business.email}`}
                className="link-underline w-fit"
              >
                {business.email}
              </a>
              <a
                href={business.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline mt-2 inline-flex w-fit items-center gap-1"
              >
                Teil der {business.parent.name}
                <ArrowUpRight size={12} strokeWidth={1.6} />
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4">
            <p className="eyebrow text-bg/60 mb-3">Folgen</p>
            <ul className="flex flex-col gap-1 text-sm text-bg/85">
              {business.social.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline inline-flex w-fit items-center gap-1"
                  >
                    {s.label} · {s.handle}
                    <ArrowUpRight size={12} strokeWidth={1.6} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-bg/15 pt-6 text-xs text-bg/60 md:mt-16 md:flex-row md:items-center md:justify-between md:pt-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Wordmark size="sm" className="text-bg" />
            <span>© {year} — alle Rechte vorbehalten</span>
          </div>
          <div className="flex gap-5">
            <Link href="/impressum" className="link-underline">
              Impressum
            </Link>
            <Link href="/datenschutz" className="link-underline">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
