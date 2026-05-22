import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ServiceBadge } from "@/components/ui/service-badge";
import { business, mapsEmbed, mapsLink } from "@/lib/content";

export function Visit() {
  return (
    <section id="besuchen" className="relative" aria-label="Besuchen">
      <div className="mx-auto max-w-[1320px] px-5 py-20 md:px-10 md:py-36">
        <div className="grid grid-cols-12 gap-x-5 gap-y-6 md:gap-x-10 md:gap-y-10">
          <Reveal className="col-span-12 md:col-span-5">
            <SectionEyebrow>Besuchen</SectionEyebrow>
            <h2 className="mt-5 font-display display-lg text-ink md:mt-6">
              Komm vorbei — wir freuen uns.
            </h2>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-x-5 gap-y-10 md:mt-20 md:gap-x-10 md:gap-y-12">
          {/* Address + hours column */}
          <Reveal className="col-span-12 md:col-span-5">
            <div className="space-y-10 md:space-y-12">
              {/* Address */}
              <div>
                <p className="eyebrow mb-3">Adresse</p>
                <address className="not-italic">
                  <p className="font-display font-display-soft text-xl leading-tight text-ink md:text-2xl">
                    Café Planken
                  </p>
                  <p className="mt-1 font-display font-display-soft text-xl leading-tight text-ink md:text-2xl">
                    {business.address.street}
                  </p>
                  <p className="mt-1 text-sm text-ink-2 md:text-base">
                    {business.address.postal} {business.address.city} ·{" "}
                    {business.address.quarter}
                  </p>
                </address>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-ink"
                >
                  <span className="link-underline">In Google Maps öffnen</span>
                  <ArrowUpRight size={14} strokeWidth={1.6} />
                </a>
              </div>

              {/* Hours */}
              <div>
                <p className="eyebrow mb-3">Öffnungszeiten</p>
                <dl className="divide-y divide-rule border-t border-rule">
                  {business.hours.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-baseline justify-between gap-4 py-3 md:gap-6 md:py-3.5"
                    >
                      <dt className="font-display font-display-soft text-base text-ink md:text-lg">
                        {h.label}
                      </dt>
                      <dd className="shrink-0 font-mono text-xs tabular-nums text-ink-2 md:text-sm">
                        {h.opens}
                        <span aria-hidden className="px-1 text-ink-3 md:px-1.5">
                          —
                        </span>
                        {h.closes === "00:00" ? "Mitternacht" : h.closes}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Contact */}
              <div>
                <p className="eyebrow mb-3">Direkt sprechen</p>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${business.phone.replace(/\s+/g, "")}`}
                    className="group inline-flex items-center gap-3 text-ink"
                  >
                    <Phone size={16} strokeWidth={1.6} className="shrink-0" />
                    <span className="font-display font-display-soft text-lg md:text-xl">
                      {business.phoneDisplay}
                    </span>
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="group inline-flex min-w-0 items-center gap-3 text-ink"
                  >
                    <Mail size={16} strokeWidth={1.6} className="shrink-0" />
                    <span className="truncate font-display font-display-soft text-base md:text-xl">
                      {business.email}
                    </span>
                  </a>
                </div>
              </div>

              {/* Services */}
              <div>
                <p className="eyebrow mb-3">Services</p>
                <ul className="flex flex-wrap gap-2">
                  {business.services.map((s) => (
                    <li key={s}>
                      <ServiceBadge>{s}</ServiceBadge>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          {/* Map column */}
          <Reveal
            className="col-span-12 md:col-span-7 md:col-start-6"
            delay={0.1}
          >
            <div className="relative overflow-hidden border border-rule bg-paper shadow-[0_30px_60px_-30px_rgba(28,24,18,0.25)]">
              <div className="aspect-[4/3] w-full md:aspect-[5/6]">
                <iframe
                  title="Café Planken auf der Karte — O6 6, Mannheim"
                  src={mapsEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full grayscale-[0.2] contrast-[0.95]"
                  allowFullScreen
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-t border-rule bg-paper px-4 py-3 md:px-5 md:py-4">
                <span className="eyebrow text-ink-3">
                  49.4878°N · 8.4661°O
                </span>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-ink"
                >
                  <span className="link-underline">Route öffnen</span>
                  <ArrowUpRight size={12} strokeWidth={1.6} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
