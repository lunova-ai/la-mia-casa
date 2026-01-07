"use client";

import type { ReactNode } from "react";
import FadeIn from "../components/FadeIn";

/* ------------------------------------------------------
   PAGE – SPEISEKARTE (NEUES EDLERES DESIGN)
------------------------------------------------------ */
export default function Speisekarte() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">

      {/* INTRO */}
      <FadeIn>
        <div className="text-center">
          <p className="text-xs tracking-[0.28em] uppercase text-[var(--brand)] mb-3">
            Speisekarte
          </p>

          <h1 className="text-5xl md:text-6xl font-cinzel text-[var(--dark)]">
            Amore · Cucina
          </h1>

          <p className="mt-6 text-base md:text-lg text-[#666] leading-relaxed max-w-2xl mx-auto">
            Klassische italienische Küche, ehrliche Zutaten und ein Hauch Styria.
          </p>

          <blockquote className="mt-10 text-sm md:text-base italic text-[#777] max-w-3xl mx-auto leading-relaxed">
            „Unser Ziel ist es, Ihnen mit jedem Bissen ein Stück Italien spüren zu lassen.“ – Daniel
          </blockquote>

          <div className="w-24 h-[1px] bg-[rgba(237,146,97,0.35)] mx-auto mt-10"></div>
        </div>
      </FadeIn>



      {/* ------------------------------------------------------
         ANTIPASTI
      ------------------------------------------------------ */}
      <MenuSection title="Antipasti · Vorspeisen">
        <MenuItem name="Prosciutto Crudo e Melone" price="11,50" desc="Rohschinken mit Zuckermelone" />
        <MenuItem name="Cozze Provenciale" price="9,90" desc="Miesmuschel in Tomatensauce · Knoblauch · Zwiebel · Petersilie" />
        <MenuItem name="Caprese di Burrata" price="12,90" desc="Bunte Tomatenvariation · Burrata · Basilikumpesto & Balsamicoglace" />
        <MenuItem name="Zuppa di Basilico" price="5,50" desc="Basilikumschaumsuppe" />
      </MenuSection>


      {/* ------------------------------------------------------
         INSALATONE
      ------------------------------------------------------ */}
      <MenuSection title="Insalatone · Salate" subtitle="mit Gebäck">
        <MenuItem name="Caesar Salad" price="13,50" desc="Blattsalate · gegrillte Hühnerstreifen · Croutons · Tomaten · Parmesan · Anchovi-Parmesan Dressing" />
        <MenuItem name="Insalata di Tonno" price="12,90" desc="Blattsalate · Tomaten · Thunfisch · Zwiebel · Oliven · Mais · Balsamico Dressing" />
        <MenuItem name="Insalata Manzo" price="17,90" desc="Blattsalate · Roastbeef · Tomaten · Gurken · Karotten · Radieschen · Kräuter Dressing" />
        <MenuItem name="Insalata Styria" price="14,40" desc="Blattsalate · gebackene Hühnerstreifen in Kürbispanade · Radieschen · Gurken · Tomaten · Kernöl Dressing" />
        <MenuItem name="Insalata Regina" price="15,50" desc="Blattsalat · Garnelen · Gurken · Karotten · Radieschen · Oliven · Tomaten · Kräuter Dressing" />
        <MenuItem name="Insalata Mista" price="4,90" desc="Gemischter Salat" />
      </MenuSection>



      {/* ------------------------------------------------------
         CARNE & PESCE
      ------------------------------------------------------ */}
      <MenuSection title="Carne & Pesce · Hauptgerichte">
        <MenuItem name="Saltimbocca Romana" price="16,90" desc="Hühnerfilet mit Prosciutto & Salbei · cremige Polenta · Zitronen-Jus" />
        <MenuItem name="Piccata alla Styria" price="16,90" desc="Hühnerfilet in Parmesan-Kürbiskern-Panier · Spaghetti · Paradeisersugo · frischer Basilikum" />
        <MenuItem name="Cozze Provenciale" price="15,90" desc="Miesmuschel in Tomatensauce · Knoblauch · Zwiebel · Petersilie" />
        <MenuItem name="Fritto Misto di Mare" price="18,90" desc="Calamari · Garnelen · Ährenfische · Meeresfrüchte · Sauce Tartare" />
      </MenuSection>



      {/* ------------------------------------------------------
         PRIMI PIATTI SPECIALE
      ------------------------------------------------------ */}
      <MenuSection title="Primi Piatti Speciale · Pasta">
        <MenuItem name="Spaghetti Burrata" price="14,90" desc="Spaghetti · Paradeisersauce · Kirschtomaten · Burrata · frischer Basilikum" />
        <MenuItem name="Pasta Pescatore" price="16,50" desc="Spaghetti mit Garnelen · Muscheln · Meeresfrüchte in Paradeisersauce" />
      </MenuSection>



      {/* ------------------------------------------------------
         PASTA CLASSICO
      ------------------------------------------------------ */}
      <MenuSection
        title="Pasta Classico"
        subtitle="Wählen Sie für Ihre Pasta folgende Zubereitungsarten aus: Spaghetti, Penne, Gnocchi und glutenfreie Pasta (+ € 1,00)."
      >
        <MenuItem name="Con Aglio, Olio e Peperoncino" price="11,50" desc="Knoblauch · Olivenöl · Petersilie · frischer Chili" />
        <MenuItem name="Con Pomodoro e Basilico" price="11,50" desc="Paradeisersauce · frischer Basilikum" />
        <MenuItem name="Alla Bolognese" price="12,50" desc="Paradeiser-Fleischsauce" />
        <MenuItem name="Alla Carbonara" price="12,90" desc="Original italienisch – ohne Sahne" />
        <MenuItem name="Alla Ravanello" price="12,50" desc="Radieschenblatt Pesto" />
        <MenuItem name="Lasagne della Casa al Forno" price="12,90" desc="Nach Art des Hauses · im Pizzaofen überbacken" />
      </MenuSection>



      {/* ------------------------------------------------------
         RISOTTI
      ------------------------------------------------------ */}
      <MenuSection title="Risotti">
        <MenuItem name="Risotto ai Frutti di Mare" price="16,50" desc="Cremiges Safranrisotto mit Meeresfrüchten · Parmesanchip" />
      </MenuSection>



      {/* ------------------------------------------------------
         PIZZA CLASSICO
      ------------------------------------------------------ */}
      <MenuSection title="Pizza · klassisch" columns={2}>
        <MenuItem name="Margherita" price="10,40" desc="Paradeisersauce · Mozzarella · Basilikum" />
        <MenuItem name="Prosciutto" price="12,40" desc="Paradeisersauce · Mozzarella · Schinken" />
        <MenuItem name="Prosciutto e Funghi" price="13,10" desc="Paradeisersauce · Mozzarella · Schinken · Champignons" />
        <MenuItem name="Bolognese" price="12,90" desc="Paradeisersauce · Mozzarella · Paradeiser-Fleischsauce" />
        <MenuItem name="Salami" price="12,40" desc="Paradeisersauce · Mozzarella · Salami" />

        <MenuItem name="Capricciosa" price="14,10" desc="Paradeisersauce · Mozzarella · Schinken · Champignons · Artischocken · Oliven" />
        <MenuItem name="Contese" price="14,40" desc="Paradeisersauce · Mozzarella · Schinken · Champignons · Salami · Ei" />
        <MenuItem name="Rusticana" price="14,10" desc="Paradeisersauce · Mozzarella · Schinken · Speck · Mais · Pfefferoni" />
        <MenuItem name="Casalinga" price="14,90" desc="Paradeisersauce · Mozzarella · Schinken · Salami · Zwiebel · Speck · Champignons" />
        <MenuItem name="Tonno" price="14,10" desc="Paradeisersauce · Mozzarella · Thunfisch · Zwiebel · Olive" />
        <MenuItem name="Frutti di Mare" price="16,10" desc="Paradeisersauce · Mozzarella · Meeresfrüchte · Muscheln" />
      </MenuSection>



      {/* ------------------------------------------------------
         PIZZA SPECIALE
      ------------------------------------------------------ */}
      <MenuSection title="Pizza · Speciale" columns={2}>
        <MenuItem name="Gamberetti e Rucola" price="16,40" desc="Paradeisersauce · Mozzarella · Garnelen · Zucchini · Oliven · Rucola · Zitrone" />
        <MenuItem name="Steira" price="14,90" desc="Paradeisersauce · Mozzarella · Speck · Zwiebel · Kernöl · Kürbiskerne · Ei" />
        <MenuItem name="Burrata" price="15,90" desc="Paradeisersauce · Mozzarella · Burrata · Olivenöl · Kirschparadeiser · Rucola · Prosciutto" />
        <MenuItem name="Brie e Crudo" price="14,40" desc="Paradeisersauce · Mozzarella · Brie · Prosciutto Crudo" />

        <div className="col-span-full mt-6 text-sm text-[#666] leading-relaxed">
          <p><span className="font-medium text-[var(--dark)]">Extras:</span> Burrata extra 3,90 € · Ei extra 1,00 €</p>
        </div>
      </MenuSection>



      {/* ------------------------------------------------------
         DESSERT
      ------------------------------------------------------ */}
      <MenuSection title="Das Süße zum Schluss">
        <MenuItem name="Pizza Dolce" price="12,90" desc="Nutella · Beeren · Schlag" />
        <MenuItem name="Gelato Amore" price="5,50" desc="Vanilleeis · Beeren · Schlag" />
        <MenuItem name="Gelato Styria" price="5,50" desc="Vanilleeis · kandierte Kürbiskerne · Kernöl · Schlag" />

        <div className="mt-8 space-y-2 text-sm text-[#666] leading-relaxed">
          <p>Für weitere Nachspeisen fragen Sie unser Personal.</p>
          <p>Für Speisenänderungen erlauben wir uns einen Aufwandszuschlag von 0,60 € zu verrechnen.</p>
          <p>Pizzakarton 0,60 €</p>
          <p className="text-xs">*** Über Allergene informiert Sie gerne unser Fachpersonal ***</p>
        </div>
      </MenuSection>

    </div>
  );
}

