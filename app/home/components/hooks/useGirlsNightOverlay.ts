import { useEffect } from "react";

export function useGirlsNightOverlay(opts: {
  showGirlsNight: boolean;
  setShowGirlsNight: (v: boolean) => void;
  setAnimateBubbles: (v: boolean) => void;
  durationMs?: number;
}) {
  const {
    showGirlsNight,
    setShowGirlsNight,
    setAnimateBubbles,
    durationMs = 9000,
  } = opts;

  useEffect(() => {
    if (!showGirlsNight) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowGirlsNight(false);
    };

    window.addEventListener("keydown", onKeyDown);

    // Animation starten
    setAnimateBubbles(true);

    // Nach durationMs stoppen (Overlay bleibt offen)
    const timer = window.setTimeout(() => setAnimateBubbles(false), durationMs);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
      // Wichtig: beim Schließen sofort stoppen, damit nix "nachläuft"
      setAnimateBubbles(false);
    };
  }, [showGirlsNight, setShowGirlsNight, setAnimateBubbles, durationMs]);
}

