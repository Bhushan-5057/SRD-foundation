import { FiFileText, FiHeart, FiMapPin, FiUsers } from "react-icons/fi";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";
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

export function HowWeHelpCards({ title, cards }: HowWeHelpCardsProps) {
  return (
    <section className="space-y-5 p-5 sm:p-7">
      <h2 className="text-3xl font-semibold text-[var(--text-primary)]">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {cards.map((card) => {
          const Icon = ICONS[card.key];
          return (
            <article
              key={card.title}
              className="rounded-2xl p-4"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center text-[var(--brand-primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{card.description}</p>
              <div className="mt-4">
                <ImagePlaceholder label={card.imagePlaceholder} className="min-h-[130px]" />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
