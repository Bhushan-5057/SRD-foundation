import Image from "next/image";
import { HeroSection } from "@/components/common/HeroSection";
import { InfoSection } from "@/components/pages/impact/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import DonateImage from "../../../public/assets/donate3.jpg";
import EnjoyImage from "../../../public/assets/enjoy2.jpg";
import Volunteers from "../../../public/assets/volunteers.jpg";
import Helping from "../../../public/assets/helping.jpg";
import StoryImage1 from "../../../public/assets/volunteers2.jpg";
import StoryImage2 from "../../../public/assets/helping2.jpg";
import StoryImage3 from "../../../public/assets/seniors.jpg";
import ImpactDetailImage from "../../../public/assets/Discovery.jpg";

const STORY_IMAGES = [
  { src: StoryImage1, alt: "Volunteer sitting with a senior" },
  { src: StoryImage2, alt: "Someone explaining important documents" },
  { src: StoryImage3, alt: "Walking together to an appointment" },
] as const;

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
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Story Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {SITE_CONTENT.impact.stories.map((story, index) => {
            const image = STORY_IMAGES[index % STORY_IMAGES.length];
            return (
              <article key={story} className="rounded-2xl p-3">
                <div className="relative min-h-[160px] overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--surface)]">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" />
                </div>
                <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{story}</p>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
