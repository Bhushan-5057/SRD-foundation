"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const MIN_VISIBLE_MS = 650;
const FADE_DURATION_MS = 280;

type LoaderPhase = "loading" | "fading" | "hidden";

export function PageLoader() {
  const [phase, setPhase] = useState<LoaderPhase>("loading");

  useEffect(() => {
    const startedAt = Date.now();
    let fadeStartTimer: ReturnType<typeof setTimeout> | undefined;
    let hiddenTimer: ReturnType<typeof setTimeout> | undefined;

    const beginFade = () => {
      const elapsed = Date.now() - startedAt;
      const waitMs = Math.max(0, MIN_VISIBLE_MS - elapsed);

      fadeStartTimer = setTimeout(() => {
        setPhase("fading");
        hiddenTimer = setTimeout(() => {
          setPhase("hidden");
        }, FADE_DURATION_MS);
      }, waitMs);
    };

    if (document.readyState === "complete") {
      beginFade();
    } else {
      window.addEventListener("load", beginFade, { once: true });
    }

    return () => {
      window.removeEventListener("load", beginFade);
      if (fadeStartTimer) {
        clearTimeout(fadeStartTimer);
      }
      if (hiddenTimer) {
        clearTimeout(hiddenTimer);
      }
    };
  }, []);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[1200] flex flex-col items-center justify-center bg-[var(--background)] transition-opacity duration-300 ${
        phase === "fading" ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex h-24 w-24 items-center justify-center">
        <span className="absolute inset-0 animate-spin rounded-full border-4 border-[var(--brand-primary)] border-t-[var(--brand-secondary)]" />
        <span className="absolute inset-2 animate-spin rounded-full border-2 border-[var(--brand-secondary)] border-b-[var(--brand-primary)] [animation-direction:reverse] [animation-duration:1.1s]" />
        <div className="relative h-14 w-14 overflow-hidden rounded-full bg-[var(--surface)] shadow-md">
          <Image src="/assets/srdlogo.png" alt="SRD Foundation logo" fill priority className="object-contain p-1.5" />
        </div>
      </div>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--brand-primary)]">Loading</p>
    </div>
  );
}
