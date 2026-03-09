export interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  image?: string;
}

export const BLOGS_DATA: BlogPostData[] = [
  {
    slug: "building-trust-with-newcomer-families",
    title: "Building trust with newcomer families through practical support",
    excerpt:
      "How local, person-to-person guidance improves confidence and service access for newly arrived families.",
    content: [
      "Trust is built through consistency. For newcomer families, the first months in a new country can feel uncertain, especially when essential systems are unfamiliar.",
      "At SRD Foundation, volunteers focus on practical steps: understanding official letters, preparing documentation, and identifying the right service pathway.",
      "When families know they are supported by someone who listens and follows through, they are better equipped to make informed decisions and build stability.",
      "Community organizations can strengthen this trust by providing clear communication, culturally aware outreach, and reliable referral networks.",
    ],
    image: "/assets/newcomers.jpg",
  },
  {
    slug: "supporting-seniors-with-dignity-and-connection",
    title: "Supporting seniors with dignity and connection",
    excerpt:
      "Simple, reliable support can reduce isolation and help seniors stay connected to critical community services.",
    content: [
      "Many seniors face barriers that are easy to overlook, including transportation, technology access, and complex paperwork.",
      "Volunteer check-ins and practical guidance help seniors prepare for appointments, understand options, and stay connected to the support they need.",
      "Equally important is social connection. Consistent human interaction can reduce stress and improve confidence in day-to-day decisions.",
      "A community that values dignity in aging creates better outcomes not just for seniors, but for families and neighborhoods as a whole.",
    ],
    image: "/assets/support.jpg",
  },
  {
    slug: "early-learning-access-for-growing-families",
    title: "Early learning access for growing families",
    excerpt:
      "Why clear childcare and early education pathways matter for both child development and family resilience.",
    content: [
      "Early childhood education has long-term effects on development, confidence, and readiness for school.",
      "Families often struggle with application timelines, eligibility requirements, and limited awareness of available support programs.",
      "Community guidance can simplify these processes by helping caregivers compare options and prepare complete applications.",
      "When early learning becomes more accessible, families gain stability and children gain a stronger start.",
    ],
    image: "/assets/enjoy2.jpg",
  },
  {
    slug: "interfaith-dialogue-strengthens-community-belonging",
    title: "Interfaith dialogue strengthens community belonging",
    excerpt:
      "Shared spaces for dialogue and collaboration can improve trust, reduce isolation, and build neighborhood unity.",
    content: [
      "Interfaith and intercultural engagement creates opportunities for people to connect beyond assumptions and stereotypes.",
      "Programs centered on shared values, collaborative service, and respectful listening can improve social cohesion in meaningful ways.",
      "When residents build relationships across backgrounds, local communities are better prepared to respond to challenges together.",
      "Belonging is not abstract. It grows through repeated, respectful interactions and collective action.",
    ],
    image: "/assets/volunteers2.jpg",
  },
];

export function getBlogBySlug(slug: string) {
  return BLOGS_DATA.find((blog) => blog.slug === slug);
}
