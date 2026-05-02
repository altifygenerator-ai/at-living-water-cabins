import Link from "next/link";
import { FiArrowRight, FiMapPin, FiPhone } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white">
      <Container className="py-14 md:py-18">
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 shadow-2xl md:grid-cols-[1.35fr_0.8fr_1fr] md:p-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Creekside Stays in Arkansas
            </p>

            <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-white md:text-4xl">
              {site.name}
            </h3>

            <p className="mt-4 max-w-md text-base leading-7 text-white/78">
              Quiet creekside cabin rentals and a family lodge in the Ouachita
              Mountains near Glenwood and Mount Ida, Arkansas.
            </p>

            <div className="mt-7 grid gap-4 text-sm font-black">
              <Link
                href={site.phoneHref}
                className="flex items-center gap-3 text-white transition hover:text-[var(--gold)]"
              >
                <FiPhone className="text-[var(--gold)]" />
                {site.phone}
              </Link>

              <p className="flex items-start gap-3 text-white/78">
                <FiMapPin className="mt-1 shrink-0 text-[var(--gold)]" />
                {site.address.property}
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Explore
            </h4>

            <div className="mt-6 grid gap-3">
              {site.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center gap-2 text-sm font-black text-white/76 transition hover:text-white"
                >
                  <FiArrowRight className="opacity-0 transition group-hover:opacity-100" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Close To
            </h4>

            <div className="mt-6 grid gap-3 text-sm font-black text-white/76">
              <p>Caddo River</p>
              <p>Ouachita River</p>
              <p>Lake Ouachita</p>
              <p>Ouachita National Forest</p>
            </div>

          <Link
  href="/contact"
  className="mt-7 inline-flex items-center justify-center rounded-full !bg-white px-6 py-3 text-sm font-black !text-[var(--forest)] shadow-lg transition hover:-translate-y-0.5 hover:!bg-[var(--gold)] hover:!text-black"
>
  Get Directions
</Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm font-semibold text-white/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Cabin rentals in Norman, Arkansas.</p>
        </div>
      </Container>
    </footer>
  );
}