import { HeroSection } from "@/components/common/HeroSection";
import { HowWeHelpCards } from "@/components/common/HowWeHelpCards";
import { InfoSection } from "@/components/common/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import SeniorImage from "../../../public/assets/seniors.jpg";
import DonateImage from "../../../public/assets/donate.jpg";
import DonateImage1 from "../../../public/assets/donate2.jpg";
import DonateImage2 from "../../../public/assets/donate3.jpg";

export default function HowWeHelpPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="How We Help"
        title={SITE_CONTENT.hero.heading}
        highlightText="Human"
        description={SITE_CONTENT.hero.subtext}
        primaryAction={SITE_CONTENT.hero.actions[0]}
        secondaryAction={SITE_CONTENT.hero.actions[2]}
        tags={SITE_CONTENT.hero.tags}
        imageSlots={[
          { src: SeniorImage, alt: "Senior care and support" },
          { src: DonateImage, alt: "Community families receiving support" },
          { src: DonateImage1, alt: "Food and outreach activities" },
          { src: DonateImage2, alt: "Donation impact in local communities" },
        ]}
      />

      <InfoSection
        heading={SITE_CONTENT.about.heading}
        text={SITE_CONTENT.about.text}
        imagePlaceholder={SITE_CONTENT.about.imagePlaceholder}
      />

      <HowWeHelpCards title={SITE_CONTENT.howWeHelp.heading} cards={SITE_CONTENT.howWeHelp.cards} />

      <InfoSection
        heading={SITE_CONTENT.appointmentsSupport.heading}
        text={SITE_CONTENT.appointmentsSupport.text}
        imagePlaceholder={SITE_CONTENT.appointmentsSupport.imagePlaceholder}
      />

      <InfoSection
        heading={SITE_CONTENT.communityNetwork.heading}
        text={SITE_CONTENT.communityNetwork.text}
        imagePlaceholder={SITE_CONTENT.communityNetwork.imagePlaceholder}
        reverse
      />

      <InfoSection
        heading={SITE_CONTENT.whyDifferent.heading}
        text={SITE_CONTENT.whyDifferent.text}
        bullets={SITE_CONTENT.whyDifferent.bullets}
        imagePlaceholder={SITE_CONTENT.whyDifferent.imagePlaceholder}
      />
    </div>
  );
}
