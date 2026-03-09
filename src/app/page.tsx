import { HeroSection } from "@/components/common/HeroSection";
import Link from "next/link";
import { BlogCard } from "@/components/pages/blogs/BlogCard";
import { HomePreviewGrid } from "@/components/pages/home/HomePreviewGrid";
import { InfoSection } from "@/components/pages/home/InfoSection";
import { ServiceCard } from "@/components/pages/services/ServiceCard";
import { BLOGS_DATA } from "@/content/blogsData";
import { SERVICES_DATA } from "@/content/servicesData";
import { SITE_CONTENT } from "@/content/site-content";
import Seniors from "../../public/assets/homepage/helping4.jpg";
import Charity from "../../public/assets/homepage/volunteers5.jpg";
import Heart from "../../public/assets/homepage/heart.jpg";
import LoveImage from "../../public/assets/homepage/Love.jpg";
import AboutImage from "../../public/assets/community.jpg";
import ImpactImage from "../../public/assets/homepage/volunteers.jpg";
import DonationImage from "../../public/assets/homepage/donate3.jpg";
import VolunteerImage from "../../public/assets/homepage/volunteers4.jpg";
import { TestimonialsSection } from "@/components/pages/contact/TestimonialsSection";

export default function HomePage() {
  const featuredBlogs = BLOGS_DATA.slice(0, 4);

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

      <section className="space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">Services</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Programs designed around real community needs
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
          >
            View All Services
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.slug} data-aos="fade-up" data-aos-delay={index * 100}>
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </section>

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

      <section className="space-y-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">Blogs</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Latest community insights
            </h2>
          </div>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
          >
            View All Blogs
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredBlogs.map((blog, index) => (
            <div key={blog.slug} data-aos="fade-up" data-aos-delay={index * 100}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
}
