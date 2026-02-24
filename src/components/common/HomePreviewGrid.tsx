import Link from "next/link";
import { ImagePlaceholder } from "@/components/common/ImagePlaceholder";

interface HomePreviewItem {
  title: string;
  text: string;
  href: string;
}

interface HomePreviewGridProps {
  items: readonly HomePreviewItem[];
}

export function HomePreviewGrid({ items }: HomePreviewGridProps) {
  return (
    <section className="space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">Explore</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">Learn More by Section</h2>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <article key={item.title} className="rounded-2xl p-4">
            <ImagePlaceholder label={`${item.title} image placeholder`} className="min-h-[120px]" />
            <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">{item.text}</p>
            <Link
              href={item.href}
              className="mt-4 inline-flex rounded-full px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:bg-[var(--surface-soft)]"
            >
              Go to {item.title}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
