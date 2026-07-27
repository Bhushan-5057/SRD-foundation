export const CONTACT_PAGE_IMAGES = {
  contacthero: "/assets/contacthero.webp",
} as const;

export const CONTACT_PAGE_CONTENT = {
  hero: {
    title: "Contact Us",
    imageSrc: CONTACT_PAGE_IMAGES.contacthero,
  },
  intro: {
    badge: "Let's Talk",
    heading: "Get in Touch with SRD Foundation",
    text: "Thank you for your interest in reaching out to us. Whether you have inquiries about our services, want to get involved, or simply wish to connect, we're here to listen and assist you.",
  },
  social: {
    heading: "Connect on Social Media",
    paragraphs: [
      "Stay updated on our latest activities, events, and news by following us on social media. Connect with us and join our online community of supporters.",
      "Your feedback matters to us. Whether you have suggestions for improvement, testimonials to share, or questions about our services, we appreciate your input and strive to continuously enhance our support for survivors.",
      "Your interest in SRD Foundation means a lot to us. Every connection made helps us further our mission of supporting survivors and creating a safer, more compassionate community.",
    ],
  },
} as const;
