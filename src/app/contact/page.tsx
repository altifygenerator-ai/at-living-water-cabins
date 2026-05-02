import Image from "next/image";
import Link from "next/link";
import { FiPhone, FiMapPin, FiMail, FiArrowRight } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Contact",
  description:
    "Contact At Living Water Cabins for directions, availability, and reservations in Norman, Arkansas.",
};

export default function ContactPage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--charcoal)] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(199,150,75,0.18),transparent_34rem)]" />

        <Container className="relative z-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
            Contact
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.06em] md:text-7xl">
            Get in touch and plan your stay.
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/82">
            Call for availability, directions, or questions about the cabins and
            your trip to the Ouachita Mountains.
          </p>
        </Container>
      </section>

      {/* CONTACT INFO */}
      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Contact Info"
                title="Reach out anytime."
                text="We’re available year-round to help with reservations, directions, and planning your stay."
              />

              <div className="mt-8 grid gap-5">
                <Link
                  href={site.phoneHref}
                  className="flex items-center gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-soft)] transition hover:-translate-y-1"
                >
                  <FiPhone className="text-2xl text-[var(--gold)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--muted)]">
                      Call
                    </p>
                    <p className="text-lg font-black text-[var(--forest)]">
                      {site.phone}
                    </p>
                  </div>
                </Link>

                <div className="flex gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-soft)]">
                  <FiMapPin className="text-2xl text-[var(--gold)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--muted)]">
                      Property Location
                    </p>
                    <p className="text-lg font-black text-[var(--forest)]">
                      {site.address.property}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-soft)]">
                  <FiMail className="text-2xl text-[var(--gold)]" />
                  <div>
                    <p className="text-sm font-semibold text-[var(--muted)]">
                      Questions
                    </p>
                    <p className="text-sm font-semibold text-[var(--forest)]">
                      Call or use the form to ask anything about your stay.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORM */}
            <div className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--gold)]">
                Send a Message
              </p>

              <form className="mt-6 grid gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-xl border border-[var(--border)] px-4 py-3"
                />

                <input
                  type="email"
                  placeholder="Email"
                  className="rounded-xl border border-[var(--border)] px-4 py-3"
                />

                <textarea
                  placeholder="Message"
                  rows={4}
                  className="rounded-xl border border-[var(--border)] px-4 py-3"
                />

                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--charcoal)]">
                  Send Message
                  <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>

      {/* IMAGE BREAK */}
      <section className="relative min-h-[60vh] overflow-hidden bg-[var(--charcoal)]">
        <Image
          src="/images/contact-creek.jpg"
          alt="Creekside view at At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <Container className="relative z-10 flex min-h-[60vh] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Getting Here
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
              Easy to find, hard to leave.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/86">
              Located between Glenwood and Mount Ida, with quick access to the
              Caddo River and Ouachita Mountains.
            </p>
          </div>
        </Container>
      </section>

      {/* MAP / DIRECTIONS */}
      <section className="section bg-[var(--background)]">
        <Container>
          <SectionHeading
            eyebrow="Directions"
            title="Find us in Norman, Arkansas."
            text="Use your preferred map app for directions or call if you need help getting here."
          />

          <div className="mt-8 rounded-[2rem] overflow-hidden border border-[var(--border)] shadow-[var(--shadow-soft)]">
            <iframe
              src="https://www.google.com/maps?q=Norman,Arkansas&output=embed"
              className="w-full h-[400px] border-0"
              loading="lazy"
            />
          </div>
        </Container>
      </section>

      {/* FINAL CTA */}
      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="rounded-[2rem] bg-[var(--forest)] p-8 text-white text-center shadow-[var(--shadow)]">
            <h2 className="text-3xl font-black md:text-4xl">
              Ready to check availability?
            </h2>

            <p className="mt-4 text-white/80">
              Give us a call and we’ll help you find the right cabin and dates.
            </p>

            <Link
              href={site.phoneHref}
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black"
            >
              {site.phone}
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}