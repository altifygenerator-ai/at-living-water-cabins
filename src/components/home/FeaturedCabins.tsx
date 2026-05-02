import Link from "next/link";
import { FiArrowRight, FiUsers, FiHome } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FeaturedCabins() {
  return (
    <section className="section bg-[var(--cream)]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The Cabins"
            title="Four quiet cabins along Collier Creek"
            text="Love, Faith, Hope, and Peace are cozy one-bedroom cabins tucked into the Ouachita Mountains near the Caddo River."
          />

          <Link
            href="/cabins"
            className="hidden rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--charcoal)] md:inline-flex"
          >
            View All Cabins
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cabins.map((cabin) => (
            <Link
              key={cabin.slug}
              href={`/cabins/${cabin.slug}`}
              className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--sand)] to-[var(--stone)]">
                <div className="absolute inset-0 grid place-items-center text-sm font-black uppercase tracking-[0.18em] text-[var(--forest)]/45">
                  Cabin Image
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-black text-[var(--forest)]">
                  {cabin.name}
                </h3>

                <p className="mt-3 text-sm font-semibold text-[var(--muted)]">
                  {cabin.summary}
                </p>

                <div className="mt-5 grid gap-2 text-sm font-black text-[var(--forest)]/80">
                  <p className="flex items-center gap-2">
                    <FiUsers className="text-[var(--gold)]" />
                    {cabin.details.sleeps}
                  </p>

                  <p className="flex items-center gap-2">
                    <FiHome className="text-[var(--gold)]" />
                    {cabin.details.bed}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm font-black text-[var(--forest)]">
                  View Cabin
                  <FiArrowRight className="transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-[var(--forest)] p-6 text-white md:flex md:items-center md:justify-between md:p-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--gold)]">
              Cabin Rates
            </p>
            <p className="mt-2 text-2xl font-black text-white">
              {site.cabinsInfo.rates.base} · {site.cabinsInfo.rates.minimum}
            </p>
            <p className="mt-2 max-w-3xl text-sm font-medium text-white/75">
              {site.cabinsInfo.rates.note}
            </p>
          </div>

          <Link
            href={site.phoneHref}
            className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black md:mt-0"
          >
            Call for Availability
          </Link>
        </div>
      </Container>
    </section>
  );
}