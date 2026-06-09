import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMapPin, FiMail, FiArrowRight } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Contact",
  description:
    "Contact At Living Water Cabins for directions, availability, and reservations in Norman, Arkansas.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative -mt-20 min-h-[82vh] overflow-hidden bg-[var(--espresso)] pt-20 text-white">
        <Image
          src="/images/cabins/PeacePorchRiver.jpg"
          alt="Creekside porch at At Living Water Cabins"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.94),rgba(38,23,15,.66),rgba(38,23,15,.14))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.18),transparent,rgba(17,10,6,.86))]" />

        <div className="absolute right-8 top-32 hidden w-[38vw] max-w-xl lg:block">
          <div className="relative ml-auto h-[390px] w-[290px] rotate-3 overflow-hidden rounded-[2rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/LoveBridge.jpg"
              alt="Bridge near At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative -mt-20 h-[235px] w-[350px] -rotate-3 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/riverflowers.jpg"
              alt="Creekside flowers near At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10 flex min-h-[calc(82vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)]">
              <span className="h-px w-10 bg-[var(--copper)]" />
              Contact & Booking
            </p>

            <h1 className="mt-5 text-[clamp(3.3rem,7vw,7.1rem)] font-black leading-[1.03] tracking-[-0.085em] text-[var(--paper)] text-balance">
              Book direct, ask questions, and plan your stay.
            </h1>
<div className="pt-5">
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/84 md:mt-10 md:text-xl">
              Book directly online, call with questions, or reach out for
              directions, cabin details, and help choosing the right stay for
              your trip.
            </p>
</div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#availability"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--copper)] hover:text-white"
              >
                Check Availability
                <FiArrowRight />
              </Link>

              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--espresso)]"
              >
                <FiPhone />
                Call {site.phone}
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 -mt-12">
        <Container>
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.95)] shadow-[var(--shadow)] backdrop-blur md:grid-cols-3">
            <Link
              href={site.phoneHref}
              className="group border-b border-[rgba(38,23,15,0.1)] p-5 transition hover:bg-white md:border-b-0 md:border-r"
            >
              <FiPhone className="text-2xl text-[var(--copper)]" />

              <p className="mt-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Call Direct
              </p>

              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {site.phone}
              </p>
            </Link>

            <div className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r">
              <FiMapPin className="text-2xl text-[var(--copper)]" />

              <p className="mt-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Property Location
              </p>

              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {site.address.property}
              </p>
            </div>

            <div className="p-5">
              <FiMail className="text-2xl text-[var(--copper)]" />

              <p className="mt-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Availability
              </p>

              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                Check dates online or call for help.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="availability" className="section bg-[var(--linen)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Start Here</p>

              <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.3rem)] font-black leading-[1.08] tracking-[-0.07em] text-[var(--espresso)] text-balance">
                Check open dates, then book direct or call with questions.
              </h2>
<div className="pt-5">
              <p className="mt-7 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                Use the availability tool to see what cabins are open for your
                dates. If you need help choosing a cabin, confirming directions,
                asking about pets, or planning your stay, calling is still the
                easiest way to get quick help.
              </p>
</div>
              <div className="mt-8 relative min-h-[360px] overflow-hidden rounded-[1.9rem] shadow-[var(--shadow-soft)]">
                <Image
                  src="/images/cabins/LovePorch4.jpg"
                  alt="Porch view at At Living Water Cabins"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] border border-white/12 bg-black/28 p-5 text-white backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                    Direct Booking
                  </p>

                  <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                    Check dates online, book direct, or call before you arrive
                    if you need help with directions or cabin details.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--paper)] p-4 shadow-[var(--shadow-soft)] md:p-6">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                Check Availability
              </p>

              <h3 className="mt-4 text-[clamp(2.2rem,4vw,3.6rem)] font-black leading-[1.08] tracking-[-0.065em] text-[var(--espresso)] text-balance">
                See what cabins are open.
              </h3>
<div className="pt-5">
              <p className="mt-5 max-w-xl text-sm font-semibold leading-7 text-[var(--muted)]">
                Search available dates across At Living Water Cabins, then book
                direct online or call if you need help choosing the right cabin.
              </p>
</div>
              <div className="mt-7 overflow-hidden rounded-[1.5rem] border border-[var(--border)] bg-white">
                <iframe
                  src="https://app.ownerrez.com/widgets/35bd4b1a3ab74902a39763fc8d7011a1?view=form"
                  title="At Living Water Cabins Availability"
                  className="-mt-36 h-[900px] w-full rounded-[1.5rem] border-0 bg-white"
                  loading="lazy"
                />
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#book-direct"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-4 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                >
                  Book Direct
                  <FiArrowRight />
                </Link>

                <Link
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-white px-6 py-4 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-[var(--linen)]"
                >
                  <FiPhone />
                  Call Direct
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[650px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/River3.jpg"
          alt="Creekside view at At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.84),rgba(17,10,6,.42),rgba(17,10,6,.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,10,6,.7))]" />

        <Container className="relative z-10 flex min-h-[650px] items-end pb-14 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Getting Here
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-black leading-[1.08] tracking-[-0.07em] text-[var(--paper)] text-balance">
              Easy to find. Hard to leave.
            </h2>
<div className="pt-5">
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/78 md:mt-10">
              Located in Norman, Arkansas, with access to Glenwood, Mount Ida,
              the Caddo River, and the surrounding Ouachita scenery.
            </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--paper)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="eyebrow">Directions</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[1.08] tracking-[-0.065em] text-[var(--espresso)] text-balance">
                Find us in Norman, Arkansas.
              </h2>

              <p className="mt-7 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                Use your preferred map app for directions. If you need help
                finding the property, call before you head this way.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                >
                  <FiPhone />
                  Call for Directions
                </Link>

                <Link
                  href="/cabins"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--linen)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  View Cabins
                  <FiArrowRight />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[var(--border)] shadow-[var(--shadow-soft)]">
              <iframe
                src="https://www.google.com/maps?q=Norman,Arkansas&output=embed"
                className="h-[460px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[600px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/LoveScenic8.jpg"
          alt="Cabin booking call to action"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.9),rgba(17,10,6,.58),rgba(17,10,6,.24))]" />

        <Container className="relative z-10 flex min-h-[600px] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Ready to Check Availability?
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black leading-[1.08] tracking-[-0.07em] text-[var(--paper)] text-balance">
              Check dates online or call for help choosing the right cabin.
            </h2>
<div className="pt-5">
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/78 md:mt-10">
              Ask about dates, cabins, lodge details, rates, pet questions, or
              anything else you need before booking.
            </p>
</div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/#book-direct"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
              >
                Book Direct
                <FiArrowRight />
              </Link>

              <Link
                href="/cabins"
                className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[var(--espresso)]"
              >
                View Cabins
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}