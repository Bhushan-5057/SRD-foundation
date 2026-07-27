import { Metadata } from "next";
import Link from "next/link";
import { FiCompass, FiHeart } from "react-icons/fi";
import { IconFeatureCards } from "../../components/common/IconFeatureCards";
import { ImagePlaceholder } from "../../components/common/ImagePlaceholder";
import { ImageTextOverlay } from "../../components/common/ImageTextOverlay";
import { PageHeroSection } from "../../components/common/PageHeroSection";
import { SplitContentSection } from "../../components/common/SplitContentSection";
import { ABOUT_PAGE_CONTENT } from "../../content/aboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SRD Foundation, our mission, values, and commitment to empowering survivors and supporting families.",
};

export default function AboutPage() {
  const content = ABOUT_PAGE_CONTENT;

  return (
    <div className="space-y-10 md:space-y-14">
      <PageHeroSection
        title={content.hero.title}
        imageSrc={content.hero.imageSrc}
        imageAlt="About Us hero background"
      />

      <SplitContentSection
        heading={content.intro.heading}
        paragraphs={[...content.intro.paragraphs]}
        listTitle={content.intro.listTitle}
        bullets={[...content.intro.bullets]}
        checkBullets
        imageSrc={content.intro.imageSrc}
        imageAlt="SRD Foundation logo"
        imageLabel="About story image"
        imageAspect="split"
        imageFit="contain"
        reverse
      />

      <section
        className="relative min-h-[240px] overflow-hidden rounded-3xl border border-[var(--border-color)] px-4 py-10 text-center sm:min-h-[280px] sm:px-8 sm:py-12 lg:min-h-[320px]"
        data-aos="fade-up"
      >
        <div className="absolute inset-0">
          <ImagePlaceholder
            src={content.valuesBanner.imageSrc}
            alt="Our values background"
            label="Values banner image"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 1280px"
            objectPosition="object-center"
          />
        </div>
        <ImageTextOverlay variant="banner" />
        <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center px-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
            {content.valuesBanner.badge}
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            {content.valuesBanner.heading}
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/90 sm:text-base">
            {content.valuesBanner.text}
          </p>
        </div>
      </section>

      <IconFeatureCards
        cards={[
          {
            title: content.valueCards[0].title,
            description: content.valueCards[0].description,
            icon: FiHeart,
          },
          {
            title: content.valueCards[1].title,
            description: content.valueCards[1].description,
            icon: FiCompass,
          },
        ]}
        columns={2}
      />

      <section
        className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-5 py-10 text-center sm:px-8 sm:py-12"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          {content.join.heading}
        </h2>
        <div className="mx-auto mt-5 grid max-w-4xl gap-4 sm:grid-cols-2">
          {content.join.paragraphs.map((paragraph) => (
            <article
              key={paragraph}
              className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-5 text-left"
            >
              <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">{paragraph}</p>
            </article>
          ))}
        </div>
        <Link
          href={content.join.action.href}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
        >
          {content.join.action.label}
        </Link>
      </section>
    </div>
  );
}
