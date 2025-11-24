"use client";

import FadeIn from "../components/FadeIn";

export default function Datenschutz() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 space-y-20">

      {/* HEADER */}
      <FadeIn>
        <h1 className="text-4xl md:text-5xl font-cinzel text-[var(--dark)] mb-4">
          Datenschutz
        </h1>

        <p className="text-sm tracking-[0.25em] uppercase text-[var(--brand)] mb-6">
          Informationen gemäß DSGVO
        </p>

        <div className="w-24 h-[1px] bg-[rgba(237,146,97,0.35)]"></div>
      </FadeIn>


      {/* VERANTWORTLICHE */}
      <FadeIn>
        <section className="space-y-2">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Verantwortliche Stelle</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            La mia Casa Hartberg<br />
            Karin &amp; Reinhold Leitner<br />
            Hauptplatz 5<br />
            8230 Hartberg<br />
            Österreich
          </p>
        </section>
      </FadeIn>


      {/* KONTAKT */}
      <FadeIn>
        <section className="space-y-2">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Kontakt für Datenschutzanfragen</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Telefon: <a href="tel:+436649238843" className="text-[var(--brand)] hover:text-[var(--brand-dark)]">+43 644 923 8843</a><br />
            E-Mail: <a href="mailto:info@la-mia-casa.app" className="text-[var(--brand)] hover:text-[var(--brand-dark)]">info@la-mia-casa.app</a>
          </p>
        </section>
      </FadeIn>


      {/* ALLGEMEINE DATENVERARBEITUNG */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Allgemeines</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Wir verarbeiten personenbezogene Daten ausschließlich im Rahmen der gesetzlichen
            Bestimmungen (DSGVO, DSG, TKG). Diese Website verwendet keine Tracking-Cookies,
            keine Analyse-Tools und sammelt keine personenbezogenen Daten ohne aktive
            Kontaktaufnahme durch die Nutzer.
          </p>
        </section>
      </FadeIn>


      {/* SERVER LOGFILES */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Server-Logfiles</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Beim Besuch unserer Website werden technisch notwendige Daten automatisch durch
            den Server erfasst (IP-Adresse, Datum/Uhrzeit, Browsertyp). Diese Daten dienen
            ausschließlich der technischen Sicherheit, werden nicht mit anderen Daten
            verknüpft und automatisch nach kurzer Zeit gelöscht.
          </p>
        </section>
      </FadeIn>


      {/* KONTAKT PER E-MAIL / TELEFON / WHATSAPP */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Kontaktaufnahme</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Wenn Sie uns telefonisch, per E-Mail oder über WhatsApp kontaktieren, verarbeiten
            wir die von Ihnen freiwillig übermittelten Daten ausschließlich zur Bearbeitung
            Ihrer Anfrage. Diese Daten werden nicht an Dritte weitergegeben.
          </p>
        </section>
      </FadeIn>


      {/* EINBINDUNG VON GOOGLE MAPS */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Google Maps</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Unsere Website nutzt eine eingebettete Karte (Google Maps). Dabei können durch
            Google personenbezogene Daten verarbeitet werden. Mit Nutzung der Karte erklären
            Sie sich damit einverstanden, dass Google Ihre Daten gemäß der eigenen
            Datenschutzerklärung verarbeitet (Google LLC, USA).
          </p>
        </section>
      </FadeIn>


      {/* IHRE RECHTE */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Ihre Rechte</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
            Einschränkung, Datenübertragbarkeit und Widerruf Ihrer Einwilligung.
            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten rechtswidrig ist, können
            Sie Beschwerde bei der Datenschutzbehörde (Österreich) einreichen.
          </p>
        </section>
      </FadeIn>


      {/* DATENSCHUTZBEHÖRDE */}
      <FadeIn>
        <section className="space-y-3">
          <h2 className="text-2xl font-cinzel text-[var(--dark)] mb-2">Zuständige Aufsichtsbehörde</h2>

          <p className="text-lg text-[#555] leading-relaxed">
            Österreichische Datenschutzbehörde<br />
            Barichgasse 40–42<br />
            1030 Wien
          </p>
        </section>
      </FadeIn>


      {/* ABSCHLUSS */}
      <FadeIn>
        <p className="text-center text-sm text-[#888]">
          Stand: {new Date().getFullYear()}
        </p>
      </FadeIn>

    </div>
  );
}
