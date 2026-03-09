import { HeroSection } from "@/components/common/HeroSection";
import { Metadata } from "next";
import { ContactFormSection } from "@/components/pages/contact/ContactFormSection";
import { InfoSection } from "@/components/pages/contact/InfoSection";
import { TestimonialsSection } from "@/components/pages/contact/TestimonialsSection";
import { SITE_CONTENT } from "@/content/site-content";
import volunteerImage from "../../../public/assets/homepage/volunteers5.jpg";
import volunteerImage1 from "../../../public/assets/homepage/volunteers.jpg";
import volunteerImage2 from "../../../public/assets/volunteers2.jpg";
import volunteerImage3 from "../../../public/assets/homepage/helping2.jpg";
import AppointmentImage from "../../../public/assets/appointment.jpg"; 
import volunteerImage4 from "../../../public/assets/enjoy2.jpg"; 

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SRD Foundation for support, partnerships, volunteering opportunities, or general inquiries. We're here to help newcomers and seniors in the community.",
};

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
          { src: volunteerImage2, alt: "Volunteer helping a senior" },
          { src: volunteerImage1, alt: "Person explaining documents" },
          { src: volunteerImage4, alt: "Walking together to an appointment" },
          { src: volunteerImage3, alt: "Community volunteer group" },
        ]}
      />

      <ContactFormSection />
      <TestimonialsSection />

      <InfoSection
        heading={SITE_CONTENT.volunteer.heading}
        text={SITE_CONTENT.volunteer.text}
        imageSrc={volunteerImage}
        imageAlt="Volunteer support in community"
        action={SITE_CONTENT.volunteer.action}
      />

      <InfoSection
        heading={SITE_CONTENT.appointmentsSupport.heading}
        text={SITE_CONTENT.appointmentsSupport.text}
        imageSrc={AppointmentImage}
        imageAlt="Appointment assistance and guidance"
        reverse
      />
    </div>
  );
}
