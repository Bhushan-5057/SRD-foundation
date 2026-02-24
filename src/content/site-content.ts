export interface SectionAction {
  href: string;
  label: string;
}

export interface HelpCardContent {
  key: "forms" | "senior" | "guidance" | "community";
  title: string;
  description: string;
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
  },
  howWeHelp: {
    heading: "How We Help",
    cards: [
      {
        key: "forms",
        title: "Guidance & Forms",
        description:
          "We help you understand and complete important forms, applications, and services step by step.",
      },
      {
        key: "senior",
        title: "Appointment Support",
        description:
          "Volunteers can accompany you to important appointments and help you communicate clearly.",
      },
      {
        key: "guidance",
        title: "Daily Assistance",
        description:
          "Simple help with everyday tasks - from understanding letters to navigating local systems.",
      },
      {
        key: "community",
        title: "Community Connection",
        description:
          "We connect you with local resources, programs, and support networks that truly help.",
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
  },
  communityNetwork: {
    heading: "Community Network",
    text: "We connect people with local groups, trusted programs, and supportive neighbors to build strong and lasting relationships.",
  },
  donation: {
    heading: "Support Someone in Your Community",
    text: "Your contribution directly helps individuals receive the guidance and support they need. We do not run advertisements - our work is powered entirely by community support.",
    action: {
      href: "mailto:donations@srdfoundation.ca",
      label: "To donate, email: donations@srdfoundation.ca",
    } satisfies SectionAction,
  },
  volunteer: {
    heading: "Become a Volunteer",
    text: "Make a real difference by helping someone navigate everyday challenges. Your time, guidance, and presence can change someone's experience completely.",
    action: { href: "/contact", label: "Join as a Volunteer" } satisfies SectionAction,
  },
  homePreviews: [
    {
      title: "How We Help",
      text: "Discover our comprehensive approach to supporting the community. From assisting with complex government forms to accompanying individuals to essential appointments, we provide hands-on, practical guidance tailored to meet daily needs and foster strong local connections.",
      href: "/how-we-help",
    },
    {
      title: "Impact",
      text: "See the real, tangible outcomes of our person-to-person community support. Every interaction and every hour volunteered creates meaningful change, bringing hope, confidence, and relief to those facing difficult times in their everyday lives.",
      href: "/impact",
    },
    {
      title: "Donate",
      text: "Help fund critical, on-the-ground support for newcomers and seniors across Ontario. Because we don't run advertisements, every contribution goes directly toward building accessible resources, organizing volunteer efforts, and creating stronger neighborhoods.",
      href: "/donate",
    },
    {
      title: "Volunteer",
      text: "Join our dedicated network of volunteers and play a vital role in making local assistance more accessible. Your time and compassion can completely transform someone's experience, providing the comforting guidance they need to succeed.",
      href: "/contact",
    },
  ],
} as const;
