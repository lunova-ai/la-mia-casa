"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  /* ▸ ESC schließen + Body Scroll Lock */
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; // scroll lock
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
      {/* MOBILE MENU BUTTON */}
      <button
        className="
          md:hidden text-4xl text-dark fixed top-4 right-4 z-50 
          transition hover:text-gold active:scale-95
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
          fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 z-40 
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* SLIDE-IN MENU */}
      <aside
        className={`
          fixed top-0 right-0 w-3/4 max-w-sm h-full 
          bg-white/95 backdrop-blur-xl shadow-2xl z-50 p-8 flex flex-col 
          transform transition-transform duration-500 will-change-transform
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
      >
        {/* CLOSE BUTTON */}
        <button
          className="
            text-4xl text-dark self-end mb-10 
            hover:text-gold transition active:scale-90
          "
          aria-label="Menü schließen"
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {/* NAVIGATION */}
        <nav className="flex flex-col gap-8 text-2xl font-light">
          <MobileLink href="/speisekarte" label="Küche" close={() => setOpen(false)} />
          <MobileLink href="/events" label="Events" close={() => setOpen(false)} />
          <MobileLink href="/galerie" label="Galerie" close={() => setOpen(false)} />
          <MobileLink href="/team" label="Team" close={() => setOpen(false)} />
          <MobileLink href="/kontakt" label="Kontakt" close={() => setOpen(false)} />
        </nav>
      </aside>
    </>
  );
}

/* Reusable Nav Link with nicer UX */
function MobileLink({
  href,
  label,
  close,
}: {
  href: string;
  label: string;
  close: () => void;
}) {
  return (
    <Link
      href={href}
      className="
        hover:text-gold transition 
        focus:outline-none focus:text-gold
      "
      onClick={close}
    >
      {label}
    </Link>
  );
}
