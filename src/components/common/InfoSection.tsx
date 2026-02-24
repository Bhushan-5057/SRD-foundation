import Link from "next/link";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";

interface InfoSectionProps {
  heading: string;
  text: string;
  imagePlaceholder: string;
  action?: {
    href: string;
    label: string;
  };
  bullets?: readonly string[];
  reverse?: boolean;
  compact?: boolean;
}

export function InfoSection({
  heading,
  text,
  imagePlaceholder,
  action,
  bullets = [],
  reverse = false,
  compact = false,
}: InfoSectionProps) {
  return (
    <section className="rounded-3xl p-5 sm:p-7">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
        <div className={reverse ? "lg:order-2" : ""}>
          <h2 className={compact ? "text-2xl font-semibold text-[var(--text-primary)]" : "text-3xl font-semibold text-[var(--text-primary)]"}>
            {heading}
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{text}</p>

          {bullets.length > 0 ? (
            <ul className="mt-4 space-y-2">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-primary)] sm:text-base">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand-secondary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}

          {action ? (
            <Link
              href={action.href}
              className="mt-5 inline-flex rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            >
              {action.label}
            </Link>
          ) : null}
        </div>

        <ImagePlaceholder label={imagePlaceholder} className={reverse ? "lg:order-1" : ""} />
      </div>
    </section>
  );
}
