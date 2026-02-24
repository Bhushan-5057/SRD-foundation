import { HeroSection } from "@/components/common/HeroSection";
import { HowWeHelpCards } from "@/components/pages/how-we-help/HowWeHelpCards";
import { InfoSection } from "@/components/pages/how-we-help/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import SeniorImage from "../../../public/assets/seniors.jpg";
import DonateImage from "../../../public/assets/donate.jpg";
import DonateImage1 from "../../../public/assets/donate2.jpg";
import DonateImage2 from "../../../public/assets/donate3.jpg";
import AboutImage from "../../../public/assets/community.jpg";
import AppointmentImage from "../../../public/assets/support.jpg";
import NetworkImage from "../../../public/assets/volunteers3.jpg";
import WhyImage from "../../../public/assets/heart.jpg";

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
        imageSrc={AboutImage}
        imageAlt="Community support and care"
      />

      <HowWeHelpCards title={SITE_CONTENT.howWeHelp.heading} cards={SITE_CONTENT.howWeHelp.cards} />

      <InfoSection
        heading={SITE_CONTENT.appointmentsSupport.heading}
        text={SITE_CONTENT.appointmentsSupport.text}
        imageSrc={AppointmentImage}
        imageAlt="Support during appointments"
      />

      <InfoSection
        heading={SITE_CONTENT.communityNetwork.heading}
        text={SITE_CONTENT.communityNetwork.text}
        imageSrc={NetworkImage}
        imageAlt="Community network and local connections"
        reverse
      />

      <InfoSection
        heading={SITE_CONTENT.whyDifferent.heading}
        text={SITE_CONTENT.whyDifferent.text}
        bullets={SITE_CONTENT.whyDifferent.bullets}
        imageSrc={WhyImage}
        imageAlt="Volunteer support that makes a difference"
      />
    </div>
  );
}
