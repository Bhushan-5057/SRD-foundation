import { Metadata } from "next";
import { PageHeroSection } from "../../components/common/PageHeroSection";
import { SplitContentSection } from "../../components/common/SplitContentSection";
import { INTERVENTIONS_INDEX_CONTENT } from "../../content/interventionsContent";

export const metadata: Metadata = {
  title: "Interventions",
  description: "Explore SRD Foundation intervention programs supporting survivors and seniors.",
};

export default function InterventionsPage() {
  const content = INTERVENTIONS_INDEX_CONTENT;

  return (
    <div className="space-y-10 md:space-y-14">
      <PageHeroSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        imageSrc={content.hero.imageSrc}
        imageAlt="Interventions hero"
      />

      <SplitContentSection
        heading={content.featured.heading}
        text={content.featured.text}
        action={content.featured.action}
        imageSrc={content.featured.imageSrc}
        imageAlt="Senior Empowerment & Inclusion program"
        imageLabel="Featured intervention image"
        imageAspect="split"
      />
    </div>
  );
}
