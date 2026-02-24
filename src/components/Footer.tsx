"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { NAV_ITEMS } from "@/constants/navigation";

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/community", label: "Community" },
  { href: "/testimonial", label: "Testimonial" },
];

const LEGAL_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/legal", label: "Legal" },
  { href: "/sitemap", label: "Site Map" },
];

export function Footer() {
  const year = new Date().getFullYear();

  const columnTitleClass = "text-xs font-bold uppercase underline tracking-[0.16em] text-[var(--text-muted)]";
  const linkClass =
    "text-sm text-[var(--text-primary)] transition-colors hover:text-[var(--brand-primary)]";

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--surface)]/95">
      <div className="mx-auto w-full max-w-6xl px-4 py-10 md:px-6 md:py-12">
        <div className="rounded-2xl px-5 py-7 md:px-8 md:py-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_3fr]">
            <div className="space-y-5">
              <Link href="/" className="inline-flex items-center" aria-label="SRD Foundation Home">
                <Image
                  src="/assets/srdlogo.png"
                  alt="SRD Foundation logo"
                  width={170}
                  height={42}
                  className="h-10 w-auto object-contain"
                />
              </Link>

              <p className="max-w-xs text-sm leading-6 text-[var(--text-muted)]">
                Supporting newcomers and seniors with programs, guidance, and community care that
                help people build secure and independent lives.
              </p>

              <div className="flex items-center gap-2">
                <Link
                  href="https://facebook.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  aria-label="Facebook"
                >
                  <FiFacebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://twitter.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  aria-label="Twitter"
                >
                  <FaXTwitter className="h-4 w-4" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  aria-label="Instagram"
                >
                  <FiInstagram className="h-4 w-4" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-color)] text-[var(--text-primary)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              <div className="space-y-3">
                <h3 className={columnTitleClass}>Company</h3>
                <nav className="flex flex-col gap-2">
                  {COMPANY_LINKS.map((item) => (
                    <Link key={item.href} href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-3">
                <h3 className={columnTitleClass}>Links</h3>
                <nav className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => (
                    <Link key={item.href} href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="space-y-3">
                <h3 className={columnTitleClass}>Contact Us</h3>
                <div className="space-y-2 text-sm text-[var(--text-primary)]">
                  <p className="flex items-start gap-3 leading-6">
                    <Image
                      src="/assets/canadaflag.svg"
                      alt="Canada flag"
                      width={20}
                      height={14}
                      style={{ height: "auto" }}
                      className="mt-1 w-6 shrink-0 rounded-sm object-cover"
                    />
                    <span>Suite 600, 3300 Highway 7 West, Vaughan, ON, L4L 1A6, Canada</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-primary)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
                      <FiPhone className="h-4 w-4" />
                    </span>
                    <Link href="tel:+16472477735" className="transition-colors hover:text-[var(--brand-primary)]">
                      +1 647 247 7735
                    </Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-primary)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]">
                      <FiMail className="h-4 w-4" />
                    </span>
                    <Link
                      href="mailto:support@srdfoundation.org"
                      className="transition-colors hover:text-[var(--brand-primary)]"
                    >
                      support@srdfoundation.org
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-[var(--border-color)] pt-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {year} SRD Foundation. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-[var(--brand-primary)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
