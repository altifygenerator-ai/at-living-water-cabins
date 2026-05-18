import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiHome, FiUsers } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

const stays = [
  {
    name: "Peace Cabin",
    image: "/images/cabins/PeaceView2.jpg",
    accent: "/images/cabins/PeaceBedroom.jpg",
    eyebrow: "Featured Cabin",
    title: "A peaceful cabin with scenic views and room to settle in.",
    text: "Peace is ideal for guests wanting that classic quiet-cabin feel with comfortable interior space and a strong connection to the outdoors.",
    href: "/cabins/peace",
    metaOne: "One-bedroom cabin",
    metaTwo: "Scenic views",
  },
  {
    name: "Faith Cabin",
    image: "/images/cabins/FaithRiverView.jpg",
    accent: "/images/cabins/FaithPorch3.jpg",
    eyebrow: "Creekside Feel",
    title: "Porch space, river views, and that tucked-away feeling.",
    text: "Faith brings in some of the most scenic property energy with porch moments, creekside atmosphere, and a peaceful setting close to the water.",
    href: "/cabins/faith",
    metaOne: "One-bedroom cabin",
    metaTwo: "Creekside setting",
  },
  {
    name: "Hope Cabin",
    image: "/images/cabins/HopeView3.jpg",
    accent: "/images/cabins/HopeLivingroom2.jpg",
    eyebrow: "Cozy & Comfortable",
    title: "A relaxed place to come back to after the day outside.",
    text: "Hope keeps the stay warm and easy with comfortable interior spaces, simple cabin charm, and a quiet home-base feel.",
    href: "/cabins/hope",
    metaOne: "One-bedroom cabin",
    metaTwo: "Comfortable interior",
  },
  {
    name: "Family Lodge",
    image: "/images/cabins/LoveScenic7.jpg",
    accent: "/images/cabins/LoveRoom2.jpg",
    eyebrow: "For More Room",
    title: "A lodge option for families and bigger stays.",
    text: "The family lodge gives guests more room to gather while still keeping the same peaceful, scenic feel of the property.",
    href: "/family-lodge",
    metaOne: "Family space",
    metaTwo: "Lodge stay",
  },
];

export default function FeaturedCabins() {
  return (
    <section className="section bg-[var(--paper)]">
      <Container>
        <div className="max-w-4xl">
          <p className="eyebrow">The Stays</p>

          <h2 className="mt-5 text-[clamp(2.8rem,5.8vw,5.4rem)] font-black leading-[0.88] tracking-[-0.075em] text-[var(--espresso)] text-balance">
            Not a lineup of listings. A collection of stays with their own feel.
          </h2>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
            Each cabin has its own little personality, but the feeling stays
            the same — quiet, scenic, comfortable, and close to the water.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {stays.map((stay, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={stay.name}
                className="grid gap-10 lg:grid-cols-2 lg:items-center"
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <div className="relative">
                    <div className="relative min-h-[500px] overflow-hidden rounded-[2.15rem] shadow-[var(--shadow-soft)] md:min-h-[640px]">
                      <Image
                        src={stay.image}
                        alt={stay.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="absolute -bottom-8 right-5 hidden h-44 w-44 overflow-hidden rounded-[1.4rem] border-4 border-[var(--paper)] shadow-[var(--shadow)] md:block">
                      <Image
                        src={stay.accent}
                        alt={`${stay.name} detail`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <p className="eyebrow">{stay.eyebrow}</p>

                  <h3 className="mt-5 text-[clamp(2.4rem,4.8vw,4.6rem)] font-black leading-[0.9] tracking-[-0.07em] text-[var(--espresso)] text-balance">
                    {stay.title}
                  </h3>

                  <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                    {stay.text}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em] text-[var(--creek-deep)]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
                      <FiHome className="text-[var(--copper)]" />
                      {stay.metaOne}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
                      <FiUsers className="text-[var(--copper)]" />
                      {stay.metaTwo}
                    </span>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={stay.href}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                    >
                      View {stay.name}
                      <FiArrowRight />
                    </Link>

                    <Link
                      href={site.phoneHref}
                      className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--linen)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      Call for Availability
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}