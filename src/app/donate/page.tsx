import { HeroSection } from "@/components/common/HeroSection";
import { InfoSection } from "@/components/pages/donate/InfoSection";
import { SITE_CONTENT } from "@/content/site-content";
import Enjoyimage from "../../../public/assets/enjoy.jpg";
import Donateimage from "../../../public/assets/donate.jpg";
import Helpingimage from "../../../public/assets/helping3.jpg";
import Charityimage from "../../../public/assets/charity2.jpg";
import DonationDetailsImage from "../../../public/assets/heart.jpg";

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
          { src: Enjoyimage, alt: "Donation helping community" },
          { src: Donateimage, alt: "Support local charity people" },
          { src: Helpingimage, alt: "Hands holding heart donation concept" },
          { src: Charityimage, alt: "Community donation impact" },
        ]}
      />

      <InfoSection
        heading={SITE_CONTENT.donation.heading}
        text={SITE_CONTENT.donation.text}
        imageSrc={DonationDetailsImage}
        imageAlt="People supported through donations"
        action={SITE_CONTENT.donation.action}
      />
    </div>
  );
}
