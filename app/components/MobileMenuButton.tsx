"use client";

export default function MobileMenuButton() {
  const openMenu = () => {
    window.dispatchEvent(new CustomEvent("mobile-menu:open"));
  };

  return (
    <button
      aria-label="Menü öffnen"
      onClick={openMenu}
      className="
        md:hidden text-4xl text-dark 
        hover:text-gold transition-colors 
        active:scale-90 
        touch-manipulation
      "
    >
      ☰
    </button>
  );
}
