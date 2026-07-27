"use client";

import { FormEvent, useState } from "react";
import { FiMapPin, FiMail, FiPhone, FiClock } from "react-icons/fi";
import {
  validateContactField,
  validateContactForm,
  ContactFormData,
  ContactFormErrors,
} from "../../../lib/contactValidation";

interface ContactFormSectionProps {
  variant?: "contact" | "volunteer";
  heading?: string;
  description?: string;
  submitLabel?: string;
  showContactInfo?: boolean;
}

export function ContactFormSection({
  variant = "contact",
  heading,
  description,
  submitLabel,
  showContactInfo = variant === "contact",
}: ContactFormSectionProps) {
  const isVolunteer = variant === "volunteer";

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: isVolunteer ? "Volunteer Registration" : "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateContactField(name, value, isVolunteer && name === "phone");

    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateContactForm(formData, { requirePhone: isVolunteer });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setStatus("loading");

    try {
      const payload = {
        ...formData,
        subject: formData.subject || (isVolunteer ? "Volunteer Registration" : "General Inquiry"),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error ?? "Email failed");
      }

      setStatus("success");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: isVolunteer ? "Volunteer Registration" : "",
        message: "",
        phone: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to send message.");
    }
  };

  const sectionHeading = heading ?? (isVolunteer ? "Register Now" : "We'd Love to Hear From You");
  const sectionDescription =
    description ??
    (isVolunteer
      ? "Your willingness to volunteer and support our cause means the world to us."
      : undefined);
  const buttonLabel = submitLabel ?? (isVolunteer ? "Register Now as Volunteer" : "Send Message");

  return (
    <section className="mt-4 sm:mt-6" id={isVolunteer ? "volunteer-form" : "contact-form"}>
      <div className="mb-10 text-center sm:mb-14" data-aos="zoom-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
          {isVolunteer ? "Volunteer With Us" : "Get in Touch"}
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          {sectionHeading}
        </h2>
        {sectionDescription ? (
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--text-muted)] sm:text-base">
            {sectionDescription}
          </p>
        ) : null}
        <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface)] shadow-[0_16px_45px_rgb(34_49_27_/_0.08)] dark:shadow-[0_16px_45px_rgb(0_0_0_/_0.35)]">
        <div className={`grid ${showContactInfo ? "lg:grid-cols-[0.9fr_1.4fr]" : ""}`}>
          {showContactInfo ? (
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
                    <p className="mt-1 text-sm text-white/90">+1 (647) 247 7735</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                    <FiMail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Email Address</h4>
                    <p className="mt-1 text-sm text-white/90">info@srdfoundation.ca</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/25">
                    <FiMapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Our Location</h4>
                    <p className="mt-1 text-sm text-white/90">
                      Suite 600, 3300 Highway 7
                      <br />
                      West, Vaughan, ON, L4L 1A6,Canada
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
          ) : null}

          <div className="bg-[var(--surface)] p-6 sm:p-8 lg:p-10" data-aos="fade-left">
            {status === "success" ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  {isVolunteer ? "Registration Sent!" : "Message Sent!"}
                </h3>
                <p className="mt-2 text-[var(--text-muted)]">
                  Thank you for reaching out. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-2 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:bg-[var(--surface)]"
                >
                  {isVolunteer ? "Submit Another Application" : "Send Another Message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto max-w-2xl space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                      placeholder="John"
                    />
                    {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>

                {isVolunteer ? (
                  <div>
                    <label
                      htmlFor="phone"
                      className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                  </div>
                ) : (
                  <div>
                    <label
                      htmlFor="subject"
                      className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--brand-primary)]"
                    >
                      <option value="">Select a subject</option>
                      <option value="Volunteer Inquiry">I want to become a volunteer</option>
                      <option value="Help Request">I need help</option>
                      <option value="Donation Inquiry">Donation inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                )}

                <div>
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-2 w-full resize-none border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--brand-primary)]"
                    placeholder={
                      isVolunteer
                        ? "Tell us about your interests, skills, and availability"
                        : "How can we help you?"
                    }
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                </div>

                {status === "error" && (
                  <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-600">
                    {message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:min-w-[200px]"
                >
                  {status === "loading" ? "Sending..." : buttonLabel}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
