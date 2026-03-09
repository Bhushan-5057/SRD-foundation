export interface FAQContentItem {
  question: string;
  answer: string;
}

export interface FAQContentSection {
  sectionLabel: string;
  title: string;
  description: string;
  items: FAQContentItem[];
}

export const PAGE_FAQS: Record<"about" | "howWeHelp" | "services" | "events", FAQContentSection> = {
  about: {
    sectionLabel: "About FAQs",
    title: "Common questions about SRD Foundation",
    description:
      "Quick answers about who we are, who we support, and how our community-first approach works across Ontario.",
    items: [
      {
        question: "Who does SRD Foundation support?",
        answer:
          "We support newcomers, seniors, women, and families by offering practical guidance and person-to-person help with everyday challenges.",
      },
      {
        question: "What makes SRD Foundation different?",
        answer:
          "Our support is hands-on and relationship-based. Instead of only sharing information, our volunteers help people understand steps clearly and move forward with confidence.",
      },
      {
        question: "Where does SRD Foundation provide support?",
        answer:
          "Our services and programs are focused across Ontario, with local community connections, referrals, and volunteer-led support.",
      },
      {
        question: "How can I get involved with your mission?",
        answer:
          "You can contribute by volunteering, donating, or reaching out through the contact page to explore collaboration and community initiatives.",
      },
    ],
  },
  howWeHelp: {
    sectionLabel: "Support FAQs",
    title: "How our support works in real situations",
    description:
      "Learn what kind of help is available, how volunteers assist, and how to start receiving practical support.",
    items: [
      {
        question: "Can you help with forms and applications?",
        answer:
          "Yes. We guide individuals step by step through important forms, applications, and related service processes so nothing feels confusing or rushed.",
      },
      {
        question: "Do volunteers accompany people to appointments?",
        answer:
          "Yes. Depending on the situation, volunteers can help people prepare for appointments, attend with them, and support clearer communication.",
      },
      {
        question: "Is your support only for urgent cases?",
        answer:
          "No. We help with both urgent and everyday needs, including understanding letters, navigating systems, and connecting with community resources.",
      },
      {
        question: "How do I request support from SRD Foundation?",
        answer:
          "Use the contact page to reach out. Once we understand your needs, we guide you toward the most relevant support pathway.",
      },
    ],
  },
  services: {
    sectionLabel: "Services FAQs",
    title: "Questions about our service programs",
    description:
      "Everything you need to know before choosing a support program for settlement, care, and community connection.",
    items: [
      {
        question: "What services does SRD Foundation currently provide?",
        answer:
          "Our main service areas include newcomer settlement support, early childhood guidance, seniors and women's support, and interfaith community programs.",
      },
      {
        question: "How do I know which service is right for me?",
        answer:
          "Start with the service category closest to your current need. If you are unsure, contact us and we will guide you to the best-fit support stream.",
      },
      {
        question: "Can families access support across more than one service area?",
        answer:
          "Yes. Many families need multi-step support. We help connect related service pathways so support remains practical and coordinated.",
      },
      {
        question: "How quickly can I get started?",
        answer:
          "You can start by reaching out through our contact page. We then assess your request and share the next clear steps for support.",
      },
    ],
  },
  events: {
    sectionLabel: "Events FAQs",
    title: "What to know before joining our events",
    description:
      "Helpful answers about event participation, registration flow, and what to expect from SRD Foundation community sessions.",
    items: [
      {
        question: "Who can attend SRD Foundation events?",
        answer:
          "Our events are designed for newcomers, families, youth, seniors, and local community partners depending on each event theme.",
      },
      {
        question: "How do I choose the right event for my needs?",
        answer:
          "Review each event description, highlights, and agenda. Pick the session that matches your current goals such as settlement guidance, family support, or community dialogue.",
      },
      {
        question: "Where are your events usually held?",
        answer:
          "Most events are hosted at accessible community venues across Ontario, with location and timing clearly listed on each event card.",
      },
      {
        question: "How can I register interest for upcoming events?",
        answer:
          "Use the event page call-to-action to contact us, and we will share next steps for registration, updates, and participation details.",
      },
    ],
  },
};
