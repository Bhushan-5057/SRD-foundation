"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  sectionLabel?: string;
  title: string;
  subtitle?: string;
  items: FAQItem[];
  defaultOpenIndex?: number | null;
}

export function FAQSection({
  sectionLabel = "FAQs",
  title,
  subtitle,
  items,
  defaultOpenIndex = null,
}: FAQSectionProps) {
  const initialOpenIndex =
    typeof defaultOpenIndex === "number" && items[defaultOpenIndex] ? defaultOpenIndex : null;
  const [openIndex, setOpenIndex] = useState<number | null>(initialOpenIndex);

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-[var(--border-color)] bg-[var(--surface)]/90 p-5 sm:p-7 lg:p-8"
      data-aos="fade-up"
    >
      <div className="pointer-events-none absolute -left-16 top-0 h-40 w-40 rounded-full bg-[var(--brand-primary)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-40 w-40 rounded-full bg-[var(--brand-secondary)]/10 blur-3xl" />

      <div className="relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-secondary)]">{sectionLabel}</p>
          <h2 className="mt-2 text-2xl font-semibold text-[var(--text-primary)] sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-3 text-sm leading-7 text-[var(--text-muted)] sm:text-base">{subtitle}</p>}
        </div>

        <div className="mt-6 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--surface-soft)]/70 p-4 sm:p-5"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                >
                  <span className="text-base font-semibold leading-7 text-[var(--text-primary)] sm:text-lg">{item.question}</span>
                  <span
                    className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-[var(--brand-secondary)] bg-[var(--brand-secondary)] text-white"
                        : "border-[var(--border-color)] bg-[var(--surface)] text-[var(--brand-primary)]"
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <FiMinus className="h-4 w-4" /> : <FiPlus className="h-4 w-4" />}
                  </span>
                </button>

                <div
                  id={answerId}
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm leading-7 text-[var(--text-muted)] sm:text-base">{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
