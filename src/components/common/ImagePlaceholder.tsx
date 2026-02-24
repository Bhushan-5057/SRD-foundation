interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-dashed border-[var(--border-color)] bg-[var(--surface-soft)]/70 ${className}`}
    >
      <div className="pointer-events-none absolute -left-10 top-6 h-24 w-24 rounded-full bg-[var(--brand-primary)]/20 blur-2xl" />
      <div className="pointer-events-none absolute -right-8 bottom-4 h-20 w-20 rounded-full bg-[var(--brand-secondary)]/20 blur-2xl" />
      <div className="relative flex h-full min-h-[180px] items-center justify-center px-4 text-center text-xs font-medium leading-5 text-[var(--text-muted)] sm:text-sm">
        {label}
      </div>
    </div>
  );
}
