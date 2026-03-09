export default function BlogDetailLoading() {
  return (
    <div className="space-y-6">
      <div className="h-96 animate-pulse rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)]" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={`blog-related-skeleton-${index}`}
            className="h-56 animate-pulse rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)]"
          />
        ))}
      </div>
    </div>
  );
}
