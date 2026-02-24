import { HeroSection } from "@/components/common/HeroSection";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
import { InfoSection } from "@/components/common/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import DonateImage from "../../../public/assets/donate3.jpg"
import EnjoyImage from "../../../public/assets/enjoy2.jpg"
import Volunteers from "../../../public/assets/volunteers.jpg"
import Helping from "../../../public/assets/helping.jpg"

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
          { src:DonateImage ,alt: "Before and after community help placeholder" },
          { src:EnjoyImage ,alt: "Happy senior with volunteer placeholder" },
          { src:Volunteers ,alt: "Immigrant success story placeholder" },
          { src:Helping ,alt: "Community transformation placeholder" },
        ]}
      />

      <InfoSection
        heading={SITE_CONTENT.impact.heading}
        text={SITE_CONTENT.impact.text}
        imagePlaceholder="Real-life storytelling image placeholder"
      />

      <section className="rounded-3xl p-5 sm:p-7">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Story Highlights</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {SITE_CONTENT.impact.stories.map((story) => (
            <article key={story} className="rounded-2xl p-3">
              <ImagePlaceholder label={`${story} image placeholder`} className="min-h-[140px]" />
              <p className="mt-3 text-sm leading-6 text-[var(--text-muted)]">{story}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
