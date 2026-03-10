import Image, { type StaticImageData } from "next/image";
import HowWeHelpImage from "../../../../public/assets/homepage/helping3.webp";
import ImpactImage from "../../../../public/assets/homepage/volunteers.jpg";
import DonateImage from "../../../../public/assets/homepage/donate2.jpg";
import VolunteerImage from "../../../../public/assets/homepage/helping2.jpg";

interface HomePreviewItem {
  title: string;
  text: string;
  href: string;
}

interface HomePreviewGridProps {
  items: readonly HomePreviewItem[];
}

const PREVIEW_IMAGES: Record<string, { src: StaticImageData; alt: string }> = {
  "/how-we-help": { src: HowWeHelpImage, alt: "Volunteers helping with forms" },
  "/impact": { src: ImpactImage, alt: "Community impact moments" },
  "/donate": { src: DonateImage, alt: "Donation support for local families" },
  "/contact": { src: VolunteerImage, alt: "Volunteer support in action" },
};

const FALLBACK_PREVIEW = PREVIEW_IMAGES["/how-we-help"];

export function HomePreviewGrid({ items }: HomePreviewGridProps) {
  return (
    <section className="mt-10 space-y-10">
      <div className="py-8 text-center sm:py-12" data-aos="zoom-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
          Explore
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Learn More by Section
        </h2>
        <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, index) => {
          const image = PREVIEW_IMAGES[item.href] ?? FALLBACK_PREVIEW;
          return (
            <article
              key={item.title}
              className="rounded-2xl p-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 sm:h-80 overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300">
                <Image src={image.src} alt={image.alt} fill className="object-cover" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-[var(--text-primary)]">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">{item.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
