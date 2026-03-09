"use client";

import Image, { type StaticImageData } from "next/image";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import TestimonialImage1 from "../../../../public/assets/testimonial4.jpg";
import TestimonialImage2 from "../../../../public/assets/testimonial3.jpg";
import TestimonialImage3 from "../../../../public/assets/testimonial2.jpg";
import TestimonialImage4 from "../../../../public/assets/testimonial.jpg";

interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  image: StaticImageData;
  imageAlt: string;
}

const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    quote:
      "I felt overwhelmed at first, but the foundation guided me through forms and appointments with clear, patient support.",
    name: "Amina K.",
    role: "Newcomer Family Support",
    image: TestimonialImage1,
    imageAlt: "Community member sharing support experience",
  },
  {
    quote:
      "They prepared me for my office visit, explained every document, and followed up after. I felt confident throughout.",
    name: "Mohammed M.",
    role: "Senior Community Member",
    image: TestimonialImage2,
    imageAlt: "Senior receiving community guidance",
  },
  {
    quote:
      "The volunteers helped with daily tasks and communication in a practical and caring way. It truly changed my experience.",
    name: "Nadia R.",
    role: "Settlement Assistance",
    image: TestimonialImage3,
    imageAlt: "Volunteer providing everyday support",
  },
  {
    quote:
      "This support felt personal. They listened, connected me to the right resources, and stayed with me until things were resolved.",
    name: "Rahul S.",
    role: "Community Program Participant",
    image: TestimonialImage4,
    imageAlt: "Foundation support success story",
  },
];

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  return (
    <section
      className="mt-6 rounded-2xl p-3 sm:p-4 lg:mt-8 lg:p-5"
      data-aos="fade-up"
    >
      <div className="py-8 text-center sm:py-12" data-aos="zoom-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Stories from People We Supported
        </h2>
        <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
      </div>
      <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)] lg:items-center lg:gap-5">
        <div className="mx-auto w-full max-w-[260px] overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--surface-soft)]">
          <div className="relative aspect-[4/5]">
            <Image
              key={activeTestimonial.name}
              src={activeTestimonial.image}
              alt={activeTestimonial.imageAlt}
              fill
              className="object-cover transition-opacity duration-300"
              sizes="(max-width: 1024px) 80vw, 220px"
            />
          </div>
        </div>

        <article className="rounded-xl p-4 sm:p-5">
          <p className="text-3xl font-bold leading-none text-[var(--brand-primary)]">&ldquo;</p>
          <p className="mt-2 text-base leading-7 text-[var(--text-primary)] sm:text-lg">
            {activeTestimonial.quote}
          </p>
          <p className="mt-3 text-sm font-semibold text-[var(--text-primary)]">{activeTestimonial.name}</p>
          <p className="text-sm text-[var(--text-muted)]">{activeTestimonial.role}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous testimonial"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border-color)] bg-[var(--surface)] text-[var(--brand-primary)] transition hover:bg-[var(--surface-soft)]"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next testimonial"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-[var(--brand-primary)] text-white transition hover:opacity-90"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
