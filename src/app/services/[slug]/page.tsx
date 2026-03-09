import Link from "next/link";
import { notFound } from "next/navigation";
import type { IconType } from "react-icons";
import * as Icons from "react-icons/fi";

import { ServiceCard } from "@/components/pages/services/ServiceCard";
import {
  ServiceAudienceSection,
  ServiceHero,
  ServiceOfferGrid,
  ServiceSplitSection,
  ServiceStepsSection,
} from "@/components/pages/services/ServiceDetailSections";
import {
  type ServiceSection,
  SERVICES_DATA,
  SERVICE_SECTION_MEDIA,
  getServiceBySlug,
} from "@/content/servicesData";

type PageParams = { slug: string };
type ServicePageProps = { params: Promise<PageParams> };

type ServiceSectionWithMeta = ServiceSection & {
  iconComponent: IconType | null;
  imageSrc: string;
  imageAlt: string;
};

function normalizeTitle(value: string) {
  return value.toLowerCase();
}

function pullSection(
  sections: ServiceSectionWithMeta[],
  matcher: (section: ServiceSectionWithMeta) => boolean,
) {
  const index = sections.findIndex(matcher);
  if (index === -1) return undefined;
  return sections.splice(index, 1)[0];
}

function classifySections(sections: ServiceSectionWithMeta[]) {
  const remaining = [...sections];

  const overview = pullSection(remaining, (section) =>
    normalizeTitle(section.title).includes("overview"),
  );
  const howItWorks = pullSection(remaining, (section) =>
    normalizeTitle(section.title).startsWith("how"),
  );
  const whoCanJoin = pullSection(remaining, (section) =>
    normalizeTitle(section.title).startsWith("who"),
  );
  const whyItMatters = pullSection(remaining, (section) =>
    normalizeTitle(section.title).startsWith("why"),
  );

  let offerSections = remaining;
  let overviewSection = overview;

  if (!overviewSection && offerSections.length > 0) {
    overviewSection = offerSections[0];
    offerSections = offerSections.slice(1);
  }

  return {
    overviewSection,
    offerSections,
    howItWorks,
    whoCanJoin,
    whyItMatters,
  };
}

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.slug }));
}

// SEO
export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.seo.title,
    description: service.seo.description,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const mappedSections: ServiceSectionWithMeta[] = service.sections.map((section) => {
    const Icon = section.icon
      ? (Icons[section.icon as keyof typeof Icons] as IconType | undefined)
      : undefined;
    const sectionMedia = SERVICE_SECTION_MEDIA[service.slug]?.[section.title];

    return {
      ...section,
      iconComponent: Icon ?? null,
      imageSrc: sectionMedia?.src ?? service.image,
      imageAlt: sectionMedia?.alt ?? `${section.title} section image`,
    };
  });

  const { overviewSection, offerSections, howItWorks, whoCanJoin, whyItMatters } =
    classifySections(mappedSections);

  const relatedServices = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 2);

  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-12 pb-4 sm:space-y-14 md:space-y-16">
      <div className="pt-1">
        <Link
          href="/services"
          className="inline-flex items-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--brand-primary)]"
        >
          Back to Services
        </Link>
      </div>

      <ServiceHero slug={service.slug} title={service.title} description={service.description} />

      {overviewSection && (
        <ServiceSplitSection
          title={overviewSection.title}
          subtitle={overviewSection.subtitle}
          content={overviewSection.content}
          endline={overviewSection.endline}
          icon={overviewSection.iconComponent}
          image={overviewSection.imageSrc}
          imageAlt={overviewSection.imageAlt}
          badge="Overview"
        />
      )}

      {offerSections.length > 0 && (
        <ServiceOfferGrid
          title="What We Offer"
          subtitle="Each focus area below uses the same support model with context-specific guidance."
          sections={offerSections.map((section) => ({
            title: section.title,
            subtitle: section.subtitle,
            content: section.content,
            endline: section.endline,
            icon: section.iconComponent,
          }))}
        />
      )}

      {howItWorks && (
        <ServiceStepsSection
          section={{
            title: howItWorks.title,
            subtitle: howItWorks.subtitle,
            content: howItWorks.content,
            endline: howItWorks.endline,
            icon: howItWorks.iconComponent,
          }}
        />
      )}

      {whoCanJoin && (
        <ServiceAudienceSection
          section={{
            title: whoCanJoin.title,
            subtitle: whoCanJoin.subtitle,
            content: whoCanJoin.content,
            endline: whoCanJoin.endline,
            icon: whoCanJoin.iconComponent,
          }}
        />
      )}

      {whyItMatters && (
        <ServiceSplitSection
          title={whyItMatters.title}
          subtitle={whyItMatters.subtitle}
          content={whyItMatters.content}
          endline={whyItMatters.endline}
          icon={whyItMatters.iconComponent}
          image={whyItMatters.imageSrc}
          imageAlt={whyItMatters.imageAlt}
          badge="Why It Matters"
        />
      )}

      <section className="space-y-5 border-t border-[var(--border-color)]/70 pt-8" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">Related Services</h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {relatedServices.map((item) => (
            <ServiceCard key={item.slug} service={item} variant="minimal" />
          ))}
        </div>
      </section>
    </div>
  );
}
