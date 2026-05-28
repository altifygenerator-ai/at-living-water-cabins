import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHome, FiUsers } from "react-icons/fi";
import Container from "@/components/ui/Container";

export default function LodgePreview() {
  return (
    <section className="section bg-[var(--background)]">
      <Container>
        <div className="grid overflow-hidden rounded-[2.25rem] bg-[var(--paper)] shadow-[var(--shadow-soft)] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[430px] lg:min-h-[640px]">
            <Image
              src="/images/family-lodge.jpg"
              alt="Family lodge at At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
            <p className="eyebrow">The Family Lodge</p>

            <h2 className="mt-5 max-w-2xl text-[clamp(2.7rem,5.3vw,5.2rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
              More room for family time.
            </h2>

            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
              The family lodge gives larger groups a comfortable place to stay
              together while still keeping the same quiet, creekside feel of the
              property.
            </p>

            <div className="mt-7 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em] text-[var(--creek-deep)]">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
                <FiUsers className="text-[var(--copper)]" />
                Family Space
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
                <FiHome className="text-[var(--copper)]" />
                Lodge Stay
              </span>
            </div>

            <Link
              href="/family-lodge"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
            >
              View the Lodge
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}