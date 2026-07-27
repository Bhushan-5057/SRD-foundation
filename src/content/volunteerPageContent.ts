export const VOLUNTEER_PAGE_IMAGES = {
  volunteer1: "/assets/volunteer1.webp",
  volunteer2: "/assets/volunteer2.webp",
  volunteer3: "/assets/volunteer3.webp",
  volunteerhero: "/assets/volunteerhero.webp",
} as const;

export const VOLUNTEER_PAGE_CONTENT = {
  hero: {
    title: "Volunteer",
    imageSrc: VOLUNTEER_PAGE_IMAGES.volunteerhero,
  },
  intro: {
    badge: "Support the Mission",
    heading: "Get Involved: Volunteer and Make a Difference",
    paragraphs: [
      "At SRD Foundation, we believe that change begins with action. Your commitment to our cause can make a profound impact on the lives of survivors of abuse. Join us in our mission to empower, support, and uplift those in need.",
    ],
    opportunitiesHeading: "Volunteer Opportunities",
    opportunitiesText:
      "We offer diverse volunteer opportunities that cater to various skills and interests. Whether you're passionate about counseling, community outreach, event coordination, or administrative support, there's a place for you in our team.",
    imageSrc: VOLUNTEER_PAGE_IMAGES.volunteer1,
  },
  benefits: {
    heading: "Benefits of Volunteering",
    text: "Volunteering with SRD Foundation is not just about giving; it's also about gaining. As a volunteer, you'll have the chance to make meaningful connections, acquire new skills, and most importantly, contribute to building a safer, more compassionate community.",
    bullets: [
      "Volunteering provides opportunities to learn new skills, such as leadership, communication, project management, and teamwork, which can enhance your personal and professional growth.",
      "It allows you to connect with like-minded individuals, professionals, and organizations, expanding your social and professional network.",
      "Volunteering gives you a sense of purpose by contributing to a cause you care about, bringing personal satisfaction and emotional well-being.",
    ],
    imageSrc: VOLUNTEER_PAGE_IMAGES.volunteer2,
  },
  howTo: {
    heading: "How to Volunteer",
    text: "To get started, fill out our volunteer application form and tell us about your interests, skills, and availability. Our team will reach out to you with further details on how you can get involved. By volunteering with SRD Foundation, you become a changemaker, directly impacting the lives of survivors and helping us create a more supportive environment for those in need. At SRD Foundation, we provide a nurturing and inclusive environment for our volunteers. We value your dedication and commitment, offering ongoing support, training opportunities, and a chance to be part of a compassionate community.",
    imageSrc: VOLUNTEER_PAGE_IMAGES.volunteer3,
  },
  form: {
    heading: "Register Now",
    text: "Your willingness to volunteer and support our cause means the world to us. Thank you for considering SRD Foundation as a place to make a difference.",
    submitLabel: "Register Now as Volunteer",
  },
} as const;
