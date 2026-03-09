"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiMail,
  FiPhone,
} from "react-icons/fi";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FOOTER_NAV } from "@/constants/navigation";

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
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
                <p className="max-w-xs text-sm leading-6 text-[var(--text-muted)]">Follow Us On </p>
                <Link
                  href="https://facebook.com"
                  className="inline-flex items-center justify-center text-[var(--text-muted)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  aria-label="Facebook"
                >
                  <FaFacebook className="h-6 w-6" />
                </Link>
                <Link
                  href="https://wa.me/16472477735?text=Hello%20I%20want%20to%20know%20more%20about%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center text-[var(--text-muted)] transition hover:text-green-500"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </Link>
                <Link
                  href="https://instagram.com"
                  className="inline-flex items-center justify-center text-[var(--text-muted)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  aria-label="Instagram"
                >
                  <FaInstagram className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="inline-flex items-center justify-center text-[var(--text-muted)] transition hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)]"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="h-6 w-6" />
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
                  {FOOTER_NAV.map((item) => (
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
                      className="mt-1 w-6 shrink-0 rounded-sm object-cover hover:cursor-pointer"
                    />
                    <span>Suite 600, 3300 Highway 7 West, Vaughan, ON, L4L 1A6, Canada</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-primary)] transition hover:text-[var(--brand-primary)] hover:cursor-pointer">
                      <FiPhone className="h-4 w-4" />
                    </span>
                    <Link href="tel:+16472477735" className="transition-colors hover:text-[var(--brand-primary)]">
                      +1 647 247 7735
                    </Link>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--text-primary)] transition hover:text-[var(--brand-primary)] hover:cursor-pointer">
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
          <div className="mt-8 flex flex-col items-center gap-3 border-t border-[var(--border-color)] pt-4 text-xs text-[var(--text-muted)] text-center">
            <p>&copy; {year} SRD Foundation. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
