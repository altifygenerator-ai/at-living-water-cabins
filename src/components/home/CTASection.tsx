import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiPhone } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section className="section bg-[var(--background)]">
      <Container>
        <div className="relative overflow-hidden rounded-[2.4rem] shadow-[var(--shadow)]">
          <div className="absolute inset-0">
            <Image
              src="/images/cabins/PeaceView1.jpg"
              alt="Cabin booking call to action"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.88),rgba(17,10,6,.58),rgba(17,10,6,.25))]" />

          <div className="relative z-10 grid gap-10 p-8 text-white md:p-12 lg:grid-cols-[1fr_0.75fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
                Book Direct
              </p>

              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.06em] text-[var(--paper)] md:text-6xl">
                Ready to plan your stay?
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/76">
                Call to check availability, ask about the cabins or family
                lodge, and get the details for your next quiet getaway.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-6 backdrop-blur">
              <p className="text-sm font-bold text-white/64">
                Best way to reserve
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-3xl font-black tracking-[-0.04em] text-white transition hover:text-[var(--copper)]"
              >
                <FiPhone className="text-[var(--copper)]" />
                {site.phone}
              </Link>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/68">
                Call for availability, rates, directions, and questions about
                the property.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
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