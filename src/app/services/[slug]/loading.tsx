export default function ServiceDetailLoading() {
  return (
    <div className="mx-auto w-full max-w-[1180px] space-y-8">
      <div className="h-10 w-36 animate-pulse rounded-full border border-[var(--border-color)] bg-[var(--surface-soft)]" />
      <div className="h-[260px] animate-pulse rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] sm:h-[320px]" />
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
        <div className="aspect-[16/10] animate-pulse rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)]" />
        <div className="h-full min-h-[260px] animate-pulse rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)]" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-64 animate-pulse rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)]" />
        <div className="h-64 animate-pulse rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)]" />
      </div>
    </div>
  );
}
