import Image from "next/image";
import Link from "next/link";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiPhone,
  FiShield,
} from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Policies",
  description:
    "Reservation, cancellation, check-in, pet, smoking, and privacy policies for At Living Water Cabins in Norman, Arkansas.",
};

const quickPolicies = [
  {
    title: "Check-in",
    text: "3:00 PM CST",
    icon: FiClock,
  },
  {
    title: "Check-out",
    text: "10:00 AM CST",
    icon: FiClock,
  },
  {
    title: "Reservations",
    text: "50% down if more than 14 days out. Full payment within 14 days.",
    icon: FiCreditCard,
  },
  {
    title: "Age Requirement",
    text: "Must be 21 or older to reserve.",
    icon: FiShield,
  },
];

const policySections = [
  {
    title: "Reservations",
    icon: FiCreditCard,
    paragraphs: [
      "We require full payment for all reservations made within 14 days of your arrival date by credit or debit card.",
      "If reserving more than 14 days in advance, we require 50% of your total stay to secure the reservation. The remaining balance of the reserved stay will be charged to your credit or debit card on the day of your scheduled arrival.",
      "If paying with anything other than credit or debit card, please ask for details and policies. Special payment policies may apply to holiday and discount specials.",
      "We require credit or debit card information with all reservations, even if you choose to pay with cash, check, or money order.",
      "No-shows will be charged 100% of the days reserved.",
    ],
  },
  {
    title: "General Policies",
    icon: FiShield,
    paragraphs: [
      "Cash payments: We reserve the right to charge a $30 damage/cleaning surcharge when paying with cash or any method other than credit or debit card.",
      "We thank our guests in advance for taking care of the cabins and grounds so the next guests can enjoy them as well. We reserve the right to charge for damages to the cabins, cabin contents, outside items, grounds, and property beyond normal wear and tear.",
      "You must be 21 years of age or older to make reservations. Persons under 21 years of age must be accompanied by an adult. Call for possible exceptions.",
      "One-night stays, when allowed, are prepaid and non-refundable. There are no discount rates or specials for one-night stays, and a $25 cleaning surcharge is added.",
    ],
  },
  {
    title: "Check-In / Check-Out",
    icon: FiClock,
    paragraphs: [
      "Check-in time is 3:00 PM CST.",
      "Check-out time is 10:00 AM CST.",
      "Please have all belongings out of the cabin by 10:00 AM so we have time to clean before the next guests arrive.",
    ],
  },
  {
    title: "Cancellations & Limited Refund Policy",
    icon: FiAlertCircle,
    paragraphs: [
      "All sales are final within 14 days of arrival.",
      "If something comes up and you are unable to stay any or all of the days reserved, you must reschedule or cancel at least 14 days before your arrival date to receive a refund.",
      "If you cancel within 14 days before your stay, you forfeit your deposit unless we are able to re-book all the days you had reserved. If we re-book all reserved days, you will receive your deposit back minus a $30 booking/processing fee.",
      "If you cancel more than 14 days before your arrival date, your deposit will be refunded less any processing fee charged by credit card or PayPal. You may also leave your deposit on file and apply it to another reservation once without incurring the fee.",
      "To cancel, you must contact us by phone between 8:00 AM and 10:00 PM CST and receive a cancellation number. We do not accept cancellations by email.",
      "All refunds will be made by crediting your credit card or by check payable to the name on the credit card or checking account.",
      "There are no refunds for early departure. Deposits left on file are forfeited if not used within one year.",
    ],
  },
  {
    title: "Smoking & Pet Policy",
    icon: FiCheckCircle,
    paragraphs: [
      "The Family Lodge does not allow pets. Smoking is permitted outside only.",
      "Love Cabin and Faith Cabin are no-smoking, no-pet environments inside and outside for guests who are allergic.",
      "Peace Cabin and Hope Cabin permit smoking outside only and are pet friendly, subject to the pet requirements below.",
      "If you smoke inside any cabin or the lodge, bring unregistered guests, or bring unregistered pets, you will be billed an additional $100 and/or asked to leave with no refund.",
    ],
    bullets: [
      "Pet-friendly cabins are Peace and Hope, when available.",
      "Well-behaved, housebroken small dogs 25 lbs. and under are allowed. Larger dogs may be considered on an individual basis.",
      "Pet surcharge is $25 per dog for a 1–2 night stay, then $10 per dog for each additional night. Larger dogs are $15 per dog per night.",
      "There is a 2 dog limit per cabin.",
      "Dogs must be leashed and picked up after.",
      "Rabies shots and other vaccinations must be up to date, with proof upon arrival.",
      "If you plan an activity and cannot take your dog, you must bring a crate to leave them in while away from the cabin.",
      "Dogs may not be taken into Love or Faith Cabin at any time, even if guests in those cabins are with your group.",
      "Pet owners are liable for any damages caused by their pets.",
    ],
  },
  {
    title: "Privacy Policy",
    icon: FiShield,
    paragraphs: [
      "At Living Water Cabins is dedicated to protecting the privacy of our customers and follows high standards of ethical practices in our operations.",
      "We do not sell, barter, give away, or rent your personal information to any company outside of At Living Water Cabins.",
      "We only ask for the information needed to provide the service you requested.",
    ],
  },
];

