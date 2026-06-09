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

export const metadata = {
  title: "Policies",
  description:
    "Reservation, cancellation, check-in, pet, smoking, and privacy policies for At Living Water Cabins in Norman, Arkansas.",
};

const quickPolicies = [
  {
    title: "Check-in",
    text: "2:00 PM CST",
    icon: FiClock,
  },
  {
    title: "Check-out",
    text: "11:00 AM CST",
    icon: FiClock,
  },
  {
    title: "Reservations",
    text: "Guests pay in full when booking through OwnerRez or Airbnb.",
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
    "Reservations are paid in full at the time of booking through OwnerRez or Airbnb.",
    "Your booking is not considered confirmed until the reservation and payment are completed through the booking platform.",
    "Guests booking through Airbnb will follow the payment process shown on Airbnb. Guests booking direct through OwnerRez will complete payment through the direct booking system.",
    "No-shows will be charged 100% of the reservation.",
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
      "Check-in time is 2:00 PM CST.",
      "Check-out time is 11:00 AM CST.",
      "Please have all belongings out of the cabin by 11:00 AM so we have time to clean before the next guests arrive.",
    ],
  },
{
  title: "Cancellations & Refunds",
  icon: FiAlertCircle,
  paragraphs: [
    "Guests receive a full refund when cancelling 14 days or more before the scheduled arrival date.",
    "Cancellations made less than 14 days before arrival are not eligible for a refund unless otherwise approved by management.",
    "Airbnb reservations must be cancelled through Airbnb and are subject to the cancellation terms shown on the Airbnb booking.",
    "Direct bookings made through OwnerRez should be cancelled through the direct booking system or by contacting management for help.",
    "There are no refunds for no-shows or early departures.",
  ],
},
  {
    title: "Smoking & Pet Policy",
    icon: FiCheckCircle,
    paragraphs: [
      "Smoking is permitted outside only.",
      "Love Cabin and Faith Cabin are no-smoking, no-pet environments inside and outside for guests who are allergic.",
      "Peace Cabin and Hope Cabin permit smoking outside only and are pet friendly, subject to the pet requirements below.",
      "If you smoke inside any cabin, bring unregistered guests, or bring unregistered pets, you will be billed an additional $100 and/or asked to leave with no refund.",
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
      <section className="relative -mt-20 min-h-[78vh] overflow-hidden bg-[var(--espresso)] pt-20 text-white">
        <Image
          src="/images/cabins/PeacePorchRiver.jpg"
          alt="Quiet creekside cabin porch"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.92),rgba(38,23,15,.68),rgba(38,23,15,.18))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.2),transparent,rgba(17,10,6,.86))]" />

        <div className="absolute right-6 top-32 hidden w-[38vw] max-w-xl lg:block">
          <div className="relative ml-auto h-[380px] w-[280px] rotate-3 overflow-hidden rounded-[2rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/LoveScenic4.jpg"
              alt="Creekside cabin setting"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative -mt-20 h-[230px] w-[330px] -rotate-3 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/HopeView3.jpg"
              alt="Cabin view at At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10 flex min-h-[calc(78vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)]">
              <span className="h-px w-10 bg-[var(--copper)]" />
              Before You Book
            </p>

            <h1 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[1.03] tracking-[-0.085em] text-[var(--paper)] text-balance">
              Clear details for an easier stay.
            </h1>
<div className="pt-5">
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/84 md:text-xl">
              Reservation, cancellation, check-in, pet, smoking, and privacy
              policies for your stay at At Living Water Cabins.
            </p>
</div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--copper)] hover:text-white"
              >
                <FiPhone />
                Questions? Call Us
              </Link>

              <Link
                href="/cabins"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--espresso)]"
              >
                View Cabins
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 -mt-12">
        <Container>
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.95)] shadow-[var(--shadow)] backdrop-blur md:grid-cols-4">
            {quickPolicies.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r last:md:border-r-0"
                >
                  <Icon className="text-2xl text-[var(--copper)]" />

                  <p className="mt-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm font-black leading-6 tracking-[-0.02em] text-[var(--espresso)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--linen)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
            <aside className="lg:sticky lg:top-28">
              <p className="eyebrow">Stay Details</p>

              <h2 className="mt-5 text-[clamp(2.6rem,5vw,4.8rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
                The important stuff, without the mess.
              </h2>

              <p className="mt-5 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                These policies help keep expectations clear before you reserve.
                Some details may depend on stay dates, payment method, pets, and
                property type.
              </p>

              <div className="mt-8 overflow-hidden rounded-[1.75rem] bg-[var(--espresso)] shadow-[var(--shadow-soft)]">
                <div className="relative min-h-[220px]">
                  <Image
                    src="/images/cabins/riverflowers.jpg"
                    alt="Creekside flowers at At Living Water Cabins"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-6 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                    Need Clarification?
                  </p>

                  <p className="mt-3 text-sm font-semibold leading-7 text-white/72">
                    Call before booking if you have questions about pets,
                    payments, cancellation details, or which cabin is the best
                    fit.
                  </p>

                  <Link
                    href={site.phoneHref}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-5 py-3 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
                  >
                    <FiPhone />
                    {site.phone}
                  </Link>
                </div>
              </div>
            </aside>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {policySections.map((section) => {
                const Icon = section.icon;

                return (
                  <article
                    key={section.title}
                    className="grid gap-6 py-10 md:grid-cols-[0.28fr_1fr]"
                  >
                    <div>
                      <div className="inline-flex items-center gap-3 rounded-full bg-[var(--paper)] px-4 py-2 shadow-[var(--shadow-soft)]">
                        <Icon className="text-[var(--copper)]" />
                        <span className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[var(--espresso)]">
                          Policy
                        </span>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-[clamp(2rem,3vw,3.2rem)] font-black leading-[1.06] tracking-[-0.06em] text-[var(--espresso)]">
                        {section.title}
                      </h2>

                      <div className="mt-6 grid gap-4">
                        {section.paragraphs.map((paragraph) => (
                          <p
                            key={paragraph}
                            className="text-sm font-semibold leading-7 text-[var(--muted)] md:text-base md:leading-8"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      {section.bullets && (
                        <div className="mt-7 grid gap-3 rounded-[1.5rem] bg-[var(--paper)] p-5 shadow-[var(--shadow-soft)]">
                          {section.bullets.map((bullet) => (
                            <p
                              key={bullet}
                              className="flex gap-3 text-sm font-bold leading-7 text-[var(--espresso)]"
                            >
                              <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--espresso)] text-white">
                                <FiCheckCircle size={13} />
                              </span>
                              {bullet}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[620px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/PeaceView1.jpg"
          alt="Quiet cabin stay at At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.86),rgba(17,10,6,.48),rgba(17,10,6,.2))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,10,6,.64))]" />

        <Container className="relative z-10 flex min-h-[620px] items-end pb-14 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Book Direct
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--paper)] text-balance">
              Questions are easier before the trip.
            </h2>
<div className="pt-5">
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Call to check availability, confirm details, and make sure the
              cabin or lodge is the right fit for your stay.
            </p>
</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
              >
                <FiPhone />
                {site.phone}
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[var(--espresso)]"
              >
                Contact & Directions
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}