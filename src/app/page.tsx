import { HeroSection } from "@/components/common/HeroSection";
import { HomePreviewGrid } from "@/components/pages/home/HomePreviewGrid";
import { InfoSection } from "@/components/pages/home/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import Seniors from "../../public/assets/helping4.jpg";
import Charity from "../../public/assets/volunteers5.jpg";
import Heart from "../../public/assets/heart.jpg";
import LoveImage from "../../public/assets/Love.jpg";
import AboutImage from "../../public/assets/community.jpg";
import ImpactImage from "../../public/assets/volunteers.jpg";
import DonationImage from "../../public/assets/donate3.jpg";
import VolunteerImage from "../../public/assets/volunteers4.jpg";
import { TestimonialsSection } from "@/components/pages/contact/TestimonialsSection";

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
          { src: Seniors, alt: "Hero image slot 1" },
          { src: Charity, alt: "Hero image slot 2" },
          { src: Heart, alt: "Hero image slot 3" },
          { src: LoveImage, alt: "Hero image slot 4" },
        ]}
      />

      <div className="py-8 text-center sm:py-12" data-aos="zoom-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
          Community Support
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          How We Help
        </h2>
        <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
      </div>

      <InfoSection
        heading={SITE_CONTENT.about.heading}
        text={SITE_CONTENT.about.text}
        imageSrc={AboutImage}
        imageAlt="Community support volunteers"
        action={{ href: "/how-we-help", label: "Read How We Help" }}
        compact
        priority
      />

      <HomePreviewGrid items={SITE_CONTENT.homePreviews} />

      <div className="py-8 text-center sm:py-12" data-aos="zoom-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
          Real Stories, Real Support
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Our Impact in the Community
        </h2>
        <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
      </div>

      <InfoSection
        heading={SITE_CONTENT.impact.heading}
        text={SITE_CONTENT.impact.text}
        imageSrc={ImpactImage}
        imageAlt="Community impact moments"
        action={{ href: "/impact", label: "View Impact" }}
        reverse
        compact
      />

      <InfoSection
        heading={SITE_CONTENT.donation.heading}
        text={SITE_CONTENT.donation.text}
        imageSrc={DonationImage}
        imageAlt="Donation support for local families"
        action={{ href: "/donate", label: "Go to Donate" }}
        compact
      />

      <InfoSection
        heading={SITE_CONTENT.volunteer.heading}
        text={SITE_CONTENT.volunteer.text}
        imageSrc={VolunteerImage}
        imageAlt="Volunteer support in action"
        action={SITE_CONTENT.volunteer.action}
        reverse
        compact
      /> 
      <TestimonialsSection/>
    </div>
  );
}
