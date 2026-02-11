import { useEffect } from "react";

export function useBirthdayOverlay(opts: {
  showBirthday: boolean;
  setShowBirthday: (v: boolean) => void;
  setAnimateBalloons: (v: boolean) => void;
  durationMs?: number;
}) {
  const {
    showBirthday,
    setShowBirthday,
    setAnimateBalloons,
    durationMs = 8000,
  } = opts;

  useEffect(() => {
    if (!showBirthday) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowBirthday(false);
    };

    window.addEventListener("keydown", onKeyDown);

    // Animation starten
    setAnimateBalloons(true);

    // Nach durationMs stoppen (aber Overlay bleibt offen, wie gewünscht)
    const timer = window.setTimeout(() => setAnimateBalloons(false), durationMs);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
      // Wichtig: beim Schließen sofort stoppen, damit nix "nachläuft"
      setAnimateBalloons(false);
    };
  }, [showBirthday, setShowBirthday, setAnimateBalloons, durationMs]);
}