export default function PoliciesPage() {
  return (
    <main>
      <section className="relative -mt-20 min-h-[74vh] overflow-hidden bg-[var(--charcoal)] pt-20 text-white">
        <Image
          src="/images/policies-hero.jpg"
          alt="Peaceful cabin setting at At Living Water Cabins"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-black/20" />

        <Container className="relative z-10 flex min-h-[calc(74vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Policies
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
              Clear details before you book.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
              Reservation, cancellation, check-in, pet, smoking, and privacy
              policies for your stay at At Living Water Cabins.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-4 text-sm font-black text-black shadow-lg transition hover:-translate-y-0.5"
              >
                <FiPhone />
                Questions? Call Us
              </Link>

              <Link
                href="/cabins"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--forest)]"
              >
                View Cabins
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {quickPolicies.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="grid size-12 place-items-center rounded-full bg-[var(--forest)] text-white">
                    <Icon size={20} />
                  </div>

                  <h2 className="mt-5 text-2xl font-black text-[var(--forest)]">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--background)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                eyebrow="Before You Stay"
                title="The important details, cleaned up and easy to read."
                text="These policies keep expectations clear for reservations, cancellations, pets, smoking, payments, and check-in."
              />

              <div className="mt-8 rounded-[2rem] bg-[var(--forest)] p-6 text-white shadow-[var(--shadow-soft)]">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--gold)]">
                  Need Clarification?
                </p>

                <p className="mt-3 text-sm font-semibold leading-7 text-white/75">
                  Policies can depend on stay dates, payment method, and
                  property. Call if you have questions before booking.
                </p>

                <Link
                  href={site.phoneHref}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black"
                >
                  <FiPhone />
                  {site.phone}
                </Link>
              </div>
            </div>

            <div className="grid gap-6">
              {policySections.map((section) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.title}
                    className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8"
                  >
                    <div className="flex items-center gap-4">
                      <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--forest)] text-white">
                        <Icon size={20} />
                      </div>

                      <h2 className="text-3xl font-black text-[var(--forest)]">
                        {section.title}
                      </h2>
                    </div>

                    <div className="mt-6 grid gap-4">
                      {section.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm font-semibold leading-7 text-[var(--muted)]"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {section.bullets && (
                      <div className="mt-6 grid gap-3 rounded-[1.5rem] bg-[var(--cream)] p-5">
                        {section.bullets.map((bullet) => (
                          <p
                            key={bullet}
                            className="flex gap-3 text-sm font-black leading-7 text-[var(--forest)]"
                          >
                            <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--forest)] text-white">
                              <FiCheckCircle size={13} />
                            </span>
                            {bullet}
                          </p>
                        ))}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[56vh] overflow-hidden bg-[var(--charcoal)]">
        <Image
          src="/images/policies-break.jpg"
          alt="Quiet creekside cabin stay in Arkansas"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <Container className="relative z-10 flex min-h-[56vh] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Simple Expectations
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Clear policies make for easier stays.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/86">
              Review the details before booking, then call if anything needs to
              be clarified for your trip.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-8 rounded-[2.5rem] bg-[var(--forest)] p-8 text-white shadow-[var(--shadow)] md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Ready to Book?
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                Call to check availability and confirm details.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/78">
                For reservation questions, pet questions, cancellation details,
                or property-specific rules, give us a call before booking.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
              <p className="text-sm font-bold text-white/68">
                Best way to reach us
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-2xl font-black text-white transition hover:text-[var(--gold)]"
              >
                <FiPhone className="text-[var(--gold)]" />
                {site.phone}
              </Link>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/cabins"
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black"
                >
                  View Cabins
                </Link>

                <Link
                  href="/family-lodge"
                  className="inline-flex justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[var(--forest)]"
                >
                  View Family Lodge
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}