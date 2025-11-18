"use client";

import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number; // ms
}

export default function FadeIn({ children, delay = 0 }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Übergangsverzögerung setzen
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      {
        root: null,
        threshold: 0.15, // etwas früher → smooth & flüssig
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="
        fade-in 
        opacity-0 
        translate-y-6 
        will-change-transform will-change-opacity
      "
    >
      {children}
    </div>
  );
}
