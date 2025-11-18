import FadeIn from "../components/FadeIn";

export default function Kontakt() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* TITLE */}
      <FadeIn>
        <p className="text-xs tracking-[0.25em] text-gold uppercase mb-3">
          Kontakt · Reservierung
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-4">
          Kontakt & Reservierung
        </h1>

        <p className="text-lg text-[#555] max-w-2xl leading-relaxed mb-12">
          Reservierungen, Fragen oder Event-Anfragen – wir freuen uns jederzeit auf dich.
        </p>
      </FadeIn>

      {/* CONTACT CARD */}
      <FadeIn>
        <div className="bg-white/90 backdrop-blur-xl border border-[#e5e1da] 
                        rounded-3xl p-10 shadow-xl mb-20">

          <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-8">
            Kontaktdaten
          </h2>

          <div className="space-y-6 text-lg text-[#444]">

            <div>
              <p className="font-semibold text-dark">Adresse</p>
              <p>Hauptplatz 5<br />8230 Hartberg</p>
            </div>

            <div>
              <p className="font-semibold text-dark">Telefon</p>
              <a
                href="tel:+436449238843"
                className="text-gold hover:text-dark transition font-medium"
              >
                +43 644 923 8843
              </a>
            </div>

            <div>
              <p className="font-semibold text-dark">WhatsApp</p>
              <a
                href="https://wa.me/436449238843"
                target="_blank"
                className="text-gold hover:text-dark transition font-medium"
              >
                Nachricht senden →
              </a>
            </div>

            <div>
              <p className="font-semibold text-dark">Öffnungszeiten</p>
              <p>
                Mo, Mi, Do, Fr, Sa: 16:00 – 24:00<br />
                Sonntag: 10:30 – 19:00<br />
                Dienstag: Ruhetag
              </p>
            </div>
          </div>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-6 mt-12">
            <a
              href="tel:+436449238843"
              className="btn-gold text-base md:text-lg px-8 py-4"
            >
              Jetzt anrufen
            </a>

            <a
              href="https://wa.me/436449238843"
              target="_blank"
              className="px-8 py-4 rounded-lg border border-dark text-dark font-semibold
                         hover:bg-dark hover:text-white transition text-base md:text-lg"
            >
              WhatsApp schreiben
            </a>
          </div>

        </div>
      </FadeIn>

      {/* MAP */}
      <FadeIn>
        <h2 className="text-3xl font-semibold text-dark mb-6">
          Hier findest du uns
        </h2>

        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-[#ddd]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2726.9168229698934!2d15.973!3d47.281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e3dcdee1127ad%3A0x3af37c490eb5c675!2sHauptplatz%205%2C%208230%20Hartberg!5e0!3m2!1sde!2sat!4v00000000000"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </FadeIn>

    </div>
  );
}

