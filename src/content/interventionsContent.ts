export const INTERVENTIONS_IMAGES = {
  inter1: "/assets/inter1.webp",
  inter2: "/assets/inter2.webp",
  inter3: "/assets/inter3.webp",
  inter4: "/assets/inter4.webp",
  inter5: "/assets/inter5.webp",
  interhero: "/assets/interhero.webp",
  interhero2: "/assets/interhero2.webp",
} as const;

export const INTERVENTIONS_INDEX_CONTENT = {
  hero: {
    title: "Interventions",
    subtitle:
      "Programs designed to empower survivors, strengthen families, and support seniors in our community.",
    imageSrc: INTERVENTIONS_IMAGES.interhero,
  },
  featured: {
    heading: "Senior Empowerment & Inclusion",
    text: "Discover Soul Food for Community Hope — a year-long program created by and for seniors to reduce isolation, celebrate culture, and build intergenerational connection.",
    action: { href: "/interventions/senior-empowerment", label: "Explore Program" },
    imageSrc: INTERVENTIONS_IMAGES.inter1,
  },
} as const;

export const INTERVENTIONS_CONTENT = {
  hero: {
    title: "Senior Empowerment & Inclusion",
    imageSrc: INTERVENTIONS_IMAGES.interhero2,
  },
  intro: {
    heading: "Soul Food for Community Hope – Seniors Empowerment & Inclusion",
    paragraphs: [
      "SRD Foundation is excited to launch Soul Food for Community Hope – Seniors Empowerment & Inclusion, a year long program created by and for seniors in our community.",
      "This project is funded in part by the Government of Canada's New Horizons for Seniors Program (NHSP), a federal grants program that supports community based projects that improve seniors' well being and participation in community life.",
    ],
    imageSrc: INTERVENTIONS_IMAGES.inter2,
  },
  grant: {
    heading: "About The New Horizons for Seniors Grant",
    paragraphs: [
      "Through the New Horizons for Seniors Program, community based projects like ours can receive up to $25,000 to support activities that: promote volunteerism among seniors, engage seniors as mentors, expand awareness of elder abuse, and increase social participation and inclusion.",
      "With this support, SRD Foundation is able to offer free, culturally responsive, and accessible programming for seniors who may be facing isolation, food insecurity, or barriers to services.",
    ],
    imageSrc: INTERVENTIONS_IMAGES.inter4,
  },
  offers: {
    heading: "What Soul Food for Community Hope Offers",
    cards: [
      {
        title: "Healing Meals & Cultural Soul Food Gatherings",
        description:
          "Seniors come together regularly to share nutritious, culturally familiar meals that reflect African, Caribbean, South Asian, Middle Eastern and other traditions. Food is used as a way to nourish the body and also to honour culture, create belonging, and reduce isolation.",
      },
      {
        title: "Storytelling, Support Circles & Gentle Activities",
        description:
          "Our gatherings include storytelling, music, art, journaling, and guided conversations that provide safe spaces for seniors to share experiences and receive peer support. Sessions are trauma-informed and designed to be compassionate and dignifying for seniors who have faced abuse, neglect, or social isolation.",
      },
      {
        title: "Intergenerational Mentoring & Volunteerism",
        description:
          "Seniors take the lead as mentors by teaching youth and community volunteers through cooking, gardening, crafts, and cultural storytelling. Youth volunteers support elders, learn from their wisdom, and help bridge generations, reducing stereotypes about aging and building mutual respect.",
      },
      {
        title: "Awareness of Elder Rights, Safety & Resources",
        description:
          "The program includes information sessions and workshops on elder abuse prevention, financial literacy, wellness, and how to access supports such as legal aid, housing, and healthcare services. Through partnerships with community organizations and hotlines, seniors are connected to the resources they need to stay safe and empowered.",
      },
      {
        title: "Online Check-Ins & Phone Support",
        description:
          "For seniors who cannot always attend in person, we plan regular online check-ins and phone calls so that no one is left behind. Virtual storytelling and recipe-sharing sessions help maintain connection during bad weather or when mobility is limited.",
      },
      {
        title: "Community Partnerships & Holistic Care",
        description:
          "We collaborate with local organizations, health partners, and community leaders to expand access to culturally safe supports—helping seniors navigate services while staying connected to trusted people and places.",
      },
    ],
  },
  whoServes: {
    heading: "Who The Program Serves",
    paragraphs: [
      "The Soul Food project focuses on seniors who may be especially vulnerable to isolation, including Black elders from West Africa and the Caribbean, as well as South Asian, Middle Eastern, newcomer, low income, and other racialized seniors.",
      "We also welcome seniors with disabilities and those from English speaking minority communities who are seeking culturally safe spaces where their language, history, and identity are respected.",
    ],
    imageSrc: INTERVENTIONS_IMAGES.inter3,
  },
  activities: {
    heading: "Activities Throughout The Year",
    intro: "Over the project year, seniors and youth will help shape and lead activities such as:",
    items: [
      "Monthly Soul Food soup kitchen meals with recipe sharing and cultural storytelling",
      "Gardening sessions where seniors teach planting and harvesting",
      "Creation of a Soul Food Recipe Book featuring elders' favourite dishes and memories",
      "Outdoor family picnic days with food, music, and games",
      "Cultural potlucks and art shows to celebrate National Seniors Month",
      "Workshops on elder rights, financial safety, and abuse prevention",
      "Holiday gatherings with recipe card exchanges between elders and grandchildren",
      "Wellness sessions on nutrition, gentle movement, and mental health",
      "Legacy activities where seniors record traditions, stories & recipes for future generations",
      "A Grand Finale \"Celebration of Life Feast\" honoring seniors as cultural leaders and mentors",
    ],
    imageSrc: INTERVENTIONS_IMAGES.inter5,
  },
  benefits: {
    heading: "How Seniors Will Benefit",
    text: "Through Soul Food for Community Hope, at least 150 seniors and 30 non-seniors (youth and family members) will benefit from improved nutrition, social connection, cultural pride, and access to information and supports. Seniors are not just participants—they are leaders whose voices, recipes, ideas, and lived experiences shape every part of the project.",
  },
  getInvolved: {
    heading: "Get Involved",
    text: "If you are a senior, family member, or youth volunteer who would like to participate:",
    action: { href: "/volunteer", label: "Get Started" },
    imageSrc: "/assets/homesection2.webp",
  },
} as const;
