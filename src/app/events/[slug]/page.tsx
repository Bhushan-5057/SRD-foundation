import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import { HeroSection } from "@/components/common/HeroSection";
import { EventCard } from "@/components/pages/events/EventCard";
import { EVENTS_DATA, getEventBySlug } from "@/content/eventsData";

type EventPageParams = { slug: string };
type EventPageProps = { params: Promise<EventPageParams> };

const HIGHLIGHT_WORDS: Record<string, string> = {
  "newcomer-settlement-resource-fair": "Settlement",
  "early-learning-family-open-house": "Early",
  "interfaith-community-dialogue-night": "Community",
};

export function generateStaticParams() {
  return EVENTS_DATA.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) return {};

  return {
    title: event.seo.title,
    description: event.seo.description,
  };
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const relatedEvents = EVENTS_DATA.filter((item) => item.slug !== event.slug).slice(0, 2);

  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:text-[var(--brand-primary)]"
        >
          <FiArrowLeft className="h-4 w-4" />
          Back to Events
        </Link>
      </div>

      <HeroSection
        sectionLabel={event.category}
        title={event.title}
        highlightText={HIGHLIGHT_WORDS[event.slug]}
        description={event.excerpt}
        primaryAction={{ href: "/contact", label: "Register Now" }}
        secondaryAction={{ href: "/donate", label: "Support This Work" }}
        tags={[event.dateLabel, event.timeLabel, event.location]}
        imageSlots={event.gallery.map((image, index) => ({
          src: image,
          alt: `${event.title} gallery image ${index + 1}`,
        }))}
      />

      <section className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Date</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
            <FiCalendar className="h-4 w-4 text-[var(--brand-primary)]" />
            {event.dateLabel}
          </p>
        </article>
        <article className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Time</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
            <FiClock className="h-4 w-4 text-[var(--brand-primary)]" />
            {event.timeLabel}
          </p>
        </article>
        <article className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">Location</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
            <FiMapPin className="h-4 w-4 text-[var(--brand-primary)]" />
            {event.location}
          </p>
        </article>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">What to Expect</h2>
          <ul className="mt-5 space-y-3">
            {event.highlights.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
                <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--brand-primary)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Registration</h2>
          <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
            Space is limited so early registration is recommended. Contact SRD Foundation to reserve your spot and get
            follow-up reminders.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--brand-primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Contact for Registration
            </Link>
            <Link
              href="/how-we-help"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            >
              Explore Support Programs
            </Link>
          </div>
        </article>
      </section>

      <section className="space-y-4 rounded-3xl border border-[var(--border-color)] bg-[var(--surface)] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          Event Agenda
        </h2>

        <div className="space-y-3">
          {event.agenda.map((item) => (
            <article
              key={`${item.time}-${item.title}`}
              className="rounded-2xl border border-[var(--border-color)]/70 bg-[var(--surface-soft)] p-4 sm:p-5"
            >
              <div className="grid grid-cols-[110px_1fr] gap-4 items-start">

                <p className="text-sm font-semibold text-[var(--brand-primary)]">
                  {item.time}
                </p>

                <div>
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>

              </div>
            </article>
          ))}
        </div>
      </section>

      {relatedEvents.length > 0 ? (
        <section className="space-y-4 border-t border-[var(--border-color)]/70 pt-8">
          <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Related Upcoming Events</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {relatedEvents.map((related) => (
              <EventCard key={related.slug} event={related} variant="minimal" />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
