"use client";

import { FormEvent, useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";

export function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate network request
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section className="mt-12 sm:mt-16">
      <div className="mb-10 text-center sm:mb-14" data-aos="zoom-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
          Get in Touch
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          We'd Love to Hear From You
        </h2>
        <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface)] shadow-[0_16px_45px_rgb(34_49_27_/_0.08)] dark:shadow-[0_16px_45px_rgb(0_0_0_/_0.35)]">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr]">
          {/* Left Side: Contact Info */}
          <div
            className="relative flex flex-col gap-8 overflow-hidden bg-gradient-to-br from-[#4f7a34] via-[#436b2e] to-[#324f25] p-6 text-white dark:from-[#2f6f56] dark:to-[#25523f] sm:p-8"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85">
                Have questions or want to volunteer? Reach out to us using the details below, or fill out the
                form, and our team will get back to you promptly.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                  <FiPhone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Phone Number</h4>
                  <p className="mt-1 text-sm text-white/90">+1 (416) 555-0198</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                  <FiMail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email Address</h4>
                  <p className="mt-1 text-sm text-white/90">
                    support@srdfoundation.org
                    <br />
                    volunteer@srdfoundation.org
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                  <FiMapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Our Location</h4>
                  <p className="mt-1 text-sm text-white/90">
                    123 Community Drive
                    <br />
                    Toronto, ON M2N 5N2
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                  <FiClock className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Working Hours</h4>
                  <p className="mt-1 text-sm text-white/90">
                    Monday - Friday: 9:00 AM - 5:00 PM
                    <br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-white/20" />
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-[var(--surface)] p-6 sm:p-8 lg:p-10" data-aos="fade-left">
            {status === "success" ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">Message Sent!</h3>
                <p className="mt-2 text-[var(--text-muted)]">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--surface)]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--brand-primary)]"
                  >
                    <option value="volunteer">I want to volunteer</option>
                    <option value="help">I need help</option>
                    <option value="donation">Donation inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="mt-2 w-full resize-none border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[170px]"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
