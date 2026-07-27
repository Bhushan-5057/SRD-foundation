interface ImageTextOverlayProps {
  /** hero = left-weighted for titles; banner = even wash for centered CTA copy */
  variant?: "hero" | "banner";
}

/**
 * Dark overlays for text sitting on photo backgrounds.
 * ~40–55% opacity keeps images visible while ensuring readable contrast.
 */
export function ImageTextOverlay({ variant = "hero" }: ImageTextOverlayProps) {
  if (variant === "banner") {
    return (
      <div
        className="absolute inset-0 bg-black/50 sm:bg-black/45 lg:bg-black/40"
        aria-hidden
      />
    );
  }

  return (
    <>
      {/* Even dark wash across the photo */}
      <div
        className="absolute inset-0 bg-black/50 sm:bg-black/45 lg:bg-black/40"
        aria-hidden
      />
      {/* Slight extra depth on the text side without over-darkening the photo */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent"
        aria-hidden
      />
    </>
  );
}
