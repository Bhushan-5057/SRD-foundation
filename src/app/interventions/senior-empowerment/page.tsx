import { Metadata } from "next";
import {
  FiBookOpen,
  FiHeart,
  FiPhone,
  FiShield,
  FiUsers,
  FiGlobe,
} from "react-icons/fi";
import { CtaBannerSection } from "../../../components/common/CtaBannerSection";
import { IconFeatureCards } from "../../../components/common/IconFeatureCards";
import { PageHeroSection } from "../../../components/common/PageHeroSection";
import { SplitContentSection } from "../../../components/common/SplitContentSection";
import { INTERVENTIONS_CONTENT } from "../../../content/interventionsContent";

export const metadata: Metadata = {
  title: "Senior Empowerment & Inclusion",
  description:
    "Soul Food for Community Hope – Seniors Empowerment & Inclusion program by SRD Foundation.",
};

export default function SeniorEmpowermentPage() {
  const content = INTERVENTIONS_CONTENT;
  const offerIcons = [FiHeart, FiBookOpen, FiUsers, FiShield, FiPhone, FiGlobe];

  return (
    <div className="space-y-10 md:space-y-14">
      <PageHeroSection
        title={content.hero.title}
        imageSrc={content.hero.imageSrc}
        imageAlt="Senior Empowerment hero"
      />

      <SplitContentSection
        heading={content.intro.heading}
        paragraphs={[...content.intro.paragraphs]}
        imageSrc={content.intro.imageSrc}
        imageAlt="Soul Food for Community Hope"
        imageLabel="Program intro image"
        imageAspect="split"
        reverse
      />

      <CtaBannerSection
        heading={content.grant.heading}
        description={`${content.grant.paragraphs[0]} ${content.grant.paragraphs[1]}`}
        imageSrc={content.grant.imageSrc}
        imageAlt="New Horizons for Seniors Grant"
        imageAspect="banner"
      />

      <IconFeatureCards
        heading={content.offers.heading}
        cards={content.offers.cards.map((card, index) => ({
          title: card.title,
          description: card.description,
          icon: offerIcons[index] ?? FiHeart,
        }))}
        columns={3}
      />

      <SplitContentSection
        heading={content.whoServes.heading}
        paragraphs={[...content.whoServes.paragraphs]}
        imageSrc={content.whoServes.imageSrc}
        imageAlt="Who the program serves"
        imageLabel="Program audience image"
        imageAspect="split"
        reverse
      />

      <SplitContentSection
        heading={content.activities.heading}
        paragraphs={[content.activities.intro]}
        numberedList={[...content.activities.items]}
        checkBullets
        imageSrc={content.activities.imageSrc}
        imageAlt="Activities throughout the year"
        imageLabel="Activities image"
        imageAspect="split"
      />

      <section className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          {content.benefits.heading}
        </h2>
        <div className="mx-auto mt-5 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
        <p className="mt-5 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{content.benefits.text}</p>
      </section>

      <CtaBannerSection
        heading={content.getInvolved.heading}
        description={content.getInvolved.text}
        action={content.getInvolved.action}
        imageSrc={content.getInvolved.imageSrc}
        imageAlt="Get involved with Senior Empowerment"
        imageAspect="banner"
      />
    </div>
  );
}
