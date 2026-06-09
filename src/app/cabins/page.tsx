import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiHome, FiPhone, FiUsers } from "react-icons/fi";
import { cabins } from "@/data/cabins";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import CabinsHeroSlideshow from "@/components/cabins/CabinsHeroSlideshow";

export const metadata = {
  title: "Cabins",
  description:
    "View creekside cabin rentals near Glenwood and Mount Ida, Arkansas. Love, Faith, Hope, and Peace cabins are tucked along Collier Creek near the Caddo River.",
};

const standardDetails = [
  "One bedroom",
  "One full bathroom",
  "Queen bed",
  "Queen sleeper sofa",
  "Fully equipped kitchen",
  "TVs in bedroom and living room",
];

const featuredImages: Record<string, { image: string; accent: string; vibe: string }> = {
  love: {
    image: "/images/cabins/LoveScenic7.jpg",
    accent: "/images/cabins/LoveRoom2.jpg",
    vibe: "Warm, scenic, and easy to settle into.",
  },
  faith: {
    image: "/images/cabins/FaithRiverView.jpg",
    accent: "/images/cabins/FaithPorch3.jpg",
    vibe: "Porch views and that tucked-away creekside feel.",
  },
  hope: {
    image: "/images/cabins/HopeView3.jpg",
    accent: "/images/cabins/HopeLivingroom2.jpg",
    vibe: "Cozy, comfortable, and made for quiet evenings.",
  },
  peace: {
    image: "/images/cabins/PeaceView2.jpg",
    accent: "/images/cabins/PeaceBedroom.jpg",
    vibe: "Peaceful views with a simple cabin-stay rhythm.",
  },
};

