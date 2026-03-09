import type { ReactNode } from "react";

export type ServiceIconKey = "settlement" | "education" | "support" | "interfaith";

export interface ServiceSection {
  title: string;
  subtitle?: ReactNode;
  endline?: ReactNode;
  content: ReactNode[];
  icon?: string; // react-icons name
  image?: string;
  imageAlt?: string;
}

export interface ServiceSEO {
  title: string;
  description: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  description: string;
  image: string;
  icon: ServiceIconKey;
  seo: ServiceSEO;
  sections: ServiceSection[];
}

export interface ServiceSectionMedia {
  src: string;
  alt: string;
}

export const SERVICE_SECTION_MEDIA: Record<
  string,
  Record<string, ServiceSectionMedia>
> = {
  "settlement-support-for-newcomers": {
    Overview: {
      src: "/assets/servicepage/settlement.png",
      alt: "Support worker helping a newcomer with settlement planning",
    },
    "What We Help With": {
      src: "/assets/appointment.jpg",
      alt: "Practical guidance session for forms and daily systems",
    },
    "How Our Support Works": {
      src: "/assets/homepage/helping4.jpg",
      alt: "Step-by-step personalized support conversation",
    },
    "Who Can Come for Help": {
      src: "/assets/community.jpg",
      alt: "People from different backgrounds receiving support",
    },
    "Why This Service Matters": {
      src: "/assets/homepage/heart.jpg",
      alt: "Community care and confidence-building support",
    },
  },
  "early-childhood-education-and-care": {
    Overview: {
      src: "/assets/servicepage/service7.jpg",
      alt: "Parent and child engaging in early learning activities",
    },
    "What We Help With": {
      src: "/assets/enjoy2.jpg",
      alt: "Family discussing childcare and education options",
    },
    "How We Support Families": {
      src: "/assets/helping.jpg",
      alt: "Caregiver support conversation focused on child development",
    },
    "Who This Service Is For": {
      src: "/assets/Heartpeople.jpg",
      alt: "Families and caregivers connected to early years support",
    },
    "Why This Service Matters": {
      src: "/assets/servicepage/service8.jpg",
      alt: "Healthy child development supported by informed caregivers",
    },
  },
  "seniors-and-womens-support-services": {
    Overview: {
      src: "/assets/support.jpg",
      alt: "Compassionate community support for seniors and women",
    },
    "Support for Seniors": {
      src: "/assets/seniors.jpg",
      alt: "Senior receiving personalized guidance and check-in support",
    },
    "Support for Women": {
      src: "/assets/homepage/helping2.jpg",
      alt: "Confidential support conversation for women",
    },
    "Interpretation & Communication Help": {
      src: "/assets/appointment.jpg",
      alt: "Communication assistance during an appointment",
    },
    "Who Can Access These Services": {
      src: "/assets/community.jpg",
      alt: "Inclusive support services for seniors, women, and caregivers",
    },
    "Why These Services Matter": {
      src: "/assets/servicepage/service1.jpg",
      alt: "Restoring safety, dignity, and independence through support",
    },
  },
  "interfaith-harmony-and-community-cohesion": {
    Overview: {
      src: "/assets/servicepage/service5.jpg",
      alt: "Diverse community members gathering in a welcoming space",
    },
    "What We Offer": {
      src: "/assets/homepage/volunteers4.jpg",
      alt: "Interfaith dialogue and collaborative community activities",
    },
    "How These Programs Work": {
      src: "/assets/homepage/volunteers5.jpg",
      alt: "Facilitated inclusive event promoting respectful discussion",
    },
    "Who Can Join": {
      src: "/assets/volunteers2.jpg",
      alt: "People of different ages and backgrounds joining community programs",
    },
    "Why This Work Matters": {
      src: "/assets/servicepage/service6.jpg",
      alt: "Building connection and social harmony across communities",
    },
  },
};

