import type { IconType } from "react-icons";
import { FiBookOpen, FiHeart, FiMapPin, FiUsers } from "react-icons/fi";
import type { ServiceIconKey } from "@/content/servicesData";

const ICON_MAP: Record<ServiceIconKey, IconType> = {
  settlement: FiMapPin,
  education: FiBookOpen,
  support: FiHeart,
  interfaith: FiUsers,
};

interface ServiceIconProps {
  icon: ServiceIconKey;
  className?: string;
}

export function ServiceIcon({ icon, className = "h-5 w-5" }: ServiceIconProps) {
  const Icon = ICON_MAP[icon];
  return <Icon className={className} aria-hidden="true" />;
}
