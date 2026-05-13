import Image from "next/image";
import Link from "next/link";
import { FiCheck, FiPhone } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CabinCard from "@/components/cabins/CabinCard";
import CabinsHeroSlideshow from "@/components/cabins/CabinsHeroSlideshow";

export const metadata = {
  title: "Cabins",
  description:
    "View creekside cabin rentals near Glenwood and Mount Ida, Arkansas. Love, Faith, Hope, and Peace cabins are tucked along Collier Creek near the Caddo River.",
};

export default function CabinsPage() {
  return (
    <main>
      <CabinsHeroSlideshow />

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

<section className="relative overflow-hidden bg-[var(--forest)]">
  <div className="absolute inset-0 bg-gradient-to-br from-black/10 via-transparent to-black/25" />

<div
  className="absolute -left-20 -top-20 hidden h-80 w-80 overflow-hidden border border-white/10 shadow-2xl md:block"
  style={{
    clipPath:
      "polygon(0% 0%, 100% 0%, 96% 9%, 100% 18%, 94% 28%, 99% 39%, 92% 50%, 97% 62%, 91% 74%, 96% 86%, 88% 100%, 0% 100%)",
  }}
>
  <Image
    src="/images/cabins/River3.jpg"
    alt="Creekside view near At Living Water Cabins"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-black/35" />
</div>

  <div className="absolute -right-20 top-10 h-64 w-64 rounded-full bg-[var(--gold)]/10 blur-3xl" />
  <div className="absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[var(--gold)]/10 blur-3xl" />

  <Container className="relative z-10 py-20">
    <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
      <div className="max-w-3xl">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
          Creekside Setting
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl">
          Close enough to explore. Quiet enough to disappear for a while.
        </h2>

        <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/80">
          Stay tucked away near Collier Creek with easy access to the Caddo
          River, Mount Ida, Glenwood, and the Ouachita Mountains.
        </p>

        <div className="mt-8 h-1 w-24 rounded-full bg-[var(--gold)]" />
      </div>

      <div className="grid gap-4">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--gold)]">
            River Access
          </p>
          <h3 className="mt-3 text-2xl font-black text-white">
            Close to the Caddo River
          </h3>
          <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
            A strong basecamp for floating, fishing, and weekend trips around
            Southwest Arkansas.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--gold)]">
              Location
            </p>
            <h3 className="mt-3 text-xl font-black text-white">
              Glenwood & Mount Ida
            </h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
              Easy access to nearby towns, local stops, and scenic drives.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--gold)]">
              Setting
            </p>
            <h3 className="mt-3 text-xl font-black text-white">
              Quiet Collier Creek
            </h3>
            <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
              Peaceful mornings, wooded surroundings, and room to slow down.
            </p>
          </div>
        </div>
      </div>
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