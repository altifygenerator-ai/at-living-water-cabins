import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowRight, FiCheck, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import CabinGallery from "@/components/cabins/CabinGallery";
import OwnerRezCabinWidget from "@/components/cabins/OwnerRezCabinWidget";

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

const cabinVisuals: Record<
  string,
  {
    hero?: string;
    mood?: string;
    accent?: string;
    headline: string;
    vibe: string;
  }
> = {
  love: {
    hero: "/images/cabins/LoveScenic7.jpg",
    mood: "/images/cabins/LoveBridge.jpg",
    accent: "/images/cabins/LoveRoom2.jpg",
    headline: "A warm cabin stay with a scenic creekside feel.",
    vibe: "Love Cabin keeps things simple, quiet, and comfortable with the kind of setting that makes it easy to settle in.",
  },
  faith: {
    hero: "/images/cabins/FaithRiverView.jpg",
    mood: "/images/cabins/FaithPorch3.jpg",
    accent: "/images/cabins/FaithInside.jpg",
    headline: "Porch views, quiet air, and a stay close to the water.",
    vibe: "Faith Cabin is a good fit for guests who want that tucked-away feeling with scenic outdoor moments close by.",
  },
  hope: {
    hero: "/images/cabins/HopeView3.jpg",
    mood: "/images/cabins/HopeLivingroom2.jpg",
    accent: "/images/cabins/HopeView2.jpg",
    headline: "A cozy cabin made for easy days and peaceful evenings.",
    vibe: "Hope Cabin gives you a comfortable place to come back to after time outside, with a simple stay setup and quiet surroundings.",
  },
  peace: {
    hero: "/images/cabins/PeaceView2.jpg",
    mood: "/images/cabins/PeacePorchRiver.jpg",
    accent: "/images/cabins/PeaceBedroom.jpg",
    headline: "A peaceful cabin with room to slow down.",
    vibe: "Peace Cabin brings together scenic views, comfortable indoor space, and that calm creekside rhythm guests come here for.",
  },
};

export default async function CabinPage({ params }: Props) {
  const { slug } = await params;

  const cabin = cabins.find((c) => c.slug === slug);

  if (!cabin) notFound();

  const galleryImages = cabin.images?.length
    ? cabin.images.slice(0, 16)
    : Array(8).fill(cabin.image);

  const visuals = cabinVisuals[cabin.slug] ?? {
    hero: cabin.image,
    mood: galleryImages[1] ?? cabin.image,
    accent: galleryImages[2] ?? cabin.image,
    headline: "A quiet one-bedroom cabin made for an easy stay.",
    vibe: cabin.summary,
  };

  const heroImage = visuals.hero ?? cabin.image;
  const moodImage = visuals.mood ?? galleryImages[1] ?? cabin.image;
  const accentImage = visuals.accent ?? galleryImages[2] ?? cabin.image;

  return (
    <main>
      <section className="relative -mt-20 min-h-screen overflow-hidden bg-[var(--espresso)] pt-20 text-white">
        <Image
          src={heroImage}
          alt={cabin.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.92),rgba(38,23,15,.62),rgba(38,23,15,.1))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.16),transparent,rgba(17,10,6,.88))]" />

        <div className="absolute right-8 top-32 hidden w-[38vw] max-w-xl lg:block">
          <div className="relative ml-auto h-[390px] w-[290px] rotate-3 overflow-hidden rounded-[2rem] border border-white/12 shadow-2xl">
            <Image
              src={moodImage}
              alt={`${cabin.name} cabin detail`}
              fill
              className="object-cover"
            />
          </div>

          <div className="relative -mt-20 h-[235px] w-[350px] -rotate-3 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-2xl">
            <Image
              src={accentImage}
              alt={`${cabin.name} interior or view`}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10 flex min-h-[calc(100vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)]">
              <span className="h-px w-10 bg-[var(--copper)]" />
              Creekside Cabin
            </p>

            <h1 className="mt-5 text-[clamp(3.4rem,7vw,7.25rem)] font-black leading-[1.02] tracking-[-0.075em] text-[var(--paper)] text-balance">
              {cabin.name}
            </h1>

            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/84 md:mt-10 md:text-xl">
              {visuals.headline}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#booking"
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
                Call Now
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative z-20 -mt-12">
        <Container>
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.95)] shadow-[var(--shadow)] backdrop-blur md:grid-cols-3">
            <div className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Sleeps
              </p>
              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {cabin.details.sleeps}
              </p>
            </div>

            <div className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-b-0 md:border-r">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Bed
              </p>
              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {cabin.details.bed}
              </p>
            </div>

            <div className="p-5">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                Layout
              </p>
              <p className="mt-2 text-base font-black tracking-[-0.03em] text-[var(--espresso)]">
                {cabin.details.bedrooms} bedroom · {cabin.details.bathrooms} bath
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--linen)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">The Feel</p>

              <h2 className="mt-5 text-[clamp(2.8rem,5.5vw,5.4rem)] font-black leading-[1.06] tracking-[-0.07em] text-[var(--espresso)] text-balance">
                {visuals.headline}
              </h2>

              <p className="mt-8 max-w-2xl text-lg font-black leading-8 text-[var(--wood)] md:mt-10">
                {visuals.vibe}
              </p>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
                {cabin.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#gallery"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                >
                  View Photos
                  <FiArrowRight />
                </Link>

                <Link
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--paper)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <FiPhone />
                  Call for Dates
                </Link>
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[2.15rem] shadow-[var(--shadow-soft)]">
              <Image
                src={moodImage}
                alt={`${cabin.name} stay atmosphere`}
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/28 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                  Cabin Atmosphere
                </p>

                <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                  A simple, scenic cabin stay with enough comfort to settle in
                  and enough quiet to feel away from everything.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="gallery" className="section bg-[var(--paper)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">Photos</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[1.06] tracking-[-0.065em] text-[var(--espresso)] text-balance">
                Take a closer look before you book.
              </h2>
