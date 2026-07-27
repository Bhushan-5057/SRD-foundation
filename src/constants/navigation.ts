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
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  {
    href: "/interventions",
    label: "Interventions",
    children: [
      {
        href: "/interventions/senior-empowerment",
        label: "Senior Empowerment & Inclusion",
      },
    ],
  },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate Now" },
  { href: "/contact", label: "Contact Us" },
];

export const FOOTER_NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/donate", label: "Donate Now" },
  {
    href: "/interventions/senior-empowerment",
    label: "Senior Empowerment & Inclusion",
  },
];
