import { FiFileText, FiHeart, FiMapPin, FiUsers } from "react-icons/fi";
import type { HelpCardContent } from "@/content/site-content";

interface HowWeHelpCardsProps {
  title: string;
  cards: readonly HelpCardContent[];
}

const ICONS = {
  forms: FiFileText,
  senior: FiHeart,
  guidance: FiMapPin,
  community: FiUsers,
} as const;

const CARD_DETAILS: Record<
  HelpCardContent["key"],
  {
    badge: string;
    focusAreas: [string, string, string];
    outcome: string;
  }
> = {
  forms: {
    badge: "Step-by-Step",
    focusAreas: ["Applications", "Official Letters", "Service Requests"],
    outcome: "Clear and complete paperwork",
  },
  senior: {
    badge: "1-on-1 Presence",
    focusAreas: ["Medical Visits", "Government Offices", "Follow-up Notes"],
    outcome: "More confident appointments",
  },
  guidance: {
    badge: "Daily Support",
    focusAreas: ["Reading Documents", "Local Systems", "Practical Decisions"],
    outcome: "Less stress in everyday tasks",
  },
  community: {
    badge: "Local Connection",
    focusAreas: ["Trusted Programs", "Nearby Services", "Support Networks"],
    outcome: "Stronger community belonging",
  },
};

export function HowWeHelpCards({ title, cards }: HowWeHelpCardsProps) {
  return (
    <section className="mt-6 space-y-5 rounded-3xl p-4 sm:p-6 lg:p-7">
      <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{title}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
        {cards.map((card) => {
          const Icon = ICONS[card.key];
          const details = CARD_DETAILS[card.key];

          return (
            <article
              key={card.title}
              className="self-start rounded-2xl border border-[var(--border-color)] p-4 shadow-[0_10px_24px_rgb(34_49_27_/_0.05)] sm:p-5"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] text-[var(--brand-primary)]">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-primary)]">{details.badge}</p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{card.description}</p>

              <ul className="mt-4 space-y-2 text-sm text-[var(--text-primary)]">
                {details.focusAreas.map((area) => (
                  <li key={area} className="flex items-start gap-2">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-primary)]" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-3">
                <p className="text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">Outcome</p>
                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">{details.outcome}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
