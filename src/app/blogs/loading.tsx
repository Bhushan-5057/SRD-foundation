import { GridCardsSkeleton } from "@/components/common/GridCardsSkeleton";

export default function BlogsLoading() {
  return (
    <div className="space-y-6">
      <div className="h-28 animate-pulse rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)]" />
      <GridCardsSkeleton cards={6} />
    </div>
  );
}
