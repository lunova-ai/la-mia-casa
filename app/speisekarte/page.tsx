import FadeIn from "../components/FadeIn";

export default function Speisekarte() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">

      {/* HEAD */}
      <FadeIn>
        <h1 className="text-5xl font-logo font-bold mb-4 text-dark">
          Speisekarte
        </h1>

        <p className="text-lg text-[#555] mb-12 leading-relaxed max-w-3xl">
          Italienische Klassiker, steirische Highlights & Holzofen-Spezialitäten –
          frisch, ehrlich und mit viel Herz gekocht.  
          Eine Auswahl unserer beliebtesten Gerichte:
        </p>
      </FadeIn>

      {/* ANTIRPASTI */}
      <MenuSection title="Antipasti">
        <MenuItem name="Bruschetta Classica" price="6,90" desc="Geröstetes Brot · Tomatenwürfel · Basilikum · Olivenöl" />
        <MenuItem name="Caprese" price="10,90" desc="Mozzarella · Tomaten · Basilikum · Olivenöl Extra Vergine" />
        <MenuItem name="Prosciutto e Melone" price="12,90" desc="Feiner italienischer Schinken & frische Melone" />
      </MenuSection>

      {/* PIZZA */}
      <MenuSection title="Pizza aus dem Holzofen" highlight>
        <MenuItem name="Margherita" price="9,90" desc="Tomaten · Mozzarella · Basilikum" />
        <MenuItem name="Diavola" price="12,90" desc="Scharfe Salami · Chili · Mozzarella" />
        <MenuItem name="Prosciutto" price="12,50" desc="Vorderschinken · Mozzarella" />
        <MenuItem name="Pizza La mia Casa" price="14,90" desc="Chef’s Special · wechselnde frische Zutaten" />
      </MenuSection>

      {/* PASTA */}
      <MenuSection title="Pasta">
        <MenuItem name="Spaghetti Carbonara" price="13,90" desc="Speck · Eigelb · Pecorino – cremig & original italienisch" />
        <MenuItem name="Tagliatelle al Ragù" price="14,50" desc="Hausgemachtes Ragù nach italienischem Rezept" />
        <MenuItem name="Penne Arrabbiata" price="12,90" desc="Tomaten · Chili · Knoblauch · Petersilie" />
      </MenuSection>

      {/* SALATE */}
      <MenuSection title="Salate">
        <MenuItem name="Insalata Mista" price="6,90" desc="Gemischte Salate · Hausdressing" />
        <MenuItem name="Caesar Salad" price="12,90" desc="Hühnerstreifen · Parmesan · Croutons" />
        <MenuItem name="Mediterraner Salat" price="13,50" desc="Oliven · Tomaten · Feta · Rucola" />
      </MenuSection>

      {/* DESSERT */}
      <MenuSection title="Dolci">
        <MenuItem name="Tiramisu" price="6,90" desc="Hausgemacht · klassisch italienisch" />
        <MenuItem name="Panna Cotta" price="6,50" desc="Mit Beerenspiegel" />
        <MenuItem name="Gelato Misto" price="5,90" desc="Drei Sorten italienisches Eis" />
      </MenuSection>

      {/* DRINKS */}
      <MenuSection title="Getränke · Drinks">
        <MenuItem name="Aperol Spritz" price="6,90" />
        <MenuItem name="Campari Soda" price="5,90" />
        <MenuItem name="Hauswein Weiß / Rot" price="4,20" />
        <MenuItem name="Espresso" price="2,50" />
      </MenuSection>

      {/* CTA */}
      <FadeIn>
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-semibold text-dark mb-4">Vollständige Karte bald verfügbar</h3>
          <p className="text-[#666] mb-8">
            Die komplette Speisekarte mit allen Specials und saisonalen Gerichten ist in Arbeit.
          </p>
          <a href="/kontakt" className="btn-gold text-lg px-8 py-3">
            Tisch reservieren
          </a>
        </div>
      </FadeIn>
    </div>
  );
}

/* COMPONENTS */

function MenuSection({
  title,
  children,
  highlight = false,
}: {
  title: string;
  children: React.ReactNode;
  highlight?: boolean;
}) {
  return (
    <FadeIn>
      <div className="mb-16">
        <h2
          className={`text-3xl font-bold mb-6 ${
            highlight ? "text-gold" : "text-dark"
          }`}
        >
          {title}
        </h2>

        <div className="space-y-5">{children}</div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent mt-10 opacity-60"></div>
      </div>
    </FadeIn>
  );
}

function MenuItem({
  name,
  price,
  desc,
}: {
  name: string;
  price: string;
  desc?: string;
}) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div className="max-w-md">
        <p className="text-lg font-medium text-dark">{name}</p>
        {desc && <p className="text-sm text-[#666] leading-relaxed">{desc}</p>}
      </div>
      <p className="text-lg font-semibold text-gold whitespace-nowrap">{price} €</p>
    </div>
  );
}
