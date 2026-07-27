import { Metadata } from "next";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { PageHeroSection } from "../../components/common/PageHeroSection";
import { ContactFormSection } from "../../components/pages/contact/ContactFormSection";
import { CONTACT_PAGE_CONTENT } from "../../content/contactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with SRD Foundation for support, partnerships, volunteering opportunities, or general inquiries.",
};

const SOCIAL_LINKS = [
  { href: "https://facebook.com", label: "Facebook", icon: FaFacebook },
  {
    href: "https://wa.me/16472477735?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
  { href: "https://instagram.com", label: "Instagram", icon: FaInstagram },
  { href: "https://linkedin.com", label: "LinkedIn", icon: FaLinkedinIn },
];

export default function ContactPage() {
  const content = CONTACT_PAGE_CONTENT;

  return (
    <div className="space-y-10 md:space-y-14">
      <PageHeroSection
        title={content.hero.title}
        imageSrc={content.hero.imageSrc}
        imageAlt="Contact Us hero background"
      />

      <section className="mx-auto max-w-3xl text-center" data-aos="fade-up">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-secondary)]">
          {content.intro.badge}
        </p>
        <h2 className="mt-3 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          {content.intro.heading}
        </h2>
        <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{content.intro.text}</p>
      </section>
      <ContactFormSection />
      <section
        className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] px-5 py-10 text-center sm:px-8 sm:py-12"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
          {content.social.heading}
        </h2>
        <div className="mx-auto mt-5 max-w-3xl space-y-4">
          {content.social.paragraphs.map((paragraph) => (
            <p key={paragraph} className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {SOCIAL_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-color)] bg-[var(--surface)] text-[var(--text-primary)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
              >
                <Icon className="h-5 w-5" />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
