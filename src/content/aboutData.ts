import type { ServiceIconKey } from "@/content/servicesData";

export interface AboutTextBlock {
  title: string;
  paragraphs: string[];
}

export interface AboutServiceBlock {
  title: string;
  description: string;
  icon: ServiceIconKey;
}

export interface AboutValueBlock {
  title: string;
  description: string;
}

export const ABOUT_DATA = {
  hero: {
    sectionLabel: "About Us",
    title: "No one should have to navigate life alone",
    description:
      "SRD Foundation is a volunteer-driven community organization supporting newcomers, seniors, women, and families across Ontario through practical and compassionate person-to-person guidance.",
  },
  whoWeAre: {
    title: "Who We Are",
    paragraphs: [
      "SRD Foundation is a volunteer-driven community organization dedicated to supporting newcomers, seniors, women, and families across Ontario.",
      "Built on over two years of hands-on volunteer experience, our foundation was created with a simple belief - no one should have to navigate life alone.",
      "We provide real, person-to-person support to help individuals settle, connect, and build stability in their everyday lives.",
    ],
  } as AboutTextBlock,
  ourStory: {
    title: "Our Story",
    paragraphs: [
      "SRD Foundation began through grassroots volunteer efforts focused on helping people with everyday challenges - from understanding paperwork to finding the right support systems.",
      "Through direct community engagement, we saw how many individuals struggled with access to guidance, connection, and reliable help. This inspired us to build SRD Foundation as a trusted platform for support, connection, and empowerment.",
      "Today, we continue to grow as a community-focused organization committed to making a meaningful difference in people's lives.",
    ],
  } as AboutTextBlock,
  whatWeDo: {
    title: "What We Do",
    intro:
      "Our work is rooted in compassion, connection, and practical support. We focus on delivering services that address real community needs:",
    services: [
      {
        title: "Settlement Support for Newcomers",
        description:
          "Standing beside newcomers with housing assistance, paperwork guidance, and local referrals - helping Canada feel like home from day one.",
        icon: "settlement",
      },
      {
        title: "Early Childhood Education & Care",
        description:
          "Nurturing young minds through safe care, engaging learning, and parent support - helping every child grow, thrive, and be ready for school.",
        icon: "education",
      },
      {
        title: "Seniors & Women's Support Services",
        description:
          "Supporting seniors with friendly visits and daily assistance, while providing guidance, interpretation, and a safe support system for women in need.",
        icon: "support",
      },
      {
        title: "Interfaith Harmony & Community Cohesion",
        description:
          "Bringing people of all faiths together through meaningful dialogue, workshops, and community events that build understanding and lasting connections.",
        icon: "interfaith",
      },
    ] as AboutServiceBlock[],
  },
  mission: {
    title: "Our Mission",
    description:
      "To provide compassionate, practical, and accessible support to newcomers, seniors, women, and families - helping them navigate life in Canada with confidence, dignity, and independence.",
  },
  vision: {
    title: "Our Vision",
    description:
      "To build an inclusive and connected community where every individual feels supported, valued, and empowered to thrive.",
  },
  values: {
    title: "Our Values",
    items: [
      { title: "Compassion", description: "We serve with empathy and care." },
      { title: "Community", description: "We believe in connection and belonging." },
      { title: "Respect", description: "We honour every individual's journey." },
      { title: "Integrity", description: "We act with honesty and transparency." },
      { title: "Impact", description: "We focus on real, meaningful change." },
      { title: "Empowerment", description: "We empower individuals with the knowledge, confidence, and support they need to navigate challenges and live independently." }
    ] as AboutValueBlock[],
  },
  whyWeDoThis: {
    title: "Why We Do This",
    paragraphs: [
      "At SRD Foundation, we understand that settling in a new country, aging alone, or facing life challenges can be overwhelming.",
      "That's why we are committed to being a trusted support system - helping individuals feel at home, find direction, and move forward with confidence.",
    ],
  } as AboutTextBlock,
} as const;
