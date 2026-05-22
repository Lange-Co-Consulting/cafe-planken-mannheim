import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";
import { business } from "@/lib/content";

export const metadata = {
  title: "Impressum",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[760px] px-5 py-24 md:px-10 md:py-36">
        <p className="eyebrow mb-6">Pflichtangaben</p>
        <h1 className="font-display display-lg text-ink">Impressum</h1>

        <div className="mt-14 space-y-10 text-base leading-relaxed text-ink-2">
          <section>
            <h2 className="font-display font-display-soft text-xl text-ink">
              Anbieter
            </h2>
            <p className="mt-2">
              {business.parent.name} <br />
              {business.address.street} <br />
              {business.address.postal} {business.address.city}
            </p>
          </section>
          <section>
            <h2 className="font-display font-display-soft text-xl text-ink">
              Kontakt
            </h2>
            <p className="mt-2">
              Telefon: {business.phoneDisplay} <br />
              E-Mail: {business.email}
            </p>
          </section>
          <section>
            <h2 className="font-display font-display-soft text-xl text-ink">
              Hinweis
            </h2>
            <p className="mt-2 text-sm text-ink-3">
              Diese Seite ist ein Platzhalter. Vollständige Pflichtangaben
              gemäß § 5 TMG werden vor dem Live-Gang ergänzt.
            </p>
          </section>
        </div>

        <Link
          href="/"
          className="mt-16 inline-flex items-center gap-1.5 text-sm text-ink link-underline"
        >
          ← Zurück zur Startseite
        </Link>
      </main>
      <Footer />
    </>
  );
}
