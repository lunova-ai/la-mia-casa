"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // ESC Close + Scroll Lock (robust + safe-area)
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  // Event Listener für externen Button
  useEffect(() => {
    const openFn = () => setOpen(true);
    window.addEventListener("mobile-menu:open", openFn);
    return () => window.removeEventListener("mobile-menu:open", openFn);
  }, []);

  return (
    <>
      {/* BACKDROP */}
      <div
        aria-hidden={!open}
        className={[
          "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-200",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setOpen(false)}
      />

      {/* MENU PANEL */}
      <aside
        className={[
          "fixed top-0 right-0 z-50 h-full w-[86vw] max-w-sm",
          "bg-white/95 backdrop-blur-xl shadow-xl",
          "transform transition-transform duration-300 will-change-transform",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        role="dialog"
        aria-modal="true"
        aria-label="Mobiles Menü"
      >
        {/* Safe-area + Layout */}
        <div
          className="
            h-full
            flex flex-col
            px-7
            pt-[max(22px,env(safe-area-inset-top))]
            pb-[max(18px,env(safe-area-inset-bottom))]
          "
        >
          {/* HEADER */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <span className="font-cinzel text-2xl tracking-wide text-[var(--dark)]">
              La mia Casa
            </span>

            <button
              type="button"
              aria-label="Menü schließen"
              onClick={() => setOpen(false)}
              className="
                rounded-xl
                px-3 py-2
                text-3xl leading-none
                text-[var(--dark)]
                active:scale-95
                focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
              "
            >
              ✕
            </button>
          </div>

          {/* Linie */}
          <div className="w-full h-px bg-[rgba(237,146,97,0.28)] mb-8" />

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-6 text-xl font-medium text-[var(--dark)]">
            <MobileLink href="/speisekarte" close={() => setOpen(false)}>
              Speisekarte
            </MobileLink>
            <MobileLink href="/team" close={() => setOpen(false)}>
              Über uns
            </MobileLink>
            <MobileLink href="/extras" close={() => setOpen(false)}>
              Extras
            </MobileLink>
            <MobileLink href="/kontakt" close={() => setOpen(false)}>
              Kontakt
            </MobileLink>
          </nav>

          {/* Optionaler Footer-Hint (fühlt sich “App-like” an) */}
          <div className="mt-auto pt-10 text-sm text-[#666]">
            Tipp: Tippe außerhalb, um zu schließen.
          </div>
        </div>
      </aside>
    </>
  );
}

/* ------ Sauberer Nav-Link (Hover nur Desktop) ------ */
function MobileLink({
  href,
  children,
  close,
}: {
  href: string;
  children: ReactNode;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="
        relative pb-1
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
        focus-visible:ring-offset-2 focus-visible:ring-offset-white
        rounded-md

        after:content-[''] after:absolute after:left-0 after:bottom-0
        after:h-[2px] after:w-0 after:bg-[var(--brand)]
        after:transition-all after:duration-300
        sm:hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}
