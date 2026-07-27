export const HOME_PAGE_IMAGES = {
  home1: "/assets/home1.webp",
  home2: "/assets/home2.webp",
  home3: "/assets/home3.webp",
  home4: "/assets/home4.webp",
  home5: "/assets/inter1.webp",
  home6: "/assets/home6.webp",
  homehero1: "/assets/homehero1.webp",
  homehero2: "/assets/homehero2.webp",
  homehero3: "/assets/homehero3.webp",
  homesection: "/assets/homesection.webp",
  homesection2: "/assets/homesection2.webp",
} as const;

export const HOME_PAGE_CONTENT = {
  hero: {
    eyebrow: "A community that cares",
    title: "Welcome to SRD Foundation",
    description: "Empowering Survivors. Rebuilding Lives. Creating Hope.",
    primaryAction: { href: "/about", label: "Get Started" },
    slides: [
      { src: HOME_PAGE_IMAGES.homehero1, alt: "Community care and support" },
      { src: HOME_PAGE_IMAGES.homehero2, alt: "Volunteers helping families" },
      { src: HOME_PAGE_IMAGES.homehero3, alt: "Hope and healing together" },
    ],
  },
  about: {
    badge: "About SRD Community",
    heading: "Making the world a better place",
    paragraphs: [
      "At SRD Foundation, we believe in healing, empowerment, and resilience. We are a beacon of hope for individuals and families affected by abuse, offering a diverse range of supportive services and programs designed to guide them towards a brighter future.",
    ],
    missionHeading: "Our Mission",
    missionText:
      "SRD Foundation is dedicated to providing comprehensive support services to survivors of abuse, encompassing counseling, basic needs assistance, empowerment programs, legal aid, transitional housing, and specialized support for children, teenagers, men and women.",
    action: { href: "/about", label: "Learn More" },
    imageSrc: HOME_PAGE_IMAGES.home1,
  },
  whoWeAre: {
    heading: "Who We Are",
    text: "SRD Foundation is a dedicated team of professionals, volunteers, and advocates committed to fostering a community where individuals affected by abuse can find solace, support, and the resources needed to reclaim their lives.",
    imageSrc: HOME_PAGE_IMAGES.home3,
  },
  whatWeOffer: {
    heading: "What We Offer",
    description:
      "Our foundation provides a holistic approach to healing, encompassing counseling services, basic needs assistance, empowerment programs, legal support, transitional housing, and specialized programs for children, teenagers, men and women affected by abuse.",
    cards: [
      {
        title: "Counseling",
        description:
          "We offer personalized counseling for abused women, men, teenage boys, and families, providing a safe and confidential space for healing and support.",
      },
      {
        title: "Housing",
        description:
          "We provide temporary shelter and transitional housing solutions, ensuring a secure environment for individuals or families escaping abusive situations.",
      },
      {
        title: "Child and Youth Support",
        description:
          "Our programs cater specifically to children and teenagers affected by domestic abuse, offering counseling, educational support, and safe spaces for healing.",
      },
    ],
  },
  impact: {
    heading: "Impact Through Compassion",
    text: "Every story matters. We stand as a pillar of support, empowering survivors to not just survive, but to thrive. Our focus extends beyond immediate needs, aiming to build resilience and a renewed sense of hope within our community.",
    action: { href: "/about", label: "Discover More" },
    imageSrc: HOME_PAGE_IMAGES.home2,
  },
  elders: {
    heading: "Supporting Elders who have and those who have not experienced abuse",
    text: "Caring for our elders is a fundamental part of our mission. We provide comprehensive support for seniors, whether they've experienced abuse or not. Our interventions are designed to promote their well-being, dignity, and independence.",
    action: { href: "/interventions/senior-empowerment", label: "Discover More" },
    imageSrc: HOME_PAGE_IMAGES.home4,
  },
  getInvolved: {
    heading: "Get Involved",
    text: "Join us in our mission to make a difference. Whether through volunteering, donations, or spreading awareness, your support contributes to the transformation of lives and the cultivation of a safer, more compassionate society.",
    action: { href: "/volunteer", label: "Get Started" },
    imageSrc: HOME_PAGE_IMAGES.homesection,
  },
  soulFood: {
    heading: "Soul Food for Community Hope – Seniors Empowerment & Inclusion",
    text: "SRD Foundation is excited to launch Soul Food for Community Hope – Seniors Empowerment & Inclusion, a year long program created by and for seniors in our community.",
    action: { href: "/interventions/senior-empowerment", label: "Discover More" },
    imageSrc: HOME_PAGE_IMAGES.home5,
  },
  donation: {
    badge: "Donation",
    heading: "Support the Mission",
    text: "Helping vulnerable women, children in the black communities. We need your support to continue providing aids and solutions to the generational problems plaguing the black communities of the world.",
    action: { href: "/donate", label: "Support Us Now" },
    imageSrc: HOME_PAGE_IMAGES.home6,
  },
  together: {
    heading: "Together, We Make a Difference",
    text: "At SRD Foundation, we believe in the strength of community and the power of compassion. Together, let's create a world where everyone can live free from abuse and fear.",
    action: { href: "/volunteer", label: "Get Started" },
    imageSrc: HOME_PAGE_IMAGES.homesection2,
  },
} as const;
