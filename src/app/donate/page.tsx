import { HeroSection } from "@/components/common/HeroSection";
import { Metadata } from "next";
import { DonationForm } from "@/components/pages/donate/DonationForm";
import { SITE_CONTENT } from "@/content/site-content";
import Enjoyimage from "../../../public/assets/enjoy.jpg";
import Donateimage from "../../../public/assets/servicepage/service5.jpg";
import Helpingimage from "../../../public/assets/homepage/helping3.jpg";
import Charityimage from "../../../public/assets/charity2.jpg"; 

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support SRD Foundation's mission to help newcomers and seniors through community programs, guidance, and compassionate support. Your donation helps build stronger and more inclusive communities.",
};

export default function DonatePage() {
  return (
    <div className="space-y-12 md:space-y-20 pb-20">
      <HeroSection
        sectionLabel="Donate"
        title={SITE_CONTENT.donation.heading}
        highlightText="Support"
        description={SITE_CONTENT.donation.text}
        secondaryAction={{ href: "/impact", label: "View Impact" }}
        tags={["Community Powered", "No Ads", "Direct Support"]}
        imageSlots={[
          { src: Enjoyimage, alt: "Donation helping community" },
          { src: Donateimage, alt: "Support local charity people" },
          { src: Helpingimage, alt: "Hands holding heart donation concept" },
          { src: Charityimage, alt: "Community donation impact" },
        ]}
      />

      <section className="mx-auto max-w-6xl px-4 md:px-6" data-aos="fade-up">
        <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 sm:p-8">

          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">
              Why Donate
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
              Small Contributions. Life-Changing Results.
            </h2>

            <p className="mt-4 text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              Your donation is more than financial support — it’s a bridge between isolation and connection,
              confusion and clarity, struggle and stability. Every contribution helps someone navigate
              everyday challenges with dignity and confidence.
            </p>
          </div>
          {/* CARDS */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Support Newcomers",
                desc: "Help individuals settle into a new country by guiding them through essential services and daily tasks.",
              },
              {
                title: "Assist Seniors",
                desc: "Provide companionship and support for seniors who need help attending appointments or understanding documents.",
              },
              {
                title: "Build Independence",
                desc: "Empower people with knowledge and confidence so they can live independently and securely.",
              },
              {
                title: "Create Real Connections",
                desc: "Reduce loneliness by fostering meaningful human interactions within the community.",
              },
              {
                title: "Immediate Impact",
                desc: "Your donation directly supports real people — not overhead, not ads, but actual help.",
              },
              {
                title: "Community Growth",
                desc: "Stronger individuals create stronger communities. Your support builds a better future for everyone.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                data-aos="zoom-in-up"
                data-aos-delay={i * 80}
              >
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-muted)] leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DonationForm />
      <section
        className="mx-auto max-w-6xl px-4 md:px-6"
        data-aos="fade-up"
      >
        <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-2 md:items-center">

          {/* LEFT SIDE CONTENT */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">
              Visit Us
            </p>

            <h2 className="text-2xl font-semibold leading-tight text-[var(--text-primary)] sm:text-3xl">
              Your Support Has a Real Place and Real Impact
            </h2>

            <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              Every donation you make directly contributes to meaningful, on-the-ground support for newcomers and seniors.
              From helping individuals attend important appointments to guiding them through essential documentation,
              your contribution creates real, visible change in people’s lives.
            </p>

            <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              We operate from our community-focused center in Vaughan, where volunteers and support workers collaborate
              to provide compassionate, practical assistance every day.
            </p>

            {/* Address Card */}
            <div className="rounded-xl p-4 text-sm text-[var(--text-primary)]">
              <p className="font-medium">Our Location</p>
              <p className="mt-1 text-[var(--text-muted)]">
                Suite 600, 3300 Highway 7 West, Vaughan, ON, L4L 1A6, Canada
              </p>
            </div>
          </div>

          {/* RIGHT SIDE MAP */}
          <div className="relative h-[280px] w-full overflow-hidden rounded-2xl border border-[var(--border-color)] sm:h-[340px] md:h-[380px]">
            <iframe
              src="https://www.google.com/maps?q=Suite%20600%2C%203300%20Highway%207%20West%2C%20Vaughan%2C%20ON%2C%20L4L%201A6%2C%20Canada&output=embed"
              className="h-full w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 md:px-6" data-aos="fade-up">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">

          {/* LEFT */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">
              Your Impact
            </p>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">
              Where Your Donation Goes
            </h2>

            <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">
              Every dollar you contribute is carefully used to provide direct, meaningful support.
              Transparency and impact are at the core of everything we do.
            </p>

            <div className="space-y-3 text-sm text-[var(--text-primary)]">
              <p>• $25 helps a senior attend an important appointment</p>
              <p>• $50 supports document guidance and translation help</p>
              <p>• $100 enables ongoing assistance for a newcomer family</p>
              <p>• $250 funds multiple community support sessions</p>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "500+", label: "Lives Supported" },
              { value: "120+", label: "Active Volunteers" },
              { value: "300+", label: "Appointments Assisted" },
              { value: "100%", label: "Community Focused" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)] p-6 text-center"
                data-aos="zoom-in"
                data-aos-delay={i * 80}
              >
                <p className="text-2xl font-bold text-[var(--brand-primary)]">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
