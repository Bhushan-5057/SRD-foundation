import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCalendar, FiClock, FiMapPin } from "react-icons/fi";
import type { EventData } from "@/content/eventsData";

interface EventCardProps {
  event: EventData;
  variant?: "default" | "minimal";
}

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const isMinimal = variant === "minimal";

  return (
    <article
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--border-color)] transition-all duration-300 ${
        isMinimal
          ? "bg-[var(--surface)]/90 hover:-translate-y-0.5 hover:shadow-md"
          : "bg-[var(--surface-soft)] hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      <div className={`relative w-full ${isMinimal ? "h-44" : "h-52"}`}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute left-3 top-3 rounded-full bg-[var(--surface)]/95 px-3 py-1 text-xs font-semibold text-[var(--brand-primary)] shadow-sm">
          {event.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className={`font-semibold leading-snug text-[var(--text-primary)] ${isMinimal ? "text-lg" : "text-xl"}`}>
          {event.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[var(--text-muted)]">{event.excerpt}</p>

        <div className="mt-4 space-y-2 text-sm text-[var(--text-primary)]">
          <p className="flex items-start gap-2.5">
            <FiCalendar className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
            <span>{event.dateLabel}</span>
          </p>
          <p className="flex items-start gap-2.5">
            <FiClock className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
            <span>{event.timeLabel}</span>
          </p>
          <p className="flex items-start gap-2.5">
            <FiMapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--brand-primary)]" />
            <span>{event.location}</span>
          </p>
        </div>

        <Link
          href={`/events/${event.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] transition-colors group-hover:text-[var(--brand-secondary)]"
        >
          View Event Details
          <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
