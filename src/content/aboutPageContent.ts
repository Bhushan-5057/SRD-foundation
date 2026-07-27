export const ABOUT_PAGE_IMAGES = {
  about1: "/assets/about1.jpg",
  abouthero: "/assets/abouthero.webp",
  aboutsection: "/assets/aboutsection.webp",
} as const;

export const ABOUT_PAGE_CONTENT = {
  hero: {
    title: "About Us",
    imageSrc: ABOUT_PAGE_IMAGES.abouthero,
  },
  intro: {
    heading: "About SRD Foundation",
    paragraphs: [
      "At SRD Foundation, our journey began with a vision to create a sanctuary for individuals and families affected by abuse, a place where compassion meets resilience and healing thrives. Established in 2022, we have since been unwavering in our commitment to empowering survivors and fostering a community of support.",
      "Driven by compassion and a profound desire for positive change, our founder Mrs Ivie Iyamu envisioned a foundation that would serve as a guiding light for those navigating the difficult journey of overcoming abuse. Their passion laid the foundation for what SRD Foundation is today.",
    ],
    listTitle: "SRD Foundation is established to:",
    bullets: [
      "Address the emotional distress faced by abused women in Canada by providing them with supportive individual and group counselling.",
      "Address poverty among low-income individuals and families in Canada by providing them with food, clothing, and other basic necessities of life.",
    ],
    imageSrc: ABOUT_PAGE_IMAGES.about1,
  },
  valuesBanner: {
    badge: "Our Value",
    heading: "It's more than a community",
    text: "We believe in a holistic approach to healing. Our team of professionals, volunteers, and advocates work tirelessly to not only address immediate needs but also to empower survivors towards long-term recovery, independence, and a renewed sense of hope.",
    imageSrc: ABOUT_PAGE_IMAGES.aboutsection,
  },
  valueCards: [
    {
      title: "Our Values",
      description:
        "Compassion, Empowerment, Resilience. These core values drive everything we do. We are committed to fostering a safe and nurturing environment where survivors can rebuild their lives with dignity and strength.",
    },
    {
      title: "Mission",
      description:
        "SRD Foundation is dedicated to providing comprehensive support services to survivors of abuse, encompassing counseling, basic needs assistance, empowerment programs, legal aid, transitional housing, and specialized support for children, teenagers, men and women.",
    },
  ],
  join: {
    heading: "Join Our Cause",
    paragraphs: [
      "We invite you to join us in our mission. Your support, whether through volunteering, donations, or spreading awareness, plays a crucial role in our collective efforts to make a lasting impact on the lives of survivors.",
      "Every success story is a testament to the generosity and kindness of our supporters. Together, we continue to write stories of resilience, healing, and hope.",
    ],
    action: { href: "/volunteer", label: "Join Our Team" },
  },
} as const;
