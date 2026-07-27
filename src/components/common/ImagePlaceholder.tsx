import Image, { type StaticImageData } from "next/image";

interface ImagePlaceholderProps {
  src?: string | StaticImageData;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  label?: string;
  objectPosition?: string;
  objectFit?: "cover" | "contain";
}

export function ImagePlaceholder({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "100vw",
  fill = true,
  label = "Image placeholder",
  objectPosition = "object-center",
  objectFit = "cover",
}: ImagePlaceholderProps) {
  const fitClass = objectFit === "contain" ? "object-contain" : "object-cover";

  if (src) {
    if (fill) {
      return (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`${fitClass} ${objectPosition} ${className}`}
        />
      );
    }

    return (
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={800}
        priority={priority}
        sizes={sizes}
        className={`h-full w-full ${fitClass} ${objectPosition} ${className}`}
      />
    );
  }

  return (
    <div
      className={`flex h-full min-h-[200px] w-full items-center justify-center bg-[var(--surface-soft)] text-xs font-medium text-[var(--text-muted)] sm:text-sm ${className}`}
      role="img"
      aria-label={alt || label}
    >
      {label}
    </div>
  );
}
