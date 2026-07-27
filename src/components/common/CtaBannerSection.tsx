import Link from "next/link";
import type { StaticImageData } from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ImageTextOverlay } from "./ImageTextOverlay";

interface CtaBannerSectionProps {
  heading: string;
  description: string;
  action?: {
    href: string;
    label: string;
  };
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  useBackgroundColor?: boolean;
  imageAspect?: "banner" | "auto";
}

export function CtaBannerSection({
  heading,
  description,
  action,
  imageSrc,
  imageAlt = "Call to action background",
  useBackgroundColor = false,
  imageAspect = "auto",
}: CtaBannerSectionProps) {
  const sectionSizeClass =
    imageAspect === "banner"
      ? "min-h-[240px] sm:min-h-[280px] lg:min-h-[320px]"
      : "";
  const hasImageBackground = !useBackgroundColor && Boolean(imageSrc);
  const headingClass = hasImageBackground
    ? "text-2xl font-semibold text-white sm:text-3xl"
    : "text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl";
  const descriptionClass = hasImageBackground
    ? "mt-4 text-sm leading-7 text-white/90 sm:text-base"
    : "mt-4 text-sm leading-7 text-[var(--text-primary)]/80 sm:text-base";

  return (
    <section
      className={`relative overflow-hidden rounded-3xl border border-[var(--border-color)] px-4 py-10 text-center sm:px-8 sm:py-12 ${sectionSizeClass}`}
      data-aos="fade-up"
    >
      {useBackgroundColor || !imageSrc ? (
        <div className="absolute inset-0 bg-[var(--surface-soft)]" />
      ) : (
        <>
          <div className="absolute inset-0">
            <ImagePlaceholder
              src={imageSrc}
              alt={imageAlt}
              label="CTA background image"
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
              objectPosition="object-center"
            />
          </div>
          <ImageTextOverlay variant="banner" />
        </>
      )}

      <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-1">
        <h2 className={headingClass}>{heading}</h2>
        <p className={descriptionClass}>{description}</p>
        {action ? (
          <Link
            href={action.href}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            {action.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
