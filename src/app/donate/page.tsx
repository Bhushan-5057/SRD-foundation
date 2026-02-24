import { HeroSection } from "@/components/common/HeroSection";
import { InfoSection } from "@/components/common/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import Enjoyimage from "../../../public/assets/enjoy.jpg"
import Donateimage from "../../../public/assets/donate.jpg"
import Helpingimage from "../../../public/assets/helping3.jpg"
import Charityimage from "../../../public/assets/charity2.jpg"

export default function DonatePage() {
  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="Donate"
        title={SITE_CONTENT.donation.heading}
        highlightText="Support"
        description={SITE_CONTENT.donation.text}
        primaryAction={SITE_CONTENT.donation.action}
        secondaryAction={{ href: "/impact", label: "View Impact" }}
        tags={["Community Powered", "No Ads", "Direct Support"]}
        imageSlots={[
          { src: Enjoyimage, alt: "Donation helping community placeholder" },
          { src: Donateimage, alt: "Support local charity people placeholder" },
          { src: Helpingimage, alt: "Hands holding heart donation concept placeholder" },
          { src: Charityimage, alt: "Community donation impact placeholder" },
        ]}
      />

      <InfoSection
        heading={SITE_CONTENT.donation.heading}
        text={SITE_CONTENT.donation.text}
        imagePlaceholder={SITE_CONTENT.donation.imagePlaceholder}
        action={SITE_CONTENT.donation.action}
      />
    </div>
  );
}
