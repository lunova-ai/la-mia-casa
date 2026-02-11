"use client";

export default function MobileMenuButton() {
  const openMenu = () => {
    window.dispatchEvent(new CustomEvent("mobile-menu:open"));
  };

  return (
    <button
      type="button"
      aria-label="Menü öffnen"
      onClick={openMenu}
      className="
        md:hidden
        inline-flex items-center justify-center
        rounded-xl
        h-11 w-11
        text-[var(--dark)]
        transition
        active:scale-95
        focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)]
        focus-visible:ring-offset-2 focus-visible:ring-offset-white
        [touch-action:manipulation]
        [-webkit-tap-highlight-color:transparent]
      "
    >
      <span className="text-3xl leading-none">☰</span>
    </button>
  );
}
