import Image from "next/image";
import { Metadata } from "next";
import { FiCompass, FiHeart, FiShield, FiUsers, FiZap,FiTrendingUp } from "react-icons/fi";
import { FAQSection } from "@/components/common/FAQSection";
import { HeroSection } from "@/components/common/HeroSection";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { ABOUT_DATA } from "@/content/aboutData";
import { PAGE_FAQS } from "@/content/faqsData";
import AboutImage1 from "../../../public/assets/community.jpg";
import AboutImage2 from "../../../public/assets/homepage/volunteers4.jpg";
import AboutImage3 from "../../../public/assets/homepage/volunteers5.jpg";
import AboutImage4 from "../../../public/assets/volunteers2.jpg";
import StoryImage from "../../../public/assets/homepage/helping3.jpg";
import WhyImage from "../../../public/assets/homepage/heart.jpg"; 

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about SRD Foundation, our mission, vision, and the compassionate community support we provide to newcomers and seniors.",
};

const VALUE_ICON_MAP = {
  Compassion: FiHeart,
  Community: FiUsers,
  Respect: FiCompass,
  Integrity: FiShield,
  Impact: FiZap,
  Empowerment: FiTrendingUp
} as const;

export default function AboutPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel={ABOUT_DATA.hero.sectionLabel}
        title={ABOUT_DATA.hero.title}
        highlightText="alone"
        description={ABOUT_DATA.hero.description}
        primaryAction={{ href: "/services", label: "Explore Services" }}
        secondaryAction={{ href: "/contact", label: "Contact Us" }}
        tags={["Compassion", "Connection", "Practical Support"]}
        imageSlots={[
          { src: AboutImage1, alt: "Community volunteers supporting newcomers" },
          { src: AboutImage2, alt: "Team collaboration and support" },
          { src: AboutImage3, alt: "Seniors support activities" },
          { src: AboutImage4, alt: "Community care and connection" },
        ]}
      />

      <section
        className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{ABOUT_DATA.whoWeAre.title}</h2>
        <div className="mt-4 space-y-4">
          {ABOUT_DATA.whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
        <article
          className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8"
          data-aos="fade-right"
        >
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{ABOUT_DATA.ourStory.title}</h2>
          <div className="mt-4 space-y-4">
            {ABOUT_DATA.ourStory.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <article
          className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-2"
          data-aos="fade-left"
        >
          <Image
            src={StoryImage}
            alt="Grassroots volunteer support in action"
            className="h-full min-h-[260px] w-full rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 35vw"
          />
        </article>
      </section>

      <section className="space-y-5" data-aos="fade-up">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{ABOUT_DATA.whatWeDo.title}</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{ABOUT_DATA.whatWeDo.intro}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {ABOUT_DATA.whatWeDo.services.map((service, index) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] text-[var(--brand-primary)]">
                <ServiceIcon icon={service.icon} className="h-5 w-5 sm:h-6 sm:w-6"  />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article
          className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8"
          data-aos="fade-up"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">
            {ABOUT_DATA.mission.title}
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{ABOUT_DATA.mission.description}</p>
        </article>
        <article
          className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">
            {ABOUT_DATA.vision.title}
          </p>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{ABOUT_DATA.vision.description}</p>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl" data-aos="fade-up">
          {ABOUT_DATA.values.title}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ABOUT_DATA.values.items.map((value, index) => {
            const Icon = VALUE_ICON_MAP[value.title as keyof typeof VALUE_ICON_MAP] ?? FiHeart;
            return (
              <article
                key={value.title}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-5 transition-transform duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] text-[var(--brand-secondary)]">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section
        className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8"
        data-aos="fade-up"
      >
        <div className="pointer-events-none absolute -left-20 top-0 h-52 w-52 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-14 bottom-0 h-48 w-48 rounded-full bg-[var(--brand-secondary)]/12 blur-3xl" />
        <div className="relative grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{ABOUT_DATA.whyWeDoThis.title}</h2>
            <div className="mt-4 space-y-4">
              {ABOUT_DATA.whyWeDoThis.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <Image
            src={WhyImage}
            alt="Trusted support and guidance"
            className="h-64 w-full rounded-2xl object-cover md:h-72"
            sizes="(max-width: 768px) 100vw, 35vw"
          />
        </div>
      </section>

      <FAQSection
        sectionLabel={PAGE_FAQS.about.sectionLabel}
        title={PAGE_FAQS.about.title}
        subtitle={PAGE_FAQS.about.description}
        items={PAGE_FAQS.about.items}
      />
    </div>
  );
}
