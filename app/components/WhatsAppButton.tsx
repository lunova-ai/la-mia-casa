"use client";

export default function WhatsAppButton({ phone = "+436449238843" }) {
  return (
    <a
      href={`https://wa.me/${phone.replace("+", "")}`}
      target="_blank"
      aria-label="WhatsApp Nachricht senden"
      className="
        fixed bottom-6 right-6 z-50 
        w-14 h-14
        rounded-full
        flex items-center justify-center
        bg-dark text-cream 
        border border-gold
        shadow-[0_0_20px_rgba(212,168,87,0.35)]
        hover:shadow-[0_0_32px_rgba(212,168,87,0.55)]
        transition-all duration-300
        hover:scale-110 hover:bg-gold hover:text-dark
      "
    >
      {/* Edles Icon statt Emoji */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-7 h-7"
      >
        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.05 0C5.66 0 .48 5.18.48 11.55c0 2.03.53 4.01 1.54 5.77L0 24l6.87-1.99c1.67.91 3.55 1.38 5.48 1.38h.01c6.39 0 11.57-5.17 11.57-11.55 0-3.08-1.2-5.98-3.41-8.21ZM12.36 21.3h-.01c-1.69 0-3.34-.45-4.79-1.31l-.34-.2-4.07 1.17 1.18-3.96-.22-.37a9.53 9.53 0 0 1-1.45-5.11c0-5.28 4.31-9.58 9.6-9.58 2.56 0 4.97 1 6.78 2.8a9.58 9.58 0 0 1 2.82 6.79c0 5.28-4.31 9.58-9.6 9.58Zm5.37-7.24c-.3-.15-1.78-.88-2.05-.98-.27-.1-.47-.15-.67.15-.19.3-.77.98-.94 1.18-.17.2-.35.22-.65.07-1.76-.88-2.92-1.57-4.1-3.55-.31-.53.31-.49.9-1.64.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.57-.48-.5-.66-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.48 1.06 2.91 1.21 3.11.15.2 2.08 3.18 5.04 4.47.7.3 1.24.47 1.66.6.7.22 1.33.19 1.83.12.56-.08 1.78-.73 2.03-1.43.25-.7.25-1.29.17-1.43-.07-.15-.28-.24-.57-.39Z" />
      </svg>
    </a>
  );
}
