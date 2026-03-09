interface GridCardsSkeletonProps {
  cards?: number;
}

export function GridCardsSkeleton({ cards = 4 }: GridCardsSkeletonProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: cards }).map((_, index) => (
        <div
          key={`skeleton-${index}`}
          className="h-56 animate-pulse rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)]"
        />
      ))}
    </section>
  );
}
