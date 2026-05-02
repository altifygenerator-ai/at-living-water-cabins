import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiPhone } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CabinCard from "@/components/cabins/CabinCard";

export const metadata = {
  title: "Cabins",
  description:
    "View creekside cabin rentals near Glenwood and Mount Ida, Arkansas. Love, Faith, Hope, and Peace cabins are tucked along Collier Creek near the Caddo River.",
};

export default function CabinsPage() {
  return (
    <main>
      <section className="relative -mt-20 min-h-[72vh] overflow-hidden bg-[var(--charcoal)] pt-20 text-white">
        <Image
          src="/images/cabins-hero.jpg"
          alt="Creekside cabins in the Ouachita Mountains of Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-black/20" />

        <Container className="relative z-10 flex min-h-[calc(72vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              The Cabins
            </p>

            <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
              Four quiet cabins tucked along Collier Creek.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
              Secluded cabin rentals in the Ouachita Mountains near the Caddo
              River, built for simple, peaceful stays in Southwest Arkansas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-4 text-sm font-black text-black shadow-lg transition hover:-translate-y-0.5"
              >
                <FiPhone />
                Call for Availability
              </Link>

              <Link
                href="#cabins"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--forest)]"
              >
                View Cabins
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <SectionHeading
              eyebrow="Cabin Details"
              title="Clean, simple, creekside stays."
              text="Each cabin is one bedroom and one bath, with a queen bed, queen sleeper sofa, full kitchen, air conditioning, and the essentials needed for a comfortable stay."
            />

            <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--gold)]">
                Standard Cabin Setup
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "One bedroom",
                  "One full bathroom",
                  "Queen bed",
                  "Queen sleeper sofa",
                  "Fully equipped kitchen",
                  "TVs in bedroom and living room",
                ].map((item) => (
                  <p
                    key={item}
                    className="flex items-center gap-3 text-sm font-black text-[var(--forest)]"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-[var(--forest)] text-white">
                      <FiCheck size={15} />
                    </span>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[58vh] overflow-hidden bg-[var(--charcoal)]">
        <Image
          src="/images/cabins-creek-wide.jpg"
          alt="Quiet creekside setting at At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/45 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <Container className="relative z-10 flex min-h-[58vh] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Creekside Setting
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Close enough to explore. Quiet enough to disappear for a while.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/86">
              Stay tucked away near Collier Creek with easy access to the Caddo
              River, Mount Ida, Glenwood, and the Ouachita Mountains.
            </p>
          </div>
        </Container>
      </section>

      <section id="cabins" className="section bg-[var(--background)]">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Choose Your Cabin"
              title="Love, Faith, Hope, and Peace."
              text="All four cabins share a similar layout, making it easy to choose the stay that fits your trip."
            />

            <Link
              href={site.phoneHref}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--charcoal)]"
            >
              <FiPhone />
              {site.phone}
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {cabins.map((cabin) => (
              <CabinCard key={cabin.slug} cabin={cabin} />
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-8 rounded-[2.5rem] bg-[var(--forest)] p-8 text-white shadow-[var(--shadow)] md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Cabin Rates
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                {site.cabinsInfo.rates.base} with a{" "}
                {site.cabinsInfo.rates.minimum}.
              </h2>

              <div className="mt-6 grid gap-3 text-sm font-semibold leading-7 text-white/78">
                <p>{site.cabinsInfo.rates.holidays}</p>
                <p>{site.cabinsInfo.rates.extraGuest}</p>
                <p>{site.cabinsInfo.rates.note}</p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <p className="text-sm font-bold text-white/70">
                Ready to check dates?
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-2xl font-black text-white transition hover:text-[var(--gold)]"
              >
                <FiPhone className="text-[var(--gold)]" />
                {site.phone}
              </Link>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/70">
                Call year-round for availability and reservations. Online
                booking will be added here once the booking system is connected.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}