<div className="pt-5">
              <p className="mt-8 max-w-xl text-base font-medium leading-8 text-[var(--muted)] md:mt-10">
                Browse the cabin, views, porch spaces, and details so you know
                what to expect when you arrive.
              </p>
              </div>
            </div>

            <CabinGallery images={galleryImages} cabinName={cabin.name} />
          </div>
        </Container>
      </section>

      <section className="relative min-h-[650px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src={galleryImages[1] ?? cabin.image}
          alt={`${cabin.name} creekside view`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.84),rgba(17,10,6,.42),rgba(17,10,6,.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,10,6,.72))]" />

        <Container className="relative z-10 flex min-h-[650px] items-end pb-14 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Creekside Setting
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-black leading-[1.06] tracking-[-0.07em] text-[var(--paper)] text-balance">
              Quiet, simple, and built to slow things down.
            </h2>
<div className="pt-5">
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/78 md:mt-10">
              Stay close to the creek with easy access to the Caddo River,
              Glenwood, Mount Ida, and the surrounding Ouachita scenery.
            </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--linen)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="eyebrow">What’s Included</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[1.06] tracking-[-0.065em] text-[var(--espresso)] text-balance">
                Simple comforts without overcomplicating the stay.
              </h2>
<div className="pt-5">
              <p className="mt-8 max-w-xl text-base font-medium leading-8 text-[var(--muted)] md:mt-10">
                Each cabin includes the essentials guests need for a comfortable
                creekside stay near the Caddo River and Ouachita Mountains.
              </p>
              </div>
            </div>

            <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
              {cabin.features.map((feature) => (
                <p
                  key={feature}
                  className="flex gap-3 border-t border-[var(--border)] pt-4 text-sm font-bold leading-7 text-[var(--espresso)]"
                >
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--espresso)] text-white">
                    <FiCheck size={13} />
                  </span>
                  {feature}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="booking"
        className="relative min-h-[650px] overflow-hidden bg-[var(--espresso)]"
      >
        <Image
          src={heroImage}
          alt={`Book ${cabin.name}`}
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.9),rgba(17,10,6,.62),rgba(17,10,6,.22))]" />

        <Container className="relative z-10 flex min-h-[650px] items-center py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
                Booking
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black leading-[1.06] tracking-[-0.07em] text-[var(--paper)] text-balance">
                Check availability for {cabin.name}.
              </h2>
<div className="pt-5">
              <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-white/78 md:mt-10">
                Choose your dates, check availability, and book {cabin.name}{" "}
                directly through At Living Water Cabins.
              </p>
</div>
              <OwnerRezCabinWidget
                cabinName={cabin.name}
                widgetUrl={cabin.ownerRezWidgetUrl}
              />
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-6 text-white backdrop-blur">
              <p className="text-sm font-bold text-white/64">
                Need help choosing dates?
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-3xl font-black tracking-[-0.04em] text-white transition hover:text-[var(--copper)]"
              >
                <FiPhone className="text-[var(--copper)]" />
                {site.phone}
              </Link>

              <div className="mt-6 grid gap-4 text-sm font-semibold leading-7 text-white/72">
                <p className="flex gap-3">
                  <FiMapPin className="mt-1 shrink-0 text-[var(--copper)]" />
                  {site.address.property}
                </p>

                <p className="flex gap-3">
                  <FiMail className="mt-1 shrink-0 text-[var(--copper)]" />
                  Use the contact page for directions, questions, or trip
                  planning help.
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
              >
                Contact & Directions
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}