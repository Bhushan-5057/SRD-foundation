import Link from "next/link";
import type { StaticImageData } from "next/image";
import { FiCheck } from "react-icons/fi";
import { ImagePlaceholder } from "./ImagePlaceholder";

interface SplitAction {
  href: string;
  label: string;
}

interface SplitContentSectionProps {
  badge?: string;
  heading: string;
  paragraphs?: readonly string[];
  text?: string;
  secondaryHeading?: string;
  secondaryText?: string;
  listTitle?: string;
  bullets?: readonly string[];
  numberedList?: readonly string[];
  action?: SplitAction;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  imageLabel?: string;
  imageAspect?: "split" | "auto";
  imageFit?: "cover" | "contain";
  reverse?: boolean;
  checkBullets?: boolean;
}

export function SplitContentSection({
  badge,
  heading,
  paragraphs = [],
  text,
  secondaryHeading,
  secondaryText,
  listTitle,
  bullets = [],
  numberedList = [],
  action,
  imageSrc,
  imageAlt = "Section image",
  imageLabel = "Image placeholder",
  imageAspect = "split",
  imageFit = "cover",
  reverse = false,
  checkBullets = false,
}: SplitContentSectionProps) {
  const bodyParagraphs = paragraphs.length > 0 ? paragraphs : text ? [text] : [];
  const imageFrameClass =
    imageAspect === "split"
      ? `relative aspect-[4/3] w-full min-w-0 overflow-hidden rounded-2xl border border-[var(--border-color)] sm:aspect-[3/2] ${
          imageFit === "contain" ? "bg-[var(--surface-soft)]" : "bg-[var(--surface)]"
        }`
      : "relative min-h-[220px] w-full min-w-0 overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] sm:min-h-[300px]";

  return (
    <section className="rounded-3xl px-0 py-2 sm:px-2">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-10">
        <div
          className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}
          data-aos={reverse ? "fade-left" : "fade-right"}
        >
          {badge ? (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
              {badge}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl">
            {heading}
          </h2>
          <div className="mt-4 space-y-4">
            {bodyParagraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {secondaryHeading ? (
            <h3 className="mt-6 text-xl font-semibold text-[var(--text-primary)] sm:text-2xl">
              {secondaryHeading}
            </h3>
          ) : null}
          {secondaryText ? (
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{secondaryText}</p>
          ) : null}

          {listTitle ? (
            <p className="mt-5 text-sm font-semibold text-[var(--text-primary)] sm:text-base">{listTitle}</p>
          ) : null}

          {bullets.length > 0 ? (
            <ul className={`${listTitle ? "mt-3" : "mt-5"} space-y-3`}>
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[var(--text-primary)] sm:text-base">
                  {checkBullets ? (
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)]/15 text-[var(--brand-primary)]">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-secondary)]" />
                  )}
                  <span className="leading-7 text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {numberedList.length > 0 ? (
            <ol className="mt-5 space-y-3">
              {numberedList.map((item, index) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-base">
                  {checkBullets ? (
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)]/15 text-[var(--brand-primary)]">
                      <FiCheck className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)] text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                  )}
                  <span className="leading-7 text-[var(--text-muted)]">{item}</span>
                </li>
              ))}
            </ol>
          ) : null}

          {action ? (
            <Link
              href={action.href}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              {action.label}
            </Link>
          ) : null}
        </div>

        <div
          className={`${imageFrameClass} ${reverse ? "lg:order-1" : ""}`}
          data-aos={reverse ? "fade-right" : "fade-left"}
        >
          {imageFit === "contain" ? (
            <div className="absolute inset-6 sm:inset-8">
              <ImagePlaceholder
                src={imageSrc}
                alt={imageAlt}
                label={imageLabel}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
                objectPosition="object-center"
                objectFit="contain"
              />
            </div>
          ) : (
            <ImagePlaceholder
              src={imageSrc}
              alt={imageAlt}
              label={imageLabel}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 560px"
              objectPosition="object-center"
              objectFit="cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
