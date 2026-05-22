import Link from "next/link";
import { Nav } from "@/components/sections/nav";
import { Footer } from "@/components/sections/footer";

export const metadata = {
  title: "Datenschutz",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[760px] px-5 py-24 md:px-10 md:py-36">
        <p className="eyebrow mb-6">DSGVO</p>
        <h1 className="font-display display-lg text-ink">Datenschutz</h1>

        <div className="mt-14 space-y-10 text-base leading-relaxed text-ink-2">
          <section>
            <h2 className="font-display font-display-soft text-xl text-ink">
              Allgemeines
            </h2>
            <p className="mt-2">
              Auf dieser Website werden ausschließlich technisch erforderliche
              Daten verarbeitet. Es kommen keine Tracking-Tools zum Einsatz.
            </p>
          </section>
          <section>
            <h2 className="font-display font-display-soft text-xl text-ink">
              Eingebettete Dienste
            </h2>
            <p className="mt-2">
              Die Standortkarte wird über Google Maps eingebettet. Beim Laden
              der Karte werden Daten an Google übertragen. Der Aufruf erfolgt
              erst, wenn Du die Sektion „Besuchen“ sichtbar machst.
            </p>
          </section>
          <section>
            <h2 className="font-display font-display-soft text-xl text-ink">
              Hinweis
            </h2>
            <p className="mt-2 text-sm text-ink-3">
              Dieser Text ist ein Platzhalter. Eine vollständige Datenschutz­
              erklärung wird vor dem Live-Gang juristisch geprüft ergänzt.
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