export const SERVICES_DATA: ServiceData[] = [
  //settlement-support-for-newcomers
  {
    slug: "settlement-support-for-newcomers",
    title: "Settlement Support & Everyday Navigation",
    description:
      "One-on-one support to help individuals manage housing, paperwork, and daily systems with confidence.",
    image: "/assets/settlement.png",
    icon: "settlement",
    seo: {
      title: "Settlement Support Services | SRD Foundation",
      description:
        "Get help with housing, paperwork, government systems, and daily life navigation with SRD Foundation.",
    },
    sections: [
      {
        title: "Overview",
        icon: "FiInfo",
        content: [
          <>
            Life can feel overwhelming when you are trying to keep up with rent, mail, online portals, and appointments—especially if systems have changed or you are dealing with a big life transition. <strong>SRD Foundation</strong> offers calm, oneonone support so you do not have to figure it all out on your own.
          </>,
        ],
      },
      {
        title: "What We Help With",
        icon: "FiCheckCircle",
        content: [
          "Housing and basic needs: understanding rental ads, leases, landlord communication, and your rights and responsibilities as a tenant; exploring options if you are worried about housing stability",
          "Forms and paperwork: support with reading, filling out, and submitting applications for school enrollment, child benefits, income supports, government IDs, and other essential services.",
          "Everyday systems: guidance on how to access family doctors and walkin clinics, open bank accounts, file taxes, update addresses, and use online government portals.",
          "Referrals and connections: warm introductions to legal clinics, employment and training programs, language classes, financial counselling, and other community supports that match your situation.",
        ],
      },
      {
        title: "How Our Support Works",
        subtitle: <>Our approach is simple: <strong>listen, explain, and walk with you.</strong></>,
        icon: "FiLayers",
        content: [
          "We start by listening to your story and asking what you are most worried about right now.",
          "Together, we break your situation into small, manageable steps and agree on what to work on first.",
          "We help you gather information and documents, and we sit with you as you complete forms or make important calls.",
          "Where needed, we follow up with you so you are not left wondering what to do next."
        ],
        endline: "Support can be a single visit or a series of meetings—whatever makes sense for your needs."
      },
      {
        title: "Who Can Come for Help",
        icon: "FiHeart",
        content: [
          <>
            This service is open to <strong>any adult, youth, or family</strong> who needs help understanding or navigating daytoday systems. It does not matter how long you have lived in Canada, what your background is, or what your income or status may be. If you are confused, stuck, or simply tired of dealing with things alone, you are welcome.
          </>,
        ],
      },
      {
        title: "Why This Service Matters",
        icon: "FiHeart",
        content: [
          "When people understand their options and feel supported, they make better decisions and feel less stress. Our goal is to turn fear and confusion into clarity and confidence, so you can focus on building a safe, stable, and hopeful future.",
        ],
      },
    ],
  },

  //early-childhood-education-and-care
  {
    slug: "early-childhood-education-and-care",
    title: "Early Childhood Education & Family Support",
    description:
      "Helping families make confident decisions about childcare, development, and early learning.",
    image: "/images/services/education.jpg",
    icon: "education",
    seo: {
      title: "Childcare & Early Education Support | SRD Foundation",
      description:
        "Guidance for childcare, early development, school systems, and parenting resources.",
    },
    sections: [
      {
        title: "Overview",
        icon: "FiInfo",
        content: [
          <>
            The early years are full of questions: Which childcare should I choose? Is my child developing on track? How do I support learning at home? At <strong>SRD Foundation</strong>, we walk alongside parents and caregivers so they feel informed, supported, and empowered in their role.
          </>,
        ],
      },
      {
        title: "What We Help With",
        icon: "FiCheckCircle",
        content: [
          "Childcare and daycare options: explaining the differences between licensed childcare, homebased care, preschool, before and afterschool programs, and parttime care.",
          "Early learning and development: sharing ideas and resources that support language, social skills, emotional regulation, and school readiness through play and daily routines.",
          "Education pathways: helping families understand how the school system works—registration, transportation, special education supports, and communication with teachers.",
          "Connections and referrals: linking families with earlyyears centres, parenting programs, speech and language services, occupational therapy, mentalhealth supports, and other specialized services if needed."
        ],
      },
      {
        title: "How We Support Families",
        subtitle: "We recognize that every family has its own culture, strengths, and challenges.",
        icon: "FiUsers",
        content: [
          "We invite parents and caregivers to talk openly about their worries, schedules, work hours, and budget.",
          "We help map out realistic childcare options and explain how waitlists and subsidies work.",
          "We provide simple, lowcost activity ideas that families can use at home to support learning through everyday moments—mealtime, playtime, bedtime.",
          "When a parent is concerned about their childs behaviour or development, we help them prepare questions for professionals and connect them to the right services."
        ],
        endline: "Our goal is not to tell families what to do, but to provide clear information and encouragement so they can make decisions that feel right for them."
      },
      {
        title: "Who This Service Is For",
        icon: "FiHeart",
        content: [
          <>
            This service is for <strong>anyone caring for young children</strong>: parents, grandparents, guardians, foster parents, and family friends. You might be expecting a baby, parenting toddlers, or supporting a child entering school. Whether you feel confident but want information, or completely overwhelmed and unsure where to start, there is a place for you here.
          </>,
        ],
      },
      {
        title: "Why This Service Matters",
        icon: "FiHeart",
        content: [
          "When caregivers are supported, children are more likely to feel secure and to thrive. Strong, informed families create strong communities. By offering early guidance, we help prevent small concerns from becoming big problems later on.",
        ],
      },
    ],
  },

  //seniors-and-womens-support-services
  {
    slug: "seniors-and-womens-support-services",
    title: "Seniors & Women’s Support Services",
    description:
      "Compassionate support for seniors and women navigating daily challenges and safety concerns.",
    image: "/images/services/support.jpg",
    icon: "support",
    seo: {
      title: "Support Services for Seniors & Women | SRD Foundation",
      description:
        "Personalized support for seniors and women including safety, health, and community resources.",
    },
    sections: [
      {
        title: "Overview",
        icon: "FiInfo",
        content: [
          <>
            As people age or go through difficult situations, everyday life can become harder to manage—emotionally, physically, and financially. <strong>SRD Foundation</strong> provides compassionate support to seniors and women so they do not have to face these challenges alone.
          </>,
        ],
      },
      {
        title: "Support for Seniors",
        subtitle: "Aging can bring changes in health, mobility, friendships, and family roles. We offer:",
        icon: "FiUser",
        content: [
          "Friendly visits and regular checkins to reduce loneliness and social isolation.",
          "Help understanding letters, bills, benefit notices, and medical instructions.",
          "Guidance on accessing homecare services, meal programs, transportation, and recreation programs for older adults.",
          "Information and referrals related to pensions, benefits, and community supports."
        ],
        endline: "Visits can take place in the home, over the phone, or in community spaces, depending on what is safest and most comfortable"
      },
      {
        title: "Support for Women",
        subtitle: "Women may face a wide range of pressures: caregiving duties, financial stress, relationship conflict, or abuse and violence. We provide:",
        icon: "FiShield",
        content: [
          "A safe, confidential space to talk about what is happening without fear of judgment.",
          "Information on legal rights, protection orders, shelters, counselling, and income supports.",
          "Help creating a personalized safety plan, including steps to take in an emergency.",
          "Support with making calls, filling out forms, or attending appointments when appropriate."
        ],
        endline: "Our role is to stand beside women as they consider their options and to respect the choices they make."
      },
      {
        title: "Interpretation & Communication Help",
        subtitle: "Language and communication should never be a barrier to safety or support. When possible, we:",
        icon: "FiMessageCircle",
        content: [
          "Help people understand documents, health instructions, and service information in plain language.",
          "Assist with phone calls or appointments where extra communication support is needed."
        ],
        endline: "(Availability of language support may depend on staff, volunteers, and community partners, but we do our best to find solutions.)"
      },
      {
        title: "Who Can Access These Services",
        subtitle: "These services are open to:",
        icon: "FiUsers",
        content: [
          <><strong>Seniors</strong> living alone, with family, or in shared housing, who would benefit from more connection or guidance.</>,
          <><strong>Women</strong> of any age or background, including young women, mothers, elders, and women without children.</>,
          <><strong>Caregivers and family members</strong> who are supporting seniors or women and need information on how to help.</>
        ],
      },
      {
        title: "Why These Services Matter",
        icon: "FiHeart",
        content: [
          "No one should suffer in silence or feel forgotten. Regular contact, clear information, and caring support can reduce fear, improve safety, and restore a sense of dignity and independence. We focus on gentle, consistent support that honours each persons story.",
        ],
      },
    ],
  },

  //interfaith-harmony-and-community-cohesion
  {
    slug: "interfaith-harmony-and-community-cohesion",
    title: "Interfaith Harmony & Community Cohesion",
    description:
      "Building inclusive communities through dialogue, collaboration, and shared experiences.",
    image: "/images/services/interfaith.jpg",
    icon: "interfaith",
    seo: {
      title: "Community & Interfaith Programs | SRD Foundation",
      description:
        "Programs that promote inclusion, understanding, and unity across diverse communities.",
    },
    sections: [
      {
        title: "Overview",
        icon: "FiInfo",
        content: [
          <>
            Our communities are made up of many languages, cultures, and beliefs. This diversity is a strength—but only when people feel safe, seen, and connected.<strong>SRD Foundation</strong> creates opportunities for people to meet across differences, build understanding, and work together for the common good.
          </>,
        ],
      },
      {
        title: "What We Offer",
        icon: "FiCheckCircle",
        content: [
          <><strong>Interfaith dialogues and conversation circles</strong> where participants can share their experiences and learn about others in a guided, respectful setting.</>,
          <><strong>Workshops and learning sessions</strong> on topics like inclusion, antiracism, empathy, and peaceful conflict resolution.</>,
          <><strong>Cultural and community events</strong> that celebrate traditions, highlight shared values, and create space for families to participate together.</>,
          <><strong>Collaborative projects</strong> with community groups, faith communities, schools, and service agencies to address local needs and promote harmony.</>
        ],
      },
      {
        title: "How These Programs Work",
        subtitle: "Our communitybuilding work is grounded in hospitality and mutual respect.",
        icon: "FiLayers",
        content: [
          "Events are designed so that everyone—regardless of faith, culture, or background—feels welcome and safe to participate.",
          "Facilitators encourage listening, honest questions, and storytelling rather than debate or argument.",
          "Activities often include shared meals, creative arts, or service projects, which help people connect beyond words.",
          "Participants are invited to suggest topics and cocreate future events, so programs stay rooted in real community needs."
        ],
      },
      {
        title: "Who Can Join",
        subtitle: "Anyone who cares about building a kinder, more connected community is invited:",
        icon: "FiHeart",
        content: [
          "Youth, adults, and seniors",
          "People of all faiths and people who do not identify with a faith",
          "Longtime residents and people who are new to the area",
          "Community leaders, volunteers, and organizations looking to partner"
        ],
        endline:"You do not need any special knowledge—only openness and respect."
      },
      {
        title: "Why This Work Matters",
        icon: "FiHeart",
        content: [
          <>
            Misunderstanding and isolation can easily lead to fear and division. When people meet facetoface, share food, listen to each other’s stories, and work side by side, walls start to come down. Our interfaith and community programs help turn “us and them” into <strong>one community with many voices.</strong>
          </>,
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return SERVICES_DATA.find((service) => service.slug === slug);
}
