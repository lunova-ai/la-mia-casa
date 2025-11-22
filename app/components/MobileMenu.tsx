"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  // ESC Close + Scroll Lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
      window.addEventListener("keydown", onKey);
      return () => {
        window.removeEventListener("keydown", onKey);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  return (
    <>
      {/* OPEN BUTTON */}
      <button
        className="
          md:hidden text-[var(--dark)] text-4xl fixed top-4 right-4 z-50 
          transition active:scale-95
        "
        aria-label="Menü öffnen"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* BACKDROP */}
      <div
        aria-hidden={!open}
        className={`
          fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 z-40 
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* MENU PANEL */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-3/4 max-w-sm z-50
          bg-white/95 backdrop-blur-xl shadow-xl p-8
          transform transition-transform duration-500 will-change-transform
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">
          <span className="font-cinzel text-2xl tracking-wide text-[var(--dark)]">
            La mia Casa
          </span>

          {/* CLOSE BUTTON */}
          <button
            aria-label="Menü schließen"
            onClick={() => setOpen(false)}
            className="text-3xl text-[var(--dark)] active:scale-90"
          >
            ✕
          </button>
        </div>

        {/* LINE */}
        <div className="w-full h-[1px] bg-[rgba(237,146,97,0.35)] mb-10"></div>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-7 text-xl font-medium text-[var(--dark)]">
          <MobileLink href="/speisekarte" close={() => setOpen(false)}>Küche</MobileLink>
          <MobileLink href="/team" close={() => setOpen(false)}>Team</MobileLink>
          <MobileLink href="/kontakt" close={() => setOpen(false)}>Kontakt</MobileLink>
        </nav>
      </aside>
    </>
  );
}

/* MOBILE LINK – edle Unterstreichung */
function MobileLink({
  href,
  children,
  close,
}: {
  href: string;
  children: string;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={close}
      className="
        relative pb-1
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-[2px] after:w-0 after:bg-[var(--brand)]
        after:transition-all after:duration-300
        hover:after:w-full
      "
    >
      {children}
    </Link>
  );
}

