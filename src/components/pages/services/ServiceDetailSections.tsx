import Image from "next/image";
import type { ReactNode } from "react";
import type { IconType } from "react-icons";
import { FiCheck, FiChevronRight } from "react-icons/fi";
import { renderServiceTitleWithAccent } from "@/components/pages/services/ServiceTitleAccent";

interface ServiceHeroProps {
  slug: string;
  title: string;
  description: string;
}

interface ServiceSectionContent {
  title: string;
  subtitle?: ReactNode;
  content: ReactNode[];
  endline?: ReactNode;
  icon?: IconType | null;
}

interface ServiceSplitSectionProps extends ServiceSectionContent {
  image: string;
  imageAlt: string;
  badge: string;
}

interface ServiceOfferGridProps {
  title: string;
  subtitle?: string;
  sections: ServiceSectionContent[];
}

interface ServiceStepsSectionProps {
  section: ServiceSectionContent;
}

interface ServiceAudienceSectionProps {
  section: ServiceSectionContent;
}

function SectionTitle({
  title,
  icon: Icon,
  badge,
}: {
  title: string;
  icon?: IconType | null;
  badge?: string;
}) {
  return (
    <header className="space-y-3">
      {badge && (
        <p className="inline-flex items-center rounded-full bg-[var(--brand-primary)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--brand-primary)]">
          {badge}
        </p>
      )}
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
            <Icon className="h-6 w-6" />
          </span>
        )}
        <h2 className="text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl">
          {title}
        </h2>
      </div>
    </header>
  );
}

function ContentBlock({ content }: { content: ReactNode[] }) {
  if (content.length <= 1) {
    return (
      <p className="text-sm leading-7 text-[var(--text-muted)] md:text-[15px] md:leading-8 lg:text-base">
        {content[0]}
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {content.map((item, index) => (
        <li
          key={index}
          className="flex items-start gap-3 text-sm leading-7 text-[var(--text-muted)] md:text-[15px] md:leading-8"
        >
          <span className="mt-2.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--brand-primary)]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ServiceHero({ slug, title, description }: ServiceHeroProps) {
  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-[var(--border-color)]/70 bg-[var(--surface)]/80 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14"
      data-aos="fade-up"
    >
      <div className="pointer-events-none absolute -left-20 top-0 h-40 w-40 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-48 w-48 rounded-full bg-[var(--brand-secondary)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold leading-tight text-[var(--text-primary)] sm:text-4xl lg:text-5xl">
          {renderServiceTitleWithAccent(title, slug)}
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-[var(--text-muted)] sm:text-base sm:leading-8">
          {description}
        </p>
      </div>
    </section>
  );
}

export function ServiceSplitSection({
  title,
  subtitle,
  content,
  endline,
  icon: Icon,
  image,
  imageAlt,
  badge,
}: ServiceSplitSectionProps) {
  return (
    <section className="space-y-6" data-aos="fade-up">
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--border-color)]/60 bg-[var(--surface-soft)]">
          <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>

        <article className="space-y-5">
          <SectionTitle title={title} icon={Icon} badge={badge} />

          {subtitle && (
            <p className="text-sm leading-7 text-[var(--text-muted)] md:text-[15px] md:leading-8 lg:text-base">
              {subtitle}
            </p>
          )}

          <ContentBlock content={content} />

          {endline && (
            <p className="rounded-xl bg-[var(--brand-primary)]/10 px-4 py-3 text-sm font-medium leading-7 text-[var(--text-primary)] md:text-base">
              {endline}
            </p>
          )}
        </article>
      </div>
    </section>
  );
}

export function ServiceOfferGrid({ title, subtitle, sections }: ServiceOfferGridProps) {
  return (
    <section className="space-y-6" data-aos="fade-up">
      <SectionTitle title={title} badge="Program Details" />
      {subtitle && <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)] md:text-base">{subtitle}</p>}

      <div>
        {sections.map((section, index) => {
          const Icon = section.icon;

          return (
            <article
              key={`${section.title}-${index}`}
              className="rounded-2xl border border-[var(--border-color)]/60 bg-[var(--surface)]/80 p-5 sm:p-6"
            >
              <div className="mb-4 flex items-start gap-3">
                {Icon && (
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                    <Icon className="h-6 w-6" />
                  </span>
                )}
                <h3 className="text-lg font-semibold leading-snug text-[var(--text-primary)]">{section.title}</h3>
              </div>

              {section.subtitle && (
                <p className="mb-4 text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">{section.subtitle}</p>
              )}

              {section.content.length <= 1 ? (
                <p className="text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">{section.content[0]}</p>
              ) : (
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-2.5 text-sm leading-7 text-[var(--text-muted)] md:text-[15px]"
                    >
                      <FiCheck className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.endline && (
                <p className="mt-4 rounded-xl bg-[var(--surface-soft)] px-3.5 py-2.5 text-sm leading-7 text-[var(--text-primary)]">
                  {section.endline}
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ServiceStepsSection({ section }: ServiceStepsSectionProps) {
  return (
    <section className="space-y-6" data-aos="fade-up">
      <SectionTitle title={section.title} icon={section.icon} badge="How It Works" />

      {section.subtitle && (
        <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)] md:text-base">{section.subtitle}</p>
      )}

      {section.content.length <= 1 ? (
        <ContentBlock content={section.content} />
      ) : (
        <ol className="space-y-4">
          {section.content.map((item, index) => (
            <li
              key={index}
              className="rounded-2xl border border-[var(--border-color)]/60 bg-[var(--surface)]/70 px-4 py-4 sm:px-5"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--brand-primary)]/15 text-sm font-semibold text-[var(--brand-primary)]">
                  {index + 1}
                </span>
                <span className="text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">{item}</span>
              </div>
            </li>
          ))}
        </ol>
      )}

      {section.endline && (
        <p className="rounded-xl bg-[var(--brand-primary)]/10 px-4 py-3 text-sm font-medium leading-7 text-[var(--text-primary)] md:text-base">
          {section.endline}
        </p>
      )}
    </section>
  );
}

export function ServiceAudienceSection({ section }: ServiceAudienceSectionProps) {
  return (
    <section className="space-y-6" data-aos="fade-up">
      <SectionTitle title={section.title} icon={section.icon} badge="Who Can Join" />

      {section.subtitle && (
        <p className="max-w-3xl text-sm leading-7 text-[var(--text-muted)] md:text-base">{section.subtitle}</p>
      )}

      {section.content.length <= 1 ? (
        <ContentBlock content={section.content} />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {section.content.map((item, index) => (
            <article
              key={index}
              className="rounded-xl border border-[var(--border-color)]/60 bg-[var(--surface)]/70 px-4 py-3.5"
            >
              <p className="flex items-start gap-2.5 text-sm leading-7 text-[var(--text-muted)] md:text-[15px]">
                <FiChevronRight className="mt-1 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
                <span>{item}</span>
              </p>
            </article>
          ))}
        </div>
      )}

      {section.endline && (
        <p className="rounded-xl border border-[var(--border-color)]/60 bg-[var(--surface-soft)] px-4 py-3 text-sm font-medium leading-7 text-[var(--text-primary)] md:text-base">
          {section.endline}
        </p>
      )}
    </section>
  );
}
