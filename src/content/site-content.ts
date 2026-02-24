export interface SectionAction {
  href: string;
  label: string;
}

export interface HelpCardContent {
  key: "forms" | "senior" | "guidance" | "community";
  title: string;
  description: string;
  imagePlaceholder: string;
}

export const SITE_CONTENT = {
  hero: {
    heading: "Supporting Newcomers & Seniors with Real Human Help",
    subtext:
      "Practical, day-to-day assistance from volunteers who guide, support, and stand beside you every step of the way.",
    actions: [
      { href: "/how-we-help", label: "Get Help" },
      { href: "/contact", label: "Become a Volunteer" },
      { href: "/donate", label: "Donate" },
    ] satisfies SectionAction[],
    tags: ["Guidance", "Appointments", "Community Support"],
  },
  about: {
    heading: "Community Support That Feels Personal",
    text: "We are a volunteer-driven community network supporting newcomers and seniors across Ontario. Instead of just sharing links or phone numbers, we provide real, person-to-person assistance - helping individuals understand, navigate, and complete everyday tasks with confidence.",
    imagePlaceholder: "Community support illustration placeholder",
  },
  howWeHelp: {
    heading: "How We Help",
    cards: [
      {
        key: "forms",
        title: "Guidance & Forms",
        description:
          "We help you understand and complete important forms, applications, and services step by step.",
        imagePlaceholder: "Help with paperwork illustration placeholder",
      },
      {
        key: "senior",
        title: "Appointment Support",
        description:
          "Volunteers can accompany you to important appointments and help you communicate clearly.",
        imagePlaceholder: "Appointment assistance illustration placeholder",
      },
      {
        key: "guidance",
        title: "Daily Assistance",
        description:
          "Simple help with everyday tasks - from understanding letters to navigating local systems.",
        imagePlaceholder: "Guidance support flat illustration placeholder",
      },
      {
        key: "community",
        title: "Community Connection",
        description:
          "We connect you with local resources, programs, and support networks that truly help.",
        imagePlaceholder: "Community support icon set placeholder",
      },
    ] satisfies HelpCardContent[],
  },
  whyDifferent: {
    heading: "Why Our Support Matters",
    text: "We do not just provide information - we provide support that stays with you. Our volunteers guide individuals through real situations, ensuring clarity, confidence, and comfort at every step.",
    bullets: [
      "Real human support, not automated systems",
      "Step-by-step guidance",
      "Focus on practical outcomes",
      "Comfortable and friendly approach",
    ],
    imagePlaceholder: "Volunteer guidance moment placeholder",
  },
  impact: {
    heading: "Real Support. Real Impact.",
    text: "Every interaction creates meaningful change. From attending appointments together to helping someone understand critical documents - your support makes everyday life easier for someone in your community.",
    stories: [
      "A volunteer sitting with a senior",
      "Someone explaining documents",
      "Walking together to an appointment",
    ],
  },
  appointmentsSupport: {
    heading: "Appointments & Support",
    text: "From medical appointments to service offices, volunteers help individuals prepare, attend, and communicate with confidence.",
    imagePlaceholder: "Doctor appointment assistance placeholder",
  },
  communityNetwork: {
    heading: "Community Network",
    text: "We connect people with local groups, trusted programs, and supportive neighbors to build strong and lasting relationships.",
    imagePlaceholder: "Diverse community group placeholder",
  },
  donation: {
    heading: "Support Someone in Your Community",
    text: "Your contribution directly helps individuals receive the guidance and support they need. We do not run advertisements - our work is powered entirely by community support.",
    action: {
      href: "mailto:donations@srdfoundation.ca",
      label: "To donate, email: donations@srdfoundation.ca",
    } satisfies SectionAction,
    imagePlaceholder: "Hands holding heart donation concept placeholder",
  },
  volunteer: {
    heading: "Become a Volunteer",
    text: "Make a real difference by helping someone navigate everyday challenges. Your time, guidance, and presence can change someone's experience completely.",
    action: { href: "/contact", label: "Join as a Volunteer" } satisfies SectionAction,
    imagePlaceholder: "Volunteer support in community placeholder",
  },
  homePreviews: [
    {
      title: "How We Help",
      text: "Discover how we support forms, appointments, daily needs, and local connection.",
      href: "/how-we-help",
    },
    {
      title: "Impact",
      text: "See the real outcomes of person-to-person community support.",
      href: "/impact",
    },
    {
      title: "Donate",
      text: "Help fund practical support for newcomers and seniors in Ontario.",
      href: "/donate",
    },
    {
      title: "Volunteer",
      text: "Join our volunteers and make local support more accessible.",
      href: "/contact",
    },
  ],
} as const;
