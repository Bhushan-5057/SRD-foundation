import { HeroSection } from "@/components/common/HeroSection";
import { HomePreviewGrid } from "@/components/common/HomePreviewGrid";
import { InfoSection } from "@/components/common/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import Seniors from "../../public/assets/helping4.jpg"
import Charity from "../../public/assets/charity2.jpg"
import Heart from "../../public/assets/heart.jpg"
import LoveImage from "../../public/assets/Love.jpg"

export default function HomePage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="SRD Foundation"
        title={SITE_CONTENT.hero.heading}
        highlightText="Human"
        description={SITE_CONTENT.hero.subtext}
        primaryAction={SITE_CONTENT.hero.actions[0]}
        secondaryAction={SITE_CONTENT.hero.actions[1]}
        extraActions={[SITE_CONTENT.hero.actions[2]]}
        tags={SITE_CONTENT.hero.tags}
        imageSlots={[
          {src: Seniors,  alt: "Hero image slot 1" },
          {src: Charity, alt: "Hero image slot 2" },
          {src: Heart, alt: "Hero image slot 3" },
          {src: LoveImage, alt: "Hero image slot 4" },
        ]}
      />

      <InfoSection
        heading={SITE_CONTENT.about.heading}
        text={SITE_CONTENT.about.text}
        imagePlaceholder={SITE_CONTENT.about.imagePlaceholder}
        action={{ href: "/how-we-help", label: "Read How We Help" }}
        compact
      />

      <HomePreviewGrid items={SITE_CONTENT.homePreviews} />

      <InfoSection
        heading={SITE_CONTENT.impact.heading}
        text={SITE_CONTENT.impact.text}
        imagePlaceholder="Impact story image placeholder"
        action={{ href: "/impact", label: "View Impact" }}
        reverse
        compact
      />

      <InfoSection
        heading={SITE_CONTENT.donation.heading}
        text={SITE_CONTENT.donation.text}
        imagePlaceholder={SITE_CONTENT.donation.imagePlaceholder}
        action={{ href: "/donate", label: "Go to Donate" }}
        compact
      />

      <InfoSection
        heading={SITE_CONTENT.volunteer.heading}
        text={SITE_CONTENT.volunteer.text}
        imagePlaceholder={SITE_CONTENT.volunteer.imagePlaceholder}
        action={SITE_CONTENT.volunteer.action}
        reverse
        compact
      />
    </div>
  );
}
