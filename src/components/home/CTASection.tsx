import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="section bg-[var(--background)]">
      <Container>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--forest)] p-8 text-white shadow-[var(--shadow)] md:p-12">
          <div className="absolute -right-20 -top-20 size-64 rounded-full bg-[var(--gold)]/20 blur-3xl" />
          <div className="absolute -bottom-24 left-10 size-72 rounded-full bg-[var(--water)]/15 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Ready to Plan Your Stay?
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
                Call to check availability and book your cabin.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/78">
                At Living Water Cabins is open year-round for quiet weekend
                getaways, family trips, and Southwest Arkansas adventures.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <p className="text-sm font-bold text-white/70">
                Best way to reach us
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-3xl font-black text-white transition hover:text-[var(--gold)]"
              >
                <FiPhone className="text-[var(--gold)]" />
                {site.phone}
              </Link>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/70">
                Call for availability, reservations, cabin questions, and
                directions to the property.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black"
              >
                Contact & Directions
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}