"use client";

import { useEffect, useState } from "react";

export default function WhatsAppButton({ phone }: { phone: string }) {
  const cleaned = phone.replace(/[^\d]/g, "");

  // Beobachtet: wenn irgendein Overlay offen ist → Button ausblenden
  const [overlayOpen, setOverlayOpen] = useState(false);

  useEffect(() => {
    const read = () => {
      setOverlayOpen(document.body.dataset.overlay === "open");
    };

    read();

    // Reagiert auf Änderungen (wir dispatchen gleich ein Event aus den Overlays)
    window.addEventListener("overlay:change", read);
    return () => window.removeEventListener("overlay:change", read);
  }, []);

  return (
    <a
      href={`https://wa.me/${cleaned}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Nachricht senden"
      className={`
        fixed
        right-[max(16px,env(safe-area-inset-right))]
        bottom-[calc(16px+env(safe-area-inset-bottom))]
        z-40

        h-14 w-14 sm:h-[52px] sm:w-[52px]
        rounded-full

        bg-[var(--brand)]
        flex items-center justify-center

        shadow-lg
        border border-[#f7b08b]

        transition-all duration-200
        active:scale-95

        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
        focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream)]

        [touch-action:manipulation]
        [-webkit-tap-highlight-color:transparent]

        ${overlayOpen ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100"}
      `}
    >
      <span className="sr-only">WhatsApp Nachricht senden</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3.52 20.48l1.13-4.13a8 8 0 111.94 1.94l-4.13 1.13z" />
        <path d="M16.24 14.83a4.4 4.4 0 00-2-.55c-.11 0-.26.02-.4.05-.43.1-.98.33-1.31.53-.24.14-.41.25-.6.22-.18-.02-.39-.18-.83-.69-.63-.7-.99-1.28-1.11-1.46-.16-.27-.01-.42.12-.57.13-.15.28-.33.42-.51.14-.18.2-.3.3-.49.1-.19.05-.36-.03-.52-.09-.17-.79-1.9-1.09-2.6-.29-.71-.59-.6-.81-.6-.21 0-.46-.03-.71-.03s-.52.05-.8.37c-.27.32-1.06 1.04-1.06 2.52 0 1.48 1.08 2.91 1.24 3.11.15.21 2.13 3.25 5.2 4.55 3.07 1.3 3.07.87 3.62.82.55-.06 1.79-.72 2.04-1.42.25-.7.25-1.31.18-1.42-.07-.1-.25-.17-.52-.3z" />
      </svg>

      {/* Hover nur Desktop */}
      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          a:hover {
            background: var(--brand-dark);
            box-shadow: 0 0 18px rgba(237, 146, 97, 0.35);
            transform: translateY(-1px);
          }
        }
      `}</style>
    </a>
  );
}

