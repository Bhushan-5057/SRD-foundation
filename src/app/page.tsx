import { FiHeart, FiHome, FiUsers } from "react-icons/fi";
import { CtaBannerSection } from "../components/common/CtaBannerSection";
import { HomeHeroSection } from "../components/common/HomeHeroSection";
import { IconFeatureCards } from "../components/common/IconFeatureCards";
import { SplitContentSection } from "../components/common/SplitContentSection";
import { HOME_PAGE_CONTENT } from "../content/homePageContent";

export default function HomePage() {
  const content = HOME_PAGE_CONTENT;

  return (
    <div className="space-y-10 md:space-y-14">
      <HomeHeroSection
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        description={content.hero.description}
        primaryAction={content.hero.primaryAction}
        slides={[...content.hero.slides]}
      />

      <SplitContentSection
        badge={content.about.badge}
        heading={content.about.heading}
        paragraphs={[...content.about.paragraphs]}
        secondaryHeading={content.about.missionHeading}
        secondaryText={content.about.missionText}
        action={content.about.action}
        imageSrc={content.about.imageSrc}
        imageAlt="About SRD Foundation"
        imageLabel="About section image"
        imageAspect="split"
        reverse
      />

      <SplitContentSection
        heading={content.whoWeAre.heading}
        text={content.whoWeAre.text}
        imageSrc={content.whoWeAre.imageSrc}
        imageAlt="SRD Foundation volunteers and advocates"
        imageLabel="Who we are image"
        imageAspect="split"
      />

      <IconFeatureCards
        heading={content.whatWeOffer.heading}
        description={content.whatWeOffer.description}
        cards={[
          {
            title: content.whatWeOffer.cards[0].title,
            description: content.whatWeOffer.cards[0].description,
            icon: FiHeart,
          },
          {
            title: content.whatWeOffer.cards[1].title,
            description: content.whatWeOffer.cards[1].description,
            icon: FiHome,
          },
          {
            title: content.whatWeOffer.cards[2].title,
            description: content.whatWeOffer.cards[2].description,
            icon: FiUsers,
          },
        ]}
      />

      <SplitContentSection
        heading={content.impact.heading}
        text={content.impact.text}
        action={content.impact.action}
        imageSrc={content.impact.imageSrc}
        imageAlt="Impact through compassion"
        imageLabel="Impact section image"
        imageAspect="split"
      />

      <SplitContentSection
        heading={content.elders.heading}
        text={content.elders.text}
        action={content.elders.action}
        imageSrc={content.elders.imageSrc}
        imageAlt="Supporting elders"
        imageLabel="Elders support image"
        imageAspect="split"
        reverse
      />

      <CtaBannerSection
        heading={content.getInvolved.heading}
        description={content.getInvolved.text}
        action={content.getInvolved.action}
        imageSrc={content.getInvolved.imageSrc}
        imageAlt="Get involved background"
        imageAspect="banner"
      />

      <SplitContentSection
        heading={content.soulFood.heading}
        text={content.soulFood.text}
        action={content.soulFood.action}
        imageSrc={content.soulFood.imageSrc}
        imageAlt="Soul Food for Community Hope"
        imageLabel="Seniors program image"
        imageAspect="split"
        reverse
      />

      <SplitContentSection
        badge={content.donation.badge}
        heading={content.donation.heading}
        text={content.donation.text}
        action={content.donation.action}
        imageSrc={content.donation.imageSrc}
        imageAlt="Support the mission"
        imageLabel="Donation section image"
        imageAspect="split"
      />

      <CtaBannerSection
        heading={content.together.heading}
        description={content.together.text}
        action={content.together.action}
        imageSrc={content.together.imageSrc}
        imageAlt="Together we make a difference"
        imageAspect="banner"
      />
    </div>
  );
}
