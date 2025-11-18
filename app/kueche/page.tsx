import FadeIn from "../components/FadeIn";

export default function Kueche() {
  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[55vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/la-mia-casa-ofen.jpg')] bg-cover bg-center scale-105"
          style={{ backgroundAttachment: "fixed" }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-center px-6 text-white">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-bold drop-shadow-xl">
              Küche & Genuss
            </h1>
          </FadeIn>

          <FadeIn>
            <p className="mt-4 text-xl opacity-90 max-w-xl">
              Mediterrane Küche trifft steirische Herzlichkeit – frisch, aromatisch 
              und mit Leidenschaft zubereitet.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <FadeIn>
          <p className="text-sm tracking-[0.25em] text-gold uppercase mb-4">
            Unsere Spezialitäten
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-dark mb-6">
            Mediterraner Genuss & Holzofenklassiker
          </h2>

          <p className="text-lg text-[#555] max-w-3xl leading-relaxed">
            Bei La mia Casa steht Qualität im Mittelpunkt: knusprige Holzofenpizza,
            hausgemachte Pastagerichte, frische Salate, Antipasti und feine Desserts.
            Alles wird mit viel Liebe, besten Zutaten und italienischem Herz zubereitet.
          </p>
        </FadeIn>
      </section>

      {/* FEATURES / KATEGORIEN */}
      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        <FadeIn>
          <Category
            title="Holzofenpizza"
            text="Knusprig, aromatisch und direkt aus unserem traditionellen Ofen."
          />
        </FadeIn>

        <FadeIn>
          <Category
            title="Hausgemachte Pasta"
            text="Cremig, würzig & authentisch – italienische Klassiker frisch zubereitet."
          />
        </FadeIn>

        <FadeIn>
          <Category
            title="Mediterrane Salate"
            text="Frisch, leicht & raffiniert – perfekt zu Pizza, Pasta oder als Hauptgang."
          />
        </FadeIn>

        <FadeIn>
          <Category
            title="Antipasti & Desserts"
            text="Von Bruschetta bis Tiramisu – ideal zum Teilen und Genießen."
          />
        </FadeIn>

      </section>

      {/* CTA / SPEISEKARTE */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <FadeIn>
          <div className="rounded-3xl bg-white/90 shadow-xl border border-[#e4ded6] px-8 py-10 text-center">

            <h2 className="text-3xl font-bold mb-4">Speisekarte ansehen</h2>
            <p className="text-lg text-[#555] max-w-2xl mx-auto mb-8">
              Unsere vollständige Speisekarte mit allen Klassikern und wöchentlichen Specials.
            </p>

            <a href="/speisekarte.pdf" target="_blank" className="btn-gold text-lg px-8 py-4">
              Speisekarte öffnen (PDF)
            </a>
          </div>
        </FadeIn>
      </section>

    </div>
  );
}

/* CATEGORY CARD */
function Category({ title, text }: { title: string; text: string }) {
  return (
    <div
      className="p-7 rounded-2xl bg-white/90 backdrop-blur-sm
                 border border-[#ece7e1] shadow-sm
                 hover:shadow-md hover:-translate-y-1 transition"
    >
      <h3 className="text-xl font-semibold mb-2 text-dark">{title}</h3>
      <p className="text-[#555] text-sm leading-relaxed">{text}</p>
    </div>
  );
}
