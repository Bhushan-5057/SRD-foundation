import { FAQSection } from "@/components/common/FAQSection";
import { HeroSection } from "@/components/common/HeroSection";
import { HowWeHelpCards } from "@/components/pages/how-we-help/HowWeHelpCards";
import { InfoSection } from "@/components/pages/how-we-help/InfoSection";
import { PAGE_FAQS } from "@/content/faqsData";
import { SITE_CONTENT } from "@/content/site-content";
import SeniorImage from "../../../public/assets/seniors.jpg";
import DonateImage from "../../../public/assets/servicepage/service5.jpg";
import DonateImage1 from "../../../public/assets/homepage/donate2.jpg";
import DonateImage2 from "../../../public/assets/homepage/donate3.jpg";
import AboutImage from "../../../public/assets/community.jpg";
import AppointmentImage from "../../../public/assets/support.jpg";
import NetworkImage from "../../../public/assets/servicepage/service1.jpg";
import WhyImage from "../../../public/assets/homepage/heart.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Help",
  description:
    "Learn how SRD Foundation supports newcomers, seniors, and families through community programs, guidance, and compassionate assistance.",
};

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

      <FAQSection
        sectionLabel={PAGE_FAQS.howWeHelp.sectionLabel}
        title={PAGE_FAQS.howWeHelp.title}
        subtitle={PAGE_FAQS.howWeHelp.description}
        items={PAGE_FAQS.howWeHelp.items}
      />
    </div>
  );
}
