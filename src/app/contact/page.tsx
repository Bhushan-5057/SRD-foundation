import { HeroSection } from "@/components/common/HeroSection";
import { InfoSection } from "@/components/common/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import volunteerImage from "../../../public/assets/volunteers3.jpg"
import volunteerImage1 from "../../../public/assets/volunteers.jpg"
import volunteerImage2 from "../../../public/assets/volunteers2.jpg"
import volunteerImage3 from "../../../public/assets/helping2.jpg"

export default function ContactPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="Contact & Volunteer"
        title={SITE_CONTENT.volunteer.heading}
        highlightText="Volunteer"
        description={SITE_CONTENT.volunteer.text}
        primaryAction={SITE_CONTENT.volunteer.action}
        secondaryAction={{ href: "mailto:support@srdfoundation.org", label: "Email Support" }}
        tags={["Volunteer", "Partnerships", "Community Support"]}
        imageSlots={[
          {src: volunteerImage2,  alt: "Volunteer helping a senior placeholder" },
          {src: volunteerImage1, alt: "Person explaining documents placeholder" },
          { src: volunteerImage,alt: "Walking together to an appointment placeholder" },
          {src: volunteerImage3, alt: "Community volunteer group placeholder" },
        ]}
      />

      <InfoSection
        heading={SITE_CONTENT.volunteer.heading}
        text={SITE_CONTENT.volunteer.text}
        imagePlaceholder={SITE_CONTENT.volunteer.imagePlaceholder}
        action={SITE_CONTENT.volunteer.action}
      />

      <InfoSection
        heading={SITE_CONTENT.appointmentsSupport.heading}
        text={SITE_CONTENT.appointmentsSupport.text}
        imagePlaceholder={SITE_CONTENT.appointmentsSupport.imagePlaceholder}
        reverse
      />
    </div>
  );
}
