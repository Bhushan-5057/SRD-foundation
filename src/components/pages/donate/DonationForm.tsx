import Image from "next/image";
import {
  FiCheckCircle,
  FiHeart,
  FiMail,
  FiShield,
} from "react-icons/fi";

const DONATION_EMAIL = "donations@srdfoundation.ca";

const transferSteps = [
  "Open your Canadian online banking app or website.",
  "Choose Interac e-Transfer as the payment method.",
  `Send your donation to ${DONATION_EMAIL}.`,
  "Add your name and donation note in the message field.",
];

export function DonationForm() {
  return (
    <section className="mx-auto mt-10 max-w-5xl px-3 sm:mt-16 sm:px-4 md:px-6">
      <div className="mx-auto mb-7 max-w-2xl text-center sm:mb-10" data-aos="zoom-in">
        <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--brand-secondary)] sm:text-xs sm:tracking-[0.18em]">
          Donate by Interac e-Transfer
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
          Support Our Cause
        </h2>
        <div className="mx-auto mt-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-[var(--brand-primary)] to-[var(--brand-secondary)] opacity-80 sm:mt-6 sm:w-16" />
      </div>

      <div
        className="overflow-hidden shadow-[0_16px_45px_rgb(34_49_27_/_0.08)] dark:shadow-[0_16px_45px_rgb(0_0_0_/_0.35)] sm:rounded-[1.75rem]"
        data-aos="fade-up"
      >
        <div className="relative overflow-hidden p-4 sm:p-6 md:p-8 lg:p-10">
          <div className="absolute right-0 top-0 hidden h-36 w-36 rounded-bl-full bg-[var(--brand-secondary)]/10 md:block" />
          <div className="absolute bottom-0 left-0 hidden h-28 w-28 rounded-tr-full bg-[var(--brand-primary)]/10 md:block" />

          <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-[var(--surface)] px-3 py-2 text-[11px] font-semibold text-[var(--brand-primary)] ring-1 ring-[var(--border-color)] sm:px-4 sm:text-xs">
              <FiShield className="h-4 w-4 shrink-0" />
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                Payment accepted via Interac
              </span>
            </div>

            <div className="mt-6 flex h-24 w-24 shrink-0 items-center justify-center p-3 sm:h-28 sm:w-28 sm:rounded-3xl sm:p-4">
              <Image
                src="/assets/InteracLogo.svg"
                alt="Interac e-Transfer"
                width={100}
                height={100}
                className="h-full w-full object-contain"
              />
            </div>

            <h3 className="mt-5 max-w-2xl text-xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl">
              Send your donation directly by e-Transfer
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-muted)] sm:text-base sm:leading-7">
              Use your Canadian online banking app to send a secure Interac
              e-Transfer to SRD Foundation.
            </p>

            <div className="mt-6 w-full max-w-2xl p-3 text-left sm:mt-8 sm:p-5">
              <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--text-muted)] sm:text-xs">
                Donation email
              </p>
              <a
                href={`mailto:${DONATION_EMAIL}`}
                className="mt-3 flex w-full items-start gap-2 rounded-xl bg-[var(--brand-primary)] px-3 py-3 text-sm font-bold leading-snug text-white transition hover:opacity-90 min-[380px]:items-center min-[380px]:gap-3 sm:px-5 sm:py-4 sm:text-lg"
              >
                <FiMail className="mt-0.5 h-5 w-5 shrink-0 min-[380px]:mt-0" />
                <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                  {DONATION_EMAIL}
                </span>
              </a>
              <p className="mt-3 px-1 text-xs leading-5 text-[var(--text-muted)] sm:text-sm">
                Tap the email or copy it into your bank&apos;s Interac e-Transfer recipient field.
              </p>
            </div>

            <div className="mt-7 w-full max-w-3xl p-4 text-left sm:mt-8 sm:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--brand-secondary)] sm:text-xs sm:tracking-[0.16em]">
                How to donate
              </p>
              <h4 className="mt-2 text-lg font-semibold leading-tight text-[var(--text-primary)] sm:text-2xl">
                Complete it from your bank in four quick steps.
              </h4>

              <div className="mt-5 flex flex-col gap-3">
                {transferSteps.map((step, index) => (
                  <div
                    key={step}
                    className="flex min-w-0 gap-3 rounded-xl bg-[var(--surface-soft)] p-3 sm:gap-4 sm:p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface)] text-xs font-bold text-[var(--brand-primary)] ring-1 ring-[var(--border-color)] sm:h-10 sm:w-10 sm:bg-[var(--surface-soft)] sm:text-sm">
                      {index + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm leading-6 text-[var(--text-muted)] sm:leading-7">
                        {step}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex w-full max-w-3xl flex-col gap-3 text-left sm:mt-6 sm:flex-row">
              <div className="flex min-w-0 flex-1 items-start gap-3 rounded-xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border-color)]">
                <FiHeart className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-secondary)]" />
                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  Every contribution helps newcomers, seniors, and families
                  access practical support.
                </p>
              </div>
              <div className="flex min-w-0 flex-1 items-start gap-3 rounded-xl bg-[var(--surface)] p-4 ring-1 ring-[var(--border-color)]">
                <FiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-primary)]" />
                <p className="text-sm leading-6 text-[var(--text-muted)]">
                  Add your name in the bank message so we can identify your
                  donation clearly.
                </p>
              </div>
            </div>

            <div className="mt-5 w-full max-w-3xl rounded-xl border border-[var(--border-color)] bg-[var(--surface)] p-4 text-left sm:rounded-2xl sm:p-5">
              <div className="flex min-w-0 items-start gap-3 sm:items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-secondary)]/10 text-[var(--brand-secondary)]">
                  <FiShield className="h-5 w-5" />
                </div>
                <p className="min-w-0 text-sm font-semibold leading-6 text-[var(--text-primary)]">
                  Simple, secure, and available through most Canadian banks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
