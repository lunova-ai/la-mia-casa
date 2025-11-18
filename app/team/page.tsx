import FadeIn from "../components/FadeIn";

export default function Team() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* INTRO */}
      <FadeIn>
        <h1 className="text-5xl font-logo font-bold mb-4 text-dark">
          Das Team
        </h1>
        <p className="text-lg text-[#555] mb-12 max-w-2xl leading-relaxed">
          Herz, Erfahrung & italienische Gastfreundschaft – das ist La mia Casa.
          Ein Ort, an dem Gäste zu Freunden werden.
        </p>
      </FadeIn>

      {/* CHEFIN – Highlight Section */}
      <section className="grid md:grid-cols-2 gap-14 items-center">

        {/* FOTO (wird später ersetzt) */}
        <FadeIn>
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-sm border border-[#e8e2d9]">
            <img
              src="/la-mia-casa-auto.jpg"
              alt="Chefin La mia Casa"
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>

        {/* TEXT BLOCK */}
        <FadeIn>
          <div className="space-y-6">

            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Die Gastgeberin
            </h2>

            <p className="text-lg text-[#444] leading-relaxed">
              La mia Casa wird mit Leidenschaft von einer Gastgeberin geführt,
              die seit vielen Jahren in der Gastronomie zuhause ist – mit Stationen
              in Salzburg, Ischgl, Grafendorf und Stambach.
              Erfahrung, Herzlichkeit und ein Gefühl für gute Atmosphäre prägen jeden Tag im Lokal.
            </p>

            <blockquote className="text-[#666] italic border-l-4 border-gold pl-4">
              „Gastronomie ist kein Beruf – es ist ein Gefühl.  
              Ein Zuhause für Gäste zu schaffen, ist meine Leidenschaft.“
            </blockquote>

            <p className="text-lg text-[#555] leading-relaxed">
              Mediterrane Küche, steirische Herzlichkeit und modernes Ambiente –
              das alles entsteht durch ein Team, das zusammenarbeitet wie eine Familie.
            </p>
          </div>
        </FadeIn>

      </section>

      {/* DIVIDER */}
      <FadeIn delay={200}>
        <div className="section-divider"></div>
      </FadeIn>

      {/* TEAM GRID (Future Expansion) */}
      <FadeIn>
        <div className="mt-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-dark">
            Unser Team
          </h2>

          <p className="text-lg text-[#555] max-w-3xl mb-12 leading-relaxed">
            Ob Küche, Service oder Bar – unser Team sorgt jeden Tag dafür,
            dass sich jeder Gast wie zuhause fühlt.  
            Bald gibt es hier echte Teamfotos.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 opacity-60">
            <TeamPlaceholder name="Service" />
            <TeamPlaceholder name="Küche" />
            <TeamPlaceholder name="Bar" />
          </div>
        </div>
      </FadeIn>

    </div>
  );
}


/* TEAM PLACEHOLDER CARD */
function TeamPlaceholder({ name }: { name: string }) {
  return (
    <div className="bg-white/70 backdrop-blur-sm border border-[#e5e0d8] rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="w-full h-32 bg-[#e9e5df] rounded-lg mb-4"></div>
      <p className="text-center text-lg font-medium text-dark">
        {name}
      </p>
    </div>
  );
}
