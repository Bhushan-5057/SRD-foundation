export interface EventAgendaItem {
  time: string;
  title: string;
  description: string;
}

export interface EventData {
  slug: string;
  title: string;
  navLabel: string;
  excerpt: string;
  category: string;
  dateLabel: string;
  timeLabel: string;
  location: string;
  image: string;
  gallery: [string, string, string, string];
  highlights: string[];
  agenda: EventAgendaItem[];
  seo: {
    title: string;
    description: string;
  };
}

export const EVENTS_DATA: EventData[] = [
  {
    slug: "newcomer-settlement-resource-fair",
    title: "Newcomer Settlement Resource Fair",
    navLabel: "Settlement Resource Fair",
    excerpt:
      "Meet trusted local agencies, ask questions one-on-one, and leave with a clear action plan for housing, health, and community services.",
    category: "Settlement Support",
    dateLabel: "April 18, 2026",
    timeLabel: "10:00 AM - 2:00 PM",
    location: "Vaughan Community Hub, ON",
    image: "/assets/homepage/helping3.jpg",
    gallery: [
      "/assets/homepage/helping3.jpg",
      "/assets/appointment.jpg",
      "/assets/community.jpg",
      "/assets/homepage/volunteers.jpg",
    ],
    highlights: [
      "Direct help with forms, benefits, and newcomer service navigation.",
      "Mini sessions with legal, health, and employment support partners.",
      "Family-friendly space with volunteer-guided support desks.",
    ],
    agenda: [
      {
        time: "10:00 AM",
        title: "Welcome and Check-In",
        description: "Get your event map, service checklist, and support desk tokens.",
      },
      {
        time: "10:30 AM",
        title: "Resource Walkthrough",
        description: "A practical walkthrough of key services available in York Region.",
      },
      {
        time: "11:30 AM",
        title: "Expert Support Booths",
        description: "One-on-one guidance with settlement, legal, and healthcare partners.",
      },
      {
        time: "1:00 PM",
        title: "Action Planning Circle",
        description: "Leave with personalized next steps for the next 30-60 days.",
      },
    ],
    seo: {
      title: "Newcomer Settlement Resource Fair | SRD Foundation",
      description:
        "Join SRD Foundation's upcoming resource fair in Vaughan for practical newcomer settlement guidance and trusted local service connections.",
    },
  },
  {
    slug: "early-learning-family-open-house",
    title: "Early Learning Family Open House",
    navLabel: "Early Learning Open House",
    excerpt:
      "A welcoming event for parents and caregivers to explore early-childhood learning tools, community resources, and family support pathways.",
    category: "Early Childhood",
    dateLabel: "May 9, 2026",
    timeLabel: "11:00 AM - 3:00 PM",
    location: "SRD Family Centre, Toronto, ON",
    image: "/assets/learning5.jpg",
    gallery: [
      "/assets/learning2.jpg",
      "/assets/learning3.jpg",
      "/assets/learning4.jpg",
      "/assets/learning.jpg",
    ],
    highlights: [
      "Interactive early-learning zones for children ages 2-8.",
      "Parent sessions on childcare options, subsidies, and routines at home.",
      "Referrals to speech, development, and family wellness supports.",
    ],
    agenda: [
      {
        time: "11:00 AM",
        title: "Family Welcome",
        description: "Meet facilitators and explore activity corners by age group.",
      },
      {
        time: "11:45 AM",
        title: "Parent Guidance Session",
        description: "Understand childcare pathways, waitlists, and practical home routines.",
      },
      {
        time: "1:00 PM",
        title: "Play and Learn Labs",
        description: "Hands-on learning stations designed with educators and volunteers.",
      },
      {
        time: "2:15 PM",
        title: "Support Referrals",
        description: "Connect with local services and book follow-up support.",
      },
    ],
    seo: {
      title: "Early Learning Family Open House | SRD Foundation",
      description:
        "Discover early-learning supports, childcare guidance, and family-focused resources at SRD Foundation's upcoming open house in Toronto.",
    },
  },
  {
    slug: "interfaith-community-dialogue-night",
    title: "Interfaith Community Dialogue Night",
    navLabel: "Interfaith Dialogue Night",
    excerpt:
      "Bring people together across cultures and beliefs through respectful dialogue, shared stories, and collaborative community action.",
    category: "Interfaith & Community",
    dateLabel: "June 6, 2026",
    timeLabel: "5:30 PM - 8:30 PM",
    location: "Maple Civic Hall, Vaughan, ON",
    image: "/assets/volunteers6.jpg",
    gallery: [
      "/assets/Charity.jpg",
      "/assets/volunteers7.jpg",
      "/assets/volunteers3.jpg",
      "/assets/community.jpg",
    ],
    highlights: [
      "Facilitated conversation circles designed for respectful listening.",
      "Youth and senior shared-story session to build empathy across generations.",
      "Community collaboration board to co-design future local initiatives.",
    ],
    agenda: [
      {
        time: "5:30 PM",
        title: "Community Welcome",
        description: "Opening remarks and orientation to dialogue guidelines.",
      },
      {
        time: "6:00 PM",
        title: "Dialogue Circles",
        description: "Small-group sessions focused on understanding and inclusion.",
      },
      {
        time: "7:15 PM",
        title: "Shared Meal and Reflection",
        description: "Community meal and reflection prompts to deepen connection.",
      },
      {
        time: "8:00 PM",
        title: "Collaborative Commitments",
        description: "Capture ideas and commitments for follow-up community action.",
      },
    ],
    seo: {
      title: "Interfaith Community Dialogue Night | SRD Foundation",
      description:
        "Join SRD Foundation's interfaith dialogue night in Vaughan to build stronger community ties through guided conversations and shared action.",
    },
  },
];

export function getEventBySlug(slug: string) {
  return EVENTS_DATA.find((event) => event.slug === slug);
}
