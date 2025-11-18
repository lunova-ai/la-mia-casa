import FadeIn from "../components/FadeIn";

export default function Events() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[55vh] md:h-[65vh] w-full overflow-hidden bg-dark">
        <div
          className="absolute inset-0 bg-[url('/la-mia-casa-ofen.jpg')] bg-cover bg-center opacity-80"
          style={{ backgroundAttachment: "fixed" }}
        ></div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 text-white">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-2xl tracking-tight">
              Events & Feiern
            </h1>
          </FadeIn>

          <FadeIn delay={150}>
            <p className="mt-4 text-xl opacity-95 max-w-2xl leading-relaxed">
              Der perfekte Ort für Firmenfeiern, Geburtstage, Gruppenabende  
              und besondere Momente – mitten im Herzen von Hartberg.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 text-dark">
            Feiern, genießen & besondere Momente erleben
          </h2>
        </FadeIn>

        <FadeIn delay={120}>
          <p className="text-lg md:text-xl text-[#555] leading-relaxed max-w-3xl">
            Unser zweistöckiges Lokal verbindet italienische Atmosphäre mit steirischer Herzlichkeit.
            Perfekt für Firmenfeiern, Geburtstage, Weihnachtsfeiern, Vereinsabende  
            und kulinarische Events jeder Art.  
          </p>
        </FadeIn>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <FadeIn><EventCard title="Firmenfeiern" text="Elegante, gemütliche Räume mit Bar & Küche – ideal für Teamevents." /></FadeIn>
          <FadeIn delay={120}><EventCard title="Geburtstage" text="Mit Freunden feiern, essen & genießen – italienisches Feeling garantiert." /></FadeIn>
          <FadeIn delay={240}><EventCard title="Gruppenabende" text="Perfekt für Vereine, Clubs, Teams – entspannt & herzlich." /></FadeIn>
        </div>

        <FadeIn>
          <div className="section-divider"></div>
        </FadeIn>

        {/* DETAILS */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">Was wir bieten</h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12">
          <FadeIn><DetailItem title="Holzofenpizza & mediterrane Küche" text="Ideal für Gruppen – auf Wunsch eigene Menüs." /></FadeIn>
          <FadeIn delay={120}><DetailItem title="60 Sitzplätze · 2 Etagen" text="Unten Bar, oben Ristorante – flexibel & gemütlich." /></FadeIn>
          <FadeIn delay={240}><DetailItem title="Moderne Atmosphäre" text="Warm, mediterran, edel – perfekt für Fotos & Stimmung." /></FadeIn>
          <FadeIn delay={360}><DetailItem title="Aperitivos & Drinks" text="Aperol, Wein, Cocktails – italienische Bar-Kultur inklusive." /></FadeIn>
        </div>

        <FadeIn>
          <div className="section-divider"></div>
        </FadeIn>

        {/* CTA */}
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
            Event anfragen oder reservieren
          </h2>
          <p className="text-lg text-[#555] max-w-2xl leading-relaxed mb-8">
            Wir beraten dich persönlich – egal ob Firmenfeier, Geburtstag oder Gruppenveranstaltung.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:+436449238843"
              className="px-8 py-4 rounded-lg bg-gold text-dark font-semibold shadow-lg hover:bg-[#c39645] transition w-full sm:w-auto text-center text-lg"
            >
              Jetzt anrufen
            </a>

            <a
              href="https://wa.me/436449238843"
              className="px-8 py-4 rounded-lg border border-dark text-dark font-semibold hover:bg-dark hover:text-cream transition w-full sm:w-auto text-center text-lg"
              target="_blank"
            >
              WhatsApp schreiben
            </a>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}


/* COMPONENTS */

function EventCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="card hover:shadow-xl hover:-translate-y-1">
      <h3 className="text-xl font-semibold text-dark mb-2">{title}</h3>
      <p className="text-[#555] text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function DetailItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="p-1">
      <h4 className="text-xl font-semibold mb-2 text-dark">{title}</h4>
      <p className="text-[#666] leading-relaxed">{text}</p>
    </div>
  );
}

