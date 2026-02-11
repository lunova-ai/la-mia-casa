"use client";

type IconName = "calendar" | "pizza" | "snow" | "party" | "cocktail";

type Props = {
  kicker: string;
  title: string;
  meta: string;
  text: string;
  hint?: string;
  icon: IconName;
  onClick?: () => void;
  disabled?: boolean;
};

/** Kleine Helper: kein extra Dependency (clsx) nötig */
function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

function TileIcon({ icon }: { icon: IconName }) {
  const common = "h-5 w-5";

  switch (icon) {
    case "calendar":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M7 2v3M17 2v3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M3.5 9h17"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6 6.5h12a2.5 2.5 0 0 1 2.5 2.5v10A2.5 2.5 0 0 1 18 21.5H6A2.5 2.5 0 0 1 3.5 19V9A2.5 2.5 0 0 1 6 6.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      );

    case "pizza":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 3c4.7 0 8.7 1.8 10 3.2L12 21 2 6.2C3.3 4.8 7.3 3 12 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 3v18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="9" cy="9" r="1" fill="currentColor" />
          <circle cx="14" cy="11" r="1" fill="currentColor" />
          <circle cx="11" cy="14" r="1" fill="currentColor" />
        </svg>
      );

    case "party":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 20l5-16 11 11-16 5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M13 7l4 4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M6.5 14.5l3 3"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "cocktail":
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 3h16l-6 7v9a3 3 0 0 1-6 0v-9L4 3Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M9 21h6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );

    case "snow":
    default:
      return (
        <svg
          className={common}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2v20M4 6l16 12M20 6 4 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}

export function HighlightTile({
  kicker,
  title,
  meta,
  text,
  hint,
  icon,
  onClick,
  disabled = false,
}: Props) {
  const hasAction = typeof onClick === "function" && !disabled;

  return (
    <button
      type="button"
      onClick={hasAction ? onClick : undefined}
      disabled={!hasAction}
      aria-disabled={!hasAction}
      className={cx(
        // base
        "group w-full text-left rounded-2xl border border-[#e9e4dc] bg-white/80 p-4",
        "shadow-[0_10px_25px_rgba(0,0,0,0.05)]",
        // motion / focus
        "transition",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--cream)]",
        // touch
        "[touch-action:manipulation] active:scale-[0.985]",
        // disabled
        !hasAction &&
          "opacity-70 cursor-default active:scale-100 pointer-events-none"
      )}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 rounded-xl bg-[var(--brand)]/15 text-[var(--brand)] p-2">
          <TileIcon icon={icon} />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--brand)]">
            {kicker}
          </p>

          <h3 className="mt-1 font-semibold text-[var(--dark)] text-base">
            {title}
          </h3>

          <div className="mt-2 inline-flex items-center rounded-full bg-[var(--brand)]/10 px-2.5 py-1 text-xs text-[var(--brand-dark)]">
            {meta}
          </div>
        </div>
      </div>

      <p className="mt-3 text-sm text-[#555] leading-relaxed">{text}</p>

      {hint ? (
        <p
          className={`
            mt-3 text-sm font-semibold text-[var(--brand)]
            sm:group-hover:text-[var(--brand-dark)]
            sm:group-hover:translate-x-[2px]
            transition
          `}
        >
          {hint}
        </p>
      ) : null}

      {/* Hover nur Desktop (keine Touch-Probleme) */}
      <style jsx>{`
        @media (hover: hover) and (pointer: fine) {
          button:hover {
            transform: translateY(-2px);
            box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          }
        }
      `}</style>
    </button>
  );
}


