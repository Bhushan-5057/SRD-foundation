"use client";

import { FormEvent, useState } from "react";
import { FiHeart, FiDollarSign } from "react-icons/fi";

export function DonationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <section className="mt-12 sm:mt-16">
      <div className="mb-10 text-center sm:mb-14" data-aos="zoom-in">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--brand-secondary)]">
          Donation Form
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Support Our Cause
        </h2>
        <div className="mx-auto mt-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80" />
      </div>
      <div className="overflow-hidden rounded-[2rem] border border-[var(--border-color)] bg-[var(--surface)] shadow-[0_16px_45px_rgb(34_49_27_/_0.08)] dark:shadow-[0_16px_45px_rgb(0_0_0_/_0.35)]">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr]">
          <div
            className="relative flex flex-col gap-8 overflow-hidden bg-gradient-to-br from-[#4f7a34] via-[#436b2e] to-[#324f25] p-6 text-white dark:from-[#2f6f56] dark:to-[#25523f] sm:p-8"
            data-aos="fade-right"
          >
            <div>
              <h3 className="text-2xl font-bold">Give a little , Change a lot</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/85">
                Your donation helps us provide food, education, and support to those in need.
                Every contribution, big or small, creates a meaningful impact in our community.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                  <FiHeart className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Support a Cause</h4>
                  <p className="mt-1 text-sm text-white/90">
                    Help us uplift lives and build a better future.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                  <FiDollarSign className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Every Dollar Counts</h4>
                  <p className="mt-1 text-sm text-white/90">
                    Your small contribution can bring big change.
                  </p>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-white/20" />
          </div>
          <div className="bg-[var(--surface)] p-6 sm:p-8 lg:p-10" data-aos="fade-left">
            {status === "success" ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)]/10 text-[var(--brand-primary)]">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                  Donation Successful!
                </h3>
                <p className="mt-2 text-[var(--text-muted)]">
                  Thank you for your generosity. Your support makes a real impact.
                </p>

                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg border border-[var(--border-color)] bg-[var(--surface-soft)] px-6 py-2 text-sm font-semibold text-[var(--text-primary)] hover:bg-[var(--surface)]"
                >
                  Donate Again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-primary)]"
                  />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-primary)]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Contact
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contact Number"
                      className="mt-2 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-primary)]"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Donation Amount
                  </label>

                  <div className="mt-3 flex gap-3 flex-wrap">
                    {["100", "500", "1000"].map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        onClick={() => setAmount(amt)}
                        className={`rounded-lg border px-4 py-2 text-sm font-semibold ${amount === amt
                            ? "bg-[var(--brand-primary)] text-white border-[var(--brand-primary)]"
                            : "border-[var(--border-color)] text-[var(--text-primary)] hover:bg-[var(--surface-soft)]"
                          }`}
                      >
                        &#36;{amt}
                      </button>
                    ))}
                  </div>

                  <input
                    type="number"
                    required
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Enter custom amount"
                    className="mt-4 w-full border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-primary)]"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-muted)]">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Message (optional)"
                    className="w-full resize-none border-0 border-b border-[var(--border-color)] bg-transparent px-0 pb-2.5 pt-1 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--brand-primary)]"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--brand-primary)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-70"
                >
                  {status === "loading" ? "Processing..." : "Complete Donation"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}