import { Metadata } from "next";
import { CtaBannerSection } from "../../components/common/CtaBannerSection";
import { PageHeroSection } from "../../components/common/PageHeroSection";
import { SplitContentSection } from "../../components/common/SplitContentSection";
import { ContactFormSection } from "../../components/pages/contact/ContactFormSection";
import { VOLUNTEER_PAGE_CONTENT } from "../../content/volunteerPageContent";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Volunteer with SRD Foundation and make a meaningful difference in the lives of survivors and families.",
};

export default function VolunteerPage() {
  const content = VOLUNTEER_PAGE_CONTENT;

  return (
    <div className="space-y-10 md:space-y-14">
      <PageHeroSection
        title={content.hero.title}
        imageSrc={content.hero.imageSrc}
        imageAlt="Volunteer hero background"
      />

      <SplitContentSection
        badge={content.intro.badge}
        heading={content.intro.heading}
        paragraphs={[...content.intro.paragraphs]}
        secondaryHeading={content.intro.opportunitiesHeading}
        secondaryText={content.intro.opportunitiesText}
        imageSrc={content.intro.imageSrc}
        imageAlt="Volunteer and make a difference"
        imageLabel="Volunteer intro image"
        imageAspect="split"
      />

      <SplitContentSection
        heading={content.benefits.heading}
        text={content.benefits.text}
        bullets={[...content.benefits.bullets]}
        checkBullets
        imageSrc={content.benefits.imageSrc}
        imageAlt="Benefits of volunteering"
        imageLabel="Volunteer benefits image"
        imageAspect="split"
        reverse
      />

      <CtaBannerSection
        heading={content.howTo.heading}
        description={content.howTo.text}
        action={{ href: "#contact-form", label: "Apply Now" }}
        imageSrc={content.howTo.imageSrc}
        imageAlt="How to volunteer"
        imageAspect="banner"
      />

      <ContactFormSection />
    </div>
  );
}
