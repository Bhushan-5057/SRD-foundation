import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import type { ServiceData } from "@/content/servicesData";
import { ServiceIcon } from "@/components/common/ServiceIcon";
import { renderServiceTitleWithAccent } from "@/components/pages/services/ServiceTitleAccent";

interface ServiceCardProps {
  service: ServiceData;
  variant?: "default" | "minimal";
}

export function ServiceCard({ service, variant = "default" }: ServiceCardProps) {
  const isMinimal = variant === "minimal";

  return (
    <article
      className={`group flex h-full flex-col rounded-2xl transition-all duration-300 ${
        isMinimal
          ? "border border-[var(--border-color)]/70 bg-[var(--surface)]/85 p-4 hover:-translate-y-0.5 hover:shadow-md sm:p-5"
          : "min-h-[250px] border border-[var(--border-color)] bg-[var(--surface-soft)] p-5 hover:-translate-y-1 hover:shadow-lg sm:p-6"
      }`}
    >
      <div
        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border-color)] text-[var(--brand-primary)] ${
          isMinimal ? "bg-[var(--surface-soft)]" : "bg-[var(--surface)]"
        }`}
      >
        <ServiceIcon icon={service.icon} className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>
      <h3
        className={`mt-4 font-semibold leading-snug text-[var(--text-primary)] ${
          isMinimal ? "text-base sm:text-lg" : "text-lg"
        }`}
      >
        {renderServiceTitleWithAccent(service.title, service.slug)}
      </h3>
      <p
        className={`mt-3 flex-1 leading-6 text-[var(--text-muted)] ${
          isMinimal ? "text-sm" : "text-sm md:text-[15px]"
        }`}
      >
        {service.description}
      </p>
      <Link
        href={`/services/${service.slug}`}
        className={`inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-primary)] transition-colors group-hover:text-[var(--brand-secondary)] ${
          isMinimal ? "mt-4" : "mt-6"
        }`}
      >
        Learn More
        <FiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </article>
  );
}
