import { ArrowUpRight, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionEyebrow } from "@/components/ui/section-eyebrow";
import { ServiceBadge } from "@/components/ui/service-badge";
import { business, mapsEmbed, mapsLink } from "@/lib/content";

export function Visit() {
  return (
    <section id="besuchen" className="relative" aria-label="Besuchen">
      <div className="mx-auto max-w-[1320px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-5">
            <SectionEyebrow number="§ V">Besuchen</SectionEyebrow>
            <h2 className="mt-6 font-display display-lg text-ink">
              Komm vorbei — wir <em className="italic">freuen uns</em>.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-12 md:mt-20 md:gap-x-10">
          {/* Address + hours column */}
          <Reveal className="col-span-12 md:col-span-5">
            <div className="space-y-12">
              {/* Address */}
              <div>
                <p className="eyebrow mb-3">Adresse</p>
                <address className="not-italic">
                  <p className="font-display font-display-soft text-2xl leading-tight text-ink">
                    Café Planken
                  </p>
                  <p className="mt-1 font-display font-display-soft text-2xl leading-tight text-ink">
                    {business.address.street}
                  </p>
                  <p className="mt-1 text-ink-2">
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
                      className="flex items-baseline justify-between gap-6 py-3.5"
                    >
                      <dt className="font-display font-display-soft text-lg text-ink">
                        {h.label}
                      </dt>
                      <dd className="font-mono text-sm tabular-nums text-ink-2">
                        {h.opens}
                        <span aria-hidden className="px-1.5 text-ink-3">—</span>
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
                    <Phone size={16} strokeWidth={1.6} />
                    <span className="font-display font-display-soft text-xl">
                      {business.phoneDisplay}
                    </span>
                  </a>
                  <a
                    href={`mailto:${business.email}`}
                    className="group inline-flex items-center gap-3 text-ink"
                  >
                    <Mail size={16} strokeWidth={1.6} />
                    <span className="font-display font-display-soft text-xl">
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
              <div className="flex items-center justify-between border-t border-rule bg-paper px-5 py-4">
                <span className="eyebrow text-ink-3">
                  Mannheim · 49.4878°N · 8.4661°O
                </span>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-ink"
                >
                  <span className="link-underline">Route</span>
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