export default function CabinsPage() {
  return (
    <main>
      <CabinsHeroSlideshow />

      <section className="relative z-20 -mt-12">
        <Container>
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.95)] shadow-[var(--shadow)] backdrop-blur md:grid-cols-3 lg:grid-cols-6">
            {standardDetails.map((item) => (
              <div
                key={item}
                className="border-b border-[rgba(38,23,15,0.1)] p-5 md:border-r lg:border-b-0 last:border-r-0"
              >
                <FiCheck className="text-xl text-[var(--copper)]" />

                <p className="mt-3 text-sm font-black leading-6 tracking-[-0.02em] text-[var(--espresso)]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--linen)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="eyebrow">Cabin Details</p>

              <h1 className="mt-5 text-[clamp(2.9rem,5.8vw,5.6rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--espresso)] text-balance">
  Clean, simple cabins made for a slower kind of stay.
</h1>

<div className="pt-5">
  <p className="max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
    Love, Faith, Hope, and Peace each follow a similar one-bedroom
    setup, so choosing your cabin is less about comparing a long
    list of features and more about picking the stay that feels
    right for your trip.
  </p>
</div>

              <p className="mt-4 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
                Each cabin includes the basics guests need to settle in: a queen
                bed, queen sleeper sofa, full kitchen, bathroom, TVs, air
                conditioning, and comfortable room to relax after time outside.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#book-direct"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                >
                  Book Direct
                  <FiArrowRight />
                </Link>

                <Link
                  href="#cabins"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--paper)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  View Cabins
                  <FiArrowRight />
                </Link>
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[2.15rem] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/cabins/PeacePorchRiver.jpg"
                alt="Creekside cabin porch at At Living Water Cabins"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/28 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                  Creekside Setting
                </p>

                <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                  Quiet porches, wooded views, and a peaceful place to come
                  back to after the day winds down.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[650px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/River3.jpg"
          alt="Creekside setting near At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.84),rgba(17,10,6,.42),rgba(17,10,6,.14))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,10,6,.7))]" />

        <Container className="relative z-10 flex min-h-[650px] items-end pb-14 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Creekside Setting
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--paper)] text-balance">
              Close enough to explore. Quiet enough to disappear for a while.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Stay tucked near Collier Creek with access to the Caddo River,
              Glenwood, Mount Ida, and the surrounding Ouachita scenery.
            </p>
          </div>
        </Container>
      </section>

      <section id="cabins" className="section bg-[var(--paper)]">
        <Container>
          <div className="max-w-4xl">
            <p className="eyebrow">Choose Your Cabin</p>

            <h2 className="mt-5 text-[clamp(2.8rem,5.8vw,5.4rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
              Love, Faith, Hope, and Peace each have their own feel.
            </h2>

            <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
              All four cabins share a similar layout, but the views, porch
              moments, and small details help each one feel a little different.
            </p>
          </div>

          <div className="mt-16 space-y-24">
            {cabins.map((cabin, index) => {
              const reverse = index % 2 === 1;
              const visuals =
                featuredImages[cabin.slug] ??
                featuredImages[cabin.name.toLowerCase()] ??
                {
                  image: cabin.image,
                  accent: cabin.image,
                  vibe: "A quiet, comfortable cabin stay near the water.",
                };

              return (
                <article
                  key={cabin.slug}
                  className="grid gap-10 lg:grid-cols-2 lg:items-center"
                >
                  <div className={reverse ? "lg:order-2" : ""}>
                    <div className="relative">
                      <div className="relative min-h-[500px] overflow-hidden rounded-[2.15rem] shadow-[var(--shadow-soft)] md:min-h-[640px]">
                        <Image
                          src={visuals.image}
                          alt={`${cabin.name} cabin at At Living Water Cabins`}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="absolute -bottom-8 right-5 hidden h-44 w-44 overflow-hidden rounded-[1.4rem] border-4 border-[var(--paper)] shadow-[var(--shadow)] md:block">
                        <Image
                          src={visuals.accent}
                          alt={`${cabin.name} cabin detail`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <div className={reverse ? "lg:order-1" : ""}>
                    <p className="eyebrow">Cabin Stay</p>

                    <h3 className="mt-5 text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
                      {cabin.name}
                    </h3>

                    <p className="mt-5 max-w-xl text-lg font-black leading-8 text-[var(--wood)]">
                      {visuals.vibe}
                    </p>

                    <p className="mt-4 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                      {cabin.summary}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em] text-[var(--creek-deep)]">
                      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
                        <FiUsers className="text-[var(--copper)]" />
                        {cabin.details.sleeps}
                      </span>

                      <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
                        <FiHome className="text-[var(--copper)]" />
                        {cabin.details.bed}
                      </span>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                      <Link
                        href={`/cabins/${cabin.slug}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                      >
                        View {cabin.name}
                        <FiArrowRight />
                      </Link>

                      <Link
                        href={`/cabins/${cabin.slug}#booking`}
                        className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--linen)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
                      >
                        Check Availability
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative min-h-[620px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/PeaceView1.jpg"
          alt="Cabin rates and booking at At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.9),rgba(17,10,6,.58),rgba(17,10,6,.24))]" />

        <Container className="relative z-10 flex min-h-[620px] items-center py-20">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
                Cabin Rates
              </p>

              <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black leading-[1.05] tracking-[-0.08em] text-[var(--paper)] text-balance">
                {site.cabinsInfo.rates.base} with a{" "}
                {site.cabinsInfo.rates.minimum}.
              </h2>

              <div className="mt-6 grid gap-3 text-base font-medium leading-8 text-white/78">
                <p>{site.cabinsInfo.rates.holidays}</p>
                <p>{site.cabinsInfo.rates.extraGuest}</p>
                <p>{site.cabinsInfo.rates.note}</p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-6 text-white backdrop-blur">
              <p className="text-sm font-bold text-white/64">
                Ready to check dates?
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-3xl font-black tracking-[-0.04em] text-white transition hover:text-[var(--copper)]"
              >
                <FiPhone className="text-[var(--copper)]" />
                {site.phone}
              </Link>

              <p className="mt-5 text-sm font-semibold leading-7 text-white/68">
                Check availability online, book direct, or call with questions
                before planning your stay.
              </p>

              <Link
                href="/#book-direct"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--paper)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
              >
                Book Direct
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}