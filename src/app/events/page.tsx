import { FAQSection } from "@/components/common/FAQSection";
import { HeroSection } from "@/components/common/HeroSection";
import { EventCard } from "@/components/pages/events/EventCard";
import { EVENTS_DATA } from "@/content/eventsData";
import { PAGE_FAQS } from "@/content/faqsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Discover upcoming events, community programs, and activities organized by SRD Foundation to support newcomers, seniors, and families.",
};

export default function EventsPage() {
  const firstEvent = EVENTS_DATA[0];
  const secondEvent = EVENTS_DATA[1];
  const thirdEvent = EVENTS_DATA[2];

  return (
    <div className="space-y-8 md:space-y-10">
      <HeroSection
        sectionLabel="Events"
        title="Upcoming programs that bring Canada communities together"
        highlightText="communities"
        description="Join SRD Foundation events designed for newcomers, families, youth, seniors, and community partners across Ontario."
        primaryAction={{ href: "/contact", label: "Register Your Interest" }}
        secondaryAction={{ href: "/how-we-help", label: "See How We Help" }}
        tags={["Upcoming Events", "All Ages", "Ontario, Canada"]}
        imageSlots={[
          {
            src: firstEvent.gallery[0],
            alt: `${firstEvent.title} highlight image`,
            href: `/events/${firstEvent.slug}`,
          },
          {
            src: secondEvent.gallery[0],
            alt: `${secondEvent.title} highlight image`,
            href: `/events/${secondEvent.slug}`,
          },
          {
            src: thirdEvent.gallery[0],
            alt: `${thirdEvent.title} highlight image`,
            href: `/events/${thirdEvent.slug}`,
          },
          {
            src: firstEvent.gallery[1],
            alt: `${firstEvent.title} community moment`,
            href: `/events/${firstEvent.slug}`,
          },
        ]}
      />

      <section className="space-y-5">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">
            Upcoming Calendar
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-[var(--text-primary)] sm:text-4xl">
            Plan your next <span className="text-[var(--brand-secondary)]">community</span> event
          </h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
            Every event is built to be practical, welcoming, and action-oriented. Browse the upcoming list and join
            the session that best matches your family or community needs.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {EVENTS_DATA.map((event, index) => (
            <div key={event.slug} data-aos="fade-up" data-aos-delay={index * 100}>
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </section>

      <FAQSection
        sectionLabel={PAGE_FAQS.events.sectionLabel}
        title={PAGE_FAQS.events.title}
        subtitle={PAGE_FAQS.events.description}
        items={PAGE_FAQS.events.items}
      />
    </div>
  );
}
