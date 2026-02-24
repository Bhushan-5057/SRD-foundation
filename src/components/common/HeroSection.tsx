import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

interface HeroAction {
  href: string;
  label: string;
}

interface HeroImageSlot {
  src?: string | StaticImageData;
  alt: string;
  href?: string;
}

interface HeroSectionProps {
  sectionLabel?: string;
  title: string;
  highlightText?: string;
  description: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  extraActions?: HeroAction[];
  tags?: readonly string[];
  imageSlots?: HeroImageSlot[];
}

const IMAGE_POSITION_CLASSES = [
  "sm:col-start-1 sm:row-start-1",
  "sm:col-start-2 sm:row-start-1",
  "sm:col-start-1 sm:row-start-3",
  "sm:col-start-2 sm:row-start-2",
] as const;

function getImageLayoutClass(index: number) {
  const isTall = index === 0 || index === 3;
  return `${IMAGE_POSITION_CLASSES[index]} ${isTall ? "sm:row-span-2" : "sm:row-span-1"}`;
}

function renderTitle(title: string, highlightText?: string) {
  if (!highlightText) return title;

  const start = title.toLowerCase().indexOf(highlightText.toLowerCase());
  if (start === -1) return title;

  const end = start + highlightText.length;
  return (
    <>
      {title.slice(0, start)}
      <span className="text-[var(--brand-secondary)]">{title.slice(start, end)}</span>
      {title.slice(end)}
    </>
  );
}

export function HeroSection({
  sectionLabel,
  title,
  highlightText,
  description,
  primaryAction,
  secondaryAction,
  extraActions = [],
  tags = [],
  imageSlots = [],
}: HeroSectionProps) {
  const slots: HeroImageSlot[] = Array.from({ length: 4 }, (_, index) => {
    const provided = imageSlots[index];
    return {
      src: provided?.src,
      href: provided?.href,
      alt: provided?.alt ?? `Hero image slot ${index + 1}`,
    };
  });

  return (
    <section className="relative overflow-hidden rounded-3xl px-5 py-7 sm:px-8 sm:py-10 lg:px-10">
      <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-[var(--brand-primary)]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-2 h-52 w-52 rounded-full bg-[var(--brand-secondary)]/18 blur-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="max-w-xl">
          {sectionLabel ? (
            <p
              data-aos="fade-up"
              className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]"
            >
              {sectionLabel}
            </p>
          ) : null}

          <h1
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl font-semibold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            {renderTitle(title, highlightText)}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 max-w-lg text-sm leading-7 text-[var(--text-muted)] sm:text-base"
          >
            {description}
          </p>

          {primaryAction || secondaryAction || extraActions.length > 0 ? (
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              {primaryAction ? (
                <Link
                  href={primaryAction.href}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                >
                  {primaryAction.label}
                </Link>
              ) : null}
              {secondaryAction ? (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
                >
                  {secondaryAction.label}
                </Link>
              ) : null}
              {extraActions.map((action) => (
                <Link
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
                >
                  {action.label}
                </Link>
              ))}
            </div>
          ) : null}

          {tags.length > 0 ? (
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] sm:text-sm"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-secondary)]" />
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[120px]">
          {slots.map((slot, index) => {
            const media = slot.src ? (
              <Image
                src={slot.src}
                alt={slot.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                priority={index === 0}
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[var(--surface-soft)] text-xs font-medium text-[var(--text-muted)]">
                Add image {index + 1}
              </div>
            );

            const sharedClassName = `group relative overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] min-h-[180px] sm:min-h-[120px] ${getImageLayoutClass(index)}`;
            return slot.href ? (
              <Link
                key={`${slot.alt}-${index}`}
                href={slot.href}
                className={sharedClassName}
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 200}
              >
                {media}
              </Link>
            ) : (
              <article
                key={`${slot.alt}-${index}`}
                className={sharedClassName}
                data-aos="zoom-in"
                data-aos-delay={index * 100 + 200}
              >
                {media}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
