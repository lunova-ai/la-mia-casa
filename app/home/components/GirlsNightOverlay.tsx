import { useEffect, type CSSProperties } from "react";

export function GirlsNightOverlay({
  open,
  animateBubbles,
  onClose,
}: {
  open: boolean;
  animateBubbles: boolean;
  onClose: () => void;
}) {
  // 🔒 Globales Overlay-Flag (für WhatsApp Button & generell UI)
  useEffect(() => {
    if (!open) return;

    const prev = document.body.dataset.overlay;
    document.body.dataset.overlay = "open";
    window.dispatchEvent(new Event("overlay:change"));

    return () => {
      if (prev === undefined) delete document.body.dataset.overlay;
      else document.body.dataset.overlay = prev;

      window.dispatchEvent(new Event("overlay:change"));
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="overlay overlay--glow"
      role="dialog"
      aria-modal="true"
      aria-label="Mädlsabend Details"
      onClick={onClose}
    >
      <button
        type="button"
        className="overlay-close overlay-close--glass"
        aria-label="Schließen"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        ✕
      </button>

      <div className="popup popup--glass" onClick={(e) => e.stopPropagation()}>
        <p className="girls-eyebrow text-xs tracking-[0.28em] uppercase">
          Mädlsabend
        </p>

        <h2 className="girls-title mt-2 text-2xl md:text-3xl font-cinzel">
          🍸 Jeden Donnerstag
        </h2>

        <p className="girls-text mt-3 text-base md:text-lg leading-relaxed">
          Ab <span className="font-semibold">16 Uhr</span> – gratis Cocktail{" "}
          <span className="girls-muted">(mit &amp; ohne Alk.)</span>
        </p>

        <div className="girls-box mt-5 text-left">
          <p className="girls-text text-sm">
            📞 Reservierung:{" "}
            <a className="girls-link" href="tel:+436649238843">
              +43 664 923 8843
            </a>
          </p>
          <p className="girls-muted mt-1 text-sm">
            Oder schreib uns per WhatsApp / Kontaktformular.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 justify-center sticky bottom-0 bg-black/35 backdrop-blur -mx-[1.1rem] px-[1.1rem] py-3 border-t border-white/10">
          <a href="tel:+436649238843" className="btn-brand">
            Jetzt anrufen
          </a>
          <a href="/kontakt" className="btn-outline">
            Anfrage senden
          </a>
        </div>

        <p className="girls-muted mt-4 text-xs">
          Tipp: ESC oder Klick außerhalb schließt das Fenster.
        </p>
      </div>

      {animateBubbles && (
        <div className="bubble-layer" aria-hidden="true">
          {Array.from({ length: 16 }).map((_, i) => {
            const size = 16 + Math.random() * 55;

            return (
              <div
                key={i}
                className="bubble bubble-lux"
                style={
                  {
                    left: `${Math.random() * 95}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    animationDuration: `${9 + Math.random() * 7}s`,
                    animationDelay: `${Math.random() * 2}s`,

                    ["--dx1" as any]: `${-30 + Math.random() * 60}px`,
                    ["--dx2" as any]: `${-50 + Math.random() * 100}px`,
                    ["--dx3" as any]: `${-40 + Math.random() * 80}px`,
                  } as CSSProperties
                }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
