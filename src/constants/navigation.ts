import { SERVICES_DATA } from "@/content/servicesData";
import { EVENTS_DATA } from "@/content/eventsData";

export interface NavChildItem {
  href: string;
  label: string;
}

export interface NavItem {
  href: string;
  label: string;
  children?: NavChildItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    children: SERVICES_DATA.map((service) => ({
      href: `/services/${service.slug}`,
      label: service.title,
    })),
  },
  {
    href: "/events",
    label: "Events",
    children: EVENTS_DATA.map((event) => ({
      href: `/events/${event.slug}`,
      label: event.navLabel,
    })),
  },
   {
    href: "/community",
    label: "Community",
    children: [
      { href: "/how-we-help", label: "How We Help" },
      { href: "/impact", label: "Impact" },
      { href: "/blogs", label: "Blogs" },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/donate", label: "Donate" },
];
export const FOOTER_NAV: NavItem[] = [
  { href: "/how-we-help", label: "How we help" },
  { href: "/impact", label: "Impact" },
  { href: "/donate", label: "Donate" },
];
