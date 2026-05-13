import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiCheck, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import CabinGallery from "@/components/cabins/CabinGallery";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return cabins.map((cabin) => ({
    slug: cabin.slug,
  }));
}

export default async function CabinPage({ params }: Props) {
  const { slug } = await params;

  const cabin = cabins.find((c) => c.slug === slug);

  if (!cabin) notFound();

  const galleryImages = cabin.images?.length
    ? cabin.images.slice(0, 16)
    : Array(8).fill(cabin.image);

  return (
    <main>
      <section className="relative -mt-20 min-h-screen overflow-hidden bg-[var(--charcoal)] pt-20 text-white">
        <Image
          src={cabin.image || "/images/cabins-hero.jpg"}
          alt={cabin.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-black/20" />

        <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Creekside Cabin
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
              {cabin.name}
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
              {cabin.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#booking"
                className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-4 text-sm font-black text-black shadow-lg transition hover:-translate-y-0.5"
              >
                Check Availability
              </Link>

              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:text-[var(--forest)]"
              >
                <FiPhone />
                Call Now
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <CabinGallery images={galleryImages} cabinName={cabin.name} />

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Cabin Details
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--forest)] md:text-5xl">
                A quiet one-bedroom cabin made for an easy stay.
              </h2>

              <p className="mt-5 text-base font-semibold leading-8 text-[var(--muted)]">
                {cabin.description}
              </p>

              <div className="mt-8 grid gap-3 rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <p className="font-black text-[var(--forest)]">
                  {cabin.details.sleeps}
                </p>
                <p className="font-black text-[var(--forest)]">
                  {cabin.details.bed}
                </p>
                <p className="font-black text-[var(--forest)]">
                  {cabin.details.bedrooms} bedroom · {cabin.details.bathrooms}{" "}
                  bath
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--background)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                What’s Included
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--forest)] md:text-5xl">
                Simple comforts without overcomplicating the stay.
              </h2>

              <p className="mt-5 text-base font-semibold leading-8 text-[var(--muted)]">
                Each cabin includes the essentials guests need for a comfortable
                creekside stay near the Caddo River and Ouachita Mountains.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cabin.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-[1.5rem] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-soft)]"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--forest)] text-white">
                    <FiCheck size={16} />
                  </span>

                  <p className="text-sm font-black text-[var(--forest)]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[60vh] overflow-hidden bg-[var(--charcoal)]">
        <Image
          src={galleryImages[1] ?? cabin.image}
          alt={`${cabin.name} creekside view`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <Container className="relative z-10 flex min-h-[60vh] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Creekside Setting
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Quiet, simple, and built to slow things down.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/86">
              Stay close to the creek, with easy access to the Caddo River and
              the Ouachita Mountains, without the noise or crowds.
            </p>
          </div>
        </Container>
      </section>

      <section id="booking" className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-8 rounded-[2.5rem] bg-[var(--forest)] p-8 text-white shadow-[var(--shadow)] md:p-12 lg:grid-cols-[1fr_0.75fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Booking
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                Check availability for {cabin.name}.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/78">
                Online booking will be added here once the OwnerRez booking
                widget is connected. For now, guests can call directly to check
                dates, ask questions, and reserve their stay.
              </p>

              <div className="mt-8 rounded-[2rem] border border-dashed border-white/20 bg-white/[0.06] p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[var(--gold)]">
                  OwnerRez Widget Space
                </p>
                <p className="mt-3 text-sm font-semibold leading-7 text-white/70">
                  This area is reserved for the live booking widget once the
                  property embed code is ready.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
              <p className="text-sm font-bold text-white/68">
                Need help choosing dates?
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-2xl font-black text-white transition hover:text-[var(--gold)]"
              >
                <FiPhone className="text-[var(--gold)]" />
                {site.phone}
              </Link>

              <div className="mt-6 grid gap-4 text-sm font-semibold leading-7 text-white/72">
                <p className="flex gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-[var(--gold)]" />
                  {site.address.property}
                </p>

                <p className="flex gap-3">
                  <FiMail className="mt-1 shrink-0 text-[var(--gold)]" />
                  Use the contact page for directions, questions, or trip
                  planning help.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black"
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