import type { StaticImageData } from "next/image";
import { ImagePlaceholder } from "./ImagePlaceholder";
import { ImageTextOverlay } from "./ImageTextOverlay";

interface PageHeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
}

const FULL_BLEED_CLASS =
  "relative left-1/2 right-1/2 -ml-[50vw] w-screen max-w-[100vw] -mt-8 md:-mt-10";

export function PageHeroSection({
  title,
  subtitle,
  imageSrc,
  imageAlt = "Page hero background",
}: PageHeroSectionProps) {
  return (
    <section
      className={`${FULL_BLEED_CLASS} overflow-hidden min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]`}
    >
      <div className="absolute inset-0">
        <ImagePlaceholder
          src={imageSrc}
          alt={imageAlt}
          priority
          label="Page hero image"
          sizes="100vw"
          objectPosition="object-[center_35%] sm:object-center"
        />
      </div>
      <ImageTextOverlay variant="hero" />

      <div className="relative z-10 mx-auto flex min-h-[260px] w-full max-w-6xl items-center px-4 py-12 sm:min-h-[320px] sm:px-6 lg:min-h-[380px]">
        <div className="max-w-3xl">
          <h1
            data-aos="fade-up"
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title}
          </h1>
          {subtitle ? (
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-3 max-w-2xl text-sm leading-7 text-white/90 sm:text-base"
            >
              {subtitle}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