/* ------------------------------------------------------
   COMPONENTS
------------------------------------------------------ */
interface MenuSectionProps {
  title: string;
  subtitle?: string;
  columns?: 1 | 2;
  children: ReactNode;
}

function MenuSection({ title, subtitle, children, columns = 1 }: MenuSectionProps) {
  return (
    <FadeIn>
      <section className="space-y-6">

        <div>
          <h2 className="text-3xl font-cinzel text-[var(--dark)] mb-1">{title}</h2>
          {subtitle && (
            <p className="text-sm text-[#777] max-w-2xl mb-2">
              {subtitle}
            </p>
          )}
          <div className="w-16 h-[1px] bg-[rgba(237,146,97,0.35)] mb-6"></div>
        </div>

        <div
          className={
            columns === 2
              ? "grid md:grid-cols-2 gap-x-12 gap-y-6"
              : "space-y-6"
          }
        >
          {children}
        </div>

      </section>
    </FadeIn>
  );
}


interface MenuItemProps {
  name: string;
  price: string;
  desc?: string;
}

function MenuItem({ name, price, desc }: MenuItemProps) {
  return (
    <div className="flex justify-between items-start gap-4">
      <div className="max-w-md">
        <p className="text-lg font-medium text-[var(--dark)]">{name}</p>
        {desc && (
          <p className="text-sm text-[#666] leading-relaxed mt-1">{desc}</p>
        )}
      </div>

      <p className="text-lg font-semibold text-[var(--brand)] whitespace-nowrap">
        {price} €
      </p>
    </div>
  );
}
