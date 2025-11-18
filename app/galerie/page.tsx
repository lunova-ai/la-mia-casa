"use client";

import { useState } from "react";
import FadeIn from "../components/FadeIn";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";

// Bilderliste (100% sicher, kompatibel & SEO-optimiert)
const images = [
  {
    src: "/pizza-prosciutto-brie.jpg",
    alt: "Holzofenpizza mit Prosciutto und geschmolzenem Brie im La mia Casa"
  },
  {
    src: "/pizza-nero-gamberi.jpg",
    alt: "Schwarzer Pizzateig mit Garnelen, Zucchini und Zitronenscheiben"
  },
  {
    src: "/pasta-cozze.jpg",
    alt: "Mediterrane Pasta mit frischen Miesmuscheln im La mia Casa"
  },
  {
    src: "/pizza-nero-gamberi-2.jpg",
    alt: "Schwarze Pizza mit Garnelen und Rucola – Spezialität des Hauses"
  },
  {
    src: "/pizza-mais-paprika.jpg",
    alt: "Holzofenpizza mit Mais, Schinken und Peperoni"
  },
  {
    src: "/la-mia-casa-hero.jpg",
    alt: "La mia Casa Außenansicht am Hauptplatz"
  },
  {
    src: "/la-mia-casa-ofen.jpg",
    alt: "Holzofen im La mia Casa Hartberg"
  },
  {
    src: "/la-mia-casa-auto.jpg",
    alt: "Fiat 500 vor dem Restaurant La mia Casa"
  }
];

export default function Galerie() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [filter, setFilter] = useState("alle");

  // Einfacher Filter, kein externes Package
  const filteredImages = images.filter((img) => {
    if (filter === "pizza") return img.alt.toLowerCase().includes("pizza");
    if (filter === "pasta") return img.alt.toLowerCase().includes("pasta");
    if (filter === "ambiente") return img.alt.toLowerCase().includes("la mia casa");
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">

      {/* HEADER */}
      <FadeIn>
        <p className="text-xs tracking-[0.25em] uppercase text-gold mb-3">
          Eindrücke · Ambiente · Küche
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-dark mb-4">
          Galerie
        </h1>

        <p className="text-lg text-[#555] max-w-2xl leading-relaxed">
          Einblicke in Atmosphäre, Küche, Drinks und besondere Momente  
          des La mia Casa am Hauptplatz in Hartberg.
        </p>
      </FadeIn>

      {/* DIVIDER */}
      <FadeIn>
        <div className="section-divider"></div>
      </FadeIn>

      {/* FILTER */}
      <FadeIn>
        <div className="flex gap-4 mt-6 flex-wrap">
          {["alle", "pizza", "pasta", "ambiente"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full border text-sm transition
                ${
                  filter === f
                    ? "bg-gold text-dark border-gold"
                    : "border-[#ccc] text-[#555] hover:border-gold hover:text-gold"
                }
              `}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </FadeIn>

      {/* GRID – Masonry, lazy, ohne externe libs */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6 mt-10">
        {filteredImages.map((img, i) => (
          <FadeIn key={i}>
            <div
              className="break-inside-avoid mb-6 cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.015]"
              onClick={() => {
                setIndex(i);
                setOpen(true);
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={800}
                height={600}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </FadeIn>
        ))}
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={filteredImages}
        animation={{ fade: 250 }}
        controller={{ closeOnBackdropClick: true }}
      />
    </div>
  );
}

