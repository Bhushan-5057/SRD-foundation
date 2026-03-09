import { FAQSection } from "@/components/common/FAQSection";
import { HeroSection } from "@/components/common/HeroSection";
import { ServiceCard } from "@/components/pages/services/ServiceCard";
import { PAGE_FAQS } from "@/content/faqsData";
import { SERVICES_DATA } from "@/content/servicesData";
import ServiceImage from "../../../public/assets/servicepage/service2.jpg";
import ServiceImage1 from "../../../public/assets/servicepage/service1.jpg";
import ServiceImage2 from "../../../public/assets/servicepage/service3.jpg";
import ServiceImage3 from "../../../public/assets/servicepage/service4.jpg";
import { Metadata } from "next"; 

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore the services provided by SRD Foundation including support for newcomers, seniors care, early learning programs, and community guidance.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="Services"
        title="Programs designed for practical and compassionate support"
        highlightText="support"
        description="Explore SRD Foundation services focused on settlement guidance, early childhood support, seniors and women, and interfaith community cohesion."
        primaryAction={{ href: "/contact", label: "Request Assistance" }}
        secondaryAction={{ href: "/donate", label: "Support the Mission" }}
        tags={["Settlement", "Education", "Community Care"]}
        imageSlots={[
          { src: ServiceImage, alt: "Settlement support guidance" },
          { src: ServiceImage1, alt: "Early childhood care support" },
          { src: ServiceImage2, alt: "Seniors and women's support" },
          { src: ServiceImage3, alt: "Interfaith community collaboration" },
        ]}
      />

      <section className="space-y-5">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">
            Service Directory
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Find the <span className="text-[var(--brand-secondary)]">support</span> that fits your <span className="text-[var(--brand-secondary)]">needs</span>
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.slug} data-aos="fade-up" data-aos-delay={index * 100}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </section>

      <FAQSection
        sectionLabel={PAGE_FAQS.services.sectionLabel}
        title={PAGE_FAQS.services.title}
        subtitle={PAGE_FAQS.services.description}
        items={PAGE_FAQS.services.items}
      />
    </div>
  );
}
