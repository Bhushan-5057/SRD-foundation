import Image from "next/image";
import { Metadata } from "next";
import { HeroSection } from "@/components/common/HeroSection";
import { InfoSection } from "@/components/pages/impact/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import DonateImage from "../../../public/assets/homepage/donate3.jpg";
import EnjoyImage from "../../../public/assets/enjoy2.jpg";
import Volunteers from "../../../public/assets/homepage/volunteers.jpg";
import Helping from "../../../public/assets/servicepage/service3.jpg";
import StoryImage1 from "../../../public/assets/volunteers2.jpg";
import StoryImage4 from "../../../public/assets/volunteers6.jpg";
import StoryImage2 from "../../../public/assets/homepage/helping2.jpg";
import StoryImage3 from "../../../public/assets/seniors.jpg";
import ImpactDetailImage from "../../../public/assets/Discovery.jpg"; 

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Explore the impact of SRD Foundation's work in supporting newcomers, seniors, and families through community programs and compassionate initiatives.",
};

const STORY_IMAGES = [
  { src: StoryImage1, alt: "Volunteer sitting with a senior" },
  { src: StoryImage2, alt: "Explaining important documents" },
  { src: StoryImage3, alt: "Walking to an appointment" },
  { src: Volunteers, alt: "Community volunteers helping" },
  { src: Helping, alt: "Helping hands in action" },
  { src: StoryImage4, alt: "Helping hands in action" },
];

export default function ImpactPage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="Impact"
        title={SITE_CONTENT.impact.heading}
        highlightText="Impact"
        description={SITE_CONTENT.impact.text}
        primaryAction={{ href: "/how-we-help", label: "See Programs" }}
        secondaryAction={{ href: "/contact", label: "Become a Volunteer" }}
        tags={["Stories", "Appointments", "Outcomes"]}
        imageSlots={[
          { src: DonateImage, alt: "Before and after community help" },
          { src: EnjoyImage, alt: "Happy senior with volunteer" },
          { src: Volunteers, alt: "Immigrant success story" },
          { src: Helping, alt: "Community transformation" },
        ]}
      />

      <InfoSection
        heading={SITE_CONTENT.impact.heading}
        text={SITE_CONTENT.impact.text}
        imageSrc={ImpactDetailImage}
        imageAlt="Real-life storytelling and community impact"
      />

      <section className="rounded-3xl p-5 sm:p-7">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Story Highlights
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SITE_CONTENT.impact.stories.map((story, index) => {
            const image = STORY_IMAGES[index % STORY_IMAGES.length];

            return (
              <article
                key={index}
                className="group rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] overflow-hidden transition hover:shadow-lg"
              >
                <div className="relative h-[180px] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {story.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
                    {story.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="rounded-3xl p-6 sm:p-8 bg-[var(--surface-soft)] border border-[var(--border-color)]">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl text-center">
          Our Impact in Numbers
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-4 text-center">
          {[
            { value: "500+", label: "People Helped" },
            { value: "120+", label: "Active Volunteers" },
            { value: "300+", label: "Appointments Assisted" },
            { value: "95%", label: "Positive Feedback" },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-2xl font-bold text-[var(--brand-primary)]">
                {item.value}
              </p>
              <p className="text-sm text-[var(--text-muted)] mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
      <section className="rounded-3xl p-6 sm:p-8 text-center bg-[var(--surface-soft)] text-white">
        <h2 className="text-2xl sm:text-3xl text-[var(--text-primary)] font-semibold">
          Be Part of the Impact
        </h2>
        <p className="mt-3 text-sm sm:text-base text-[var(--text-primary)] opacity-90">
          Your time and support can change someone’s life. Join our community today.
        </p>

        <div className="mt-5 flex justify-center gap-4">
          <a
            href="/contact"
            className="rounded-full bg-[var(--brand-primary)] text-white px-5 py-2 text-sm font-medium hover:opacity-90"
          >
            Become a Volunteer
          </a>
          <a
            href="/donate"
            className="rounded-full px-5 py-2 text-sm font-medium rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
}