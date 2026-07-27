import type { IconType } from "react-icons";

export interface IconFeatureCard {
  title: string;
  description: string;
  icon: IconType;
}

interface IconFeatureCardsProps {
  badge?: string;
  heading?: string;
  description?: string;
  cards: readonly IconFeatureCard[];
  columns?: 2 | 3 | 4 | 5;
}

export function IconFeatureCards({
  badge,
  heading,
  description,
  cards,
  columns = 3,
}: IconFeatureCardsProps) {
  const gridClass =
    columns === 2
      ? "sm:grid-cols-2"
      : columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : columns === 5
          ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
          : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="space-y-6" data-aos="fade-up">
      {heading || description || badge ? (
        <div className="mx-auto max-w-3xl text-center">
          {badge ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
              {badge}
            </p>
          ) : null}
          {heading ? (
            <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
              {heading}
            </h2>
          ) : null}
          {description ? (
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{description}</p>
          ) : null}
          <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
        </div>
      ) : null}

      <div className={`grid gap-4 ${gridClass}`}>
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <article
              key={card.title}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface)] text-[var(--brand-primary)]">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{card.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
