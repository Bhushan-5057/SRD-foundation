"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ImageTextOverlay } from "./ImageTextOverlay";

interface HeroAction {
  href: string;
  label: string;
}

interface HomeHeroSlide {
  src?: string | StaticImageData;
  alt: string;
}

interface HomeHeroSectionProps {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: HeroAction;
  slides?: HomeHeroSlide[];
}

const DEFAULT_SLIDES: HomeHeroSlide[] = [
  { alt: "Community care slide 1" },
  { alt: "Community care slide 2" },
  { alt: "Community care slide 3" },
];

const FULL_BLEED_CLASS =
  "relative left-1/2 right-1/2 -ml-[50vw] w-screen max-w-[100vw] -mt-8 md:-mt-10";

export function HomeHeroSection({
  eyebrow,
  title,
  description,
  primaryAction,
  slides = DEFAULT_SLIDES,
}: HomeHeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const safeSlides = slides.length > 0 ? slides : DEFAULT_SLIDES;

  useEffect(() => {
    if (safeSlides.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [safeSlides.length]);

  return (
    <section
      className={`${FULL_BLEED_CLASS} overflow-hidden min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]`}
    >
      {safeSlides.map((slide, index) => (
        <div
          key={`${slide.alt}-${index}`}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== activeIndex}
        >
          <ImagePlaceholder
            src={slide.src}
            alt={slide.alt}
            priority={index === 0}
            label={`Hero image ${index + 1}`}
            sizes="100vw"
            objectPosition="object-[center_35%] sm:object-center"
          />
        </div>
      ))}

      <ImageTextOverlay variant="hero" />

      <div className="relative z-10 mx-auto flex h-full min-h-[420px] w-full max-w-6xl items-center px-4 py-12 sm:min-h-[520px] sm:px-6 sm:py-14 lg:min-h-[580px] lg:py-16">
        <div className="max-w-2xl">
          <p
            data-aos="fade-up"
            className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]"
          >
            {eyebrow}
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base"
          >
            {description}
          </p>
          <div data-aos="fade-up" data-aos-delay="300" className="mt-7">
            <Link
              href={primaryAction.href}
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {primaryAction.label}
            </Link>
          </div>

          {safeSlides.length > 1 ? (
            <div className="mt-8 flex items-center gap-2" role="tablist" aria-label="Hero slides">
              {safeSlides.map((slide, index) => (
                <button
                  key={`dot-${slide.alt}-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-7 bg-white"
                      : "w-2.5 bg-white/40 hover:bg-[var(--brand-secondary)]"
                  }`}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
