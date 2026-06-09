import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCoffee,
  FiHome,
  FiMapPin,
  FiUsers,
  FiWifi,
} from "react-icons/fi";
import Container from "@/components/ui/Container";

const stays = [
  {
    name: "Peace Cabin",
    image: "/images/cabins/PeaceView2.jpg",
    accent: "/images/cabins/PeaceBedroom.jpg",
    eyebrow: "Featured Cabin",
    title: "A peaceful cabin with scenic views and a little extra comfort.",
    text: "Peace is ideal for guests wanting that classic quiet-cabin feel, with comfortable interior space, a queen daybed, and the added convenience of a wheelchair ramp.",
    href: "/cabins/peace",
    metaOne: "Sleeps up to 4",
    metaTwo: "Queen bed + queen daybed",
    metaThree: "Wheelchair ramp",
  },
  {
    name: "Faith Cabin",
    image: "/images/cabins/FaithRiverView.jpg",
    accent: "/images/cabins/FaithPorch3.jpg",
    eyebrow: "Creekside Feel",
    title: "Porch space, river views, and that tucked-away feeling.",
    text: "Faith brings in some of the most scenic property energy with porch moments, creekside atmosphere, and a peaceful setting close to the water.",
    href: "/cabins/faith",
    metaOne: "Sleeps up to 4",
    metaTwo: "Queen bed",
    metaThree: "Sleeper sofa",
  },
  {
    name: "Hope Cabin",
    image: "/images/cabins/HopeView3.jpg",
    accent: "/images/cabins/HopeLivingroom2.jpg",
    eyebrow: "Cozy & Comfortable",
    title: "A relaxed place to come back to after the day outside.",
    text: "Hope keeps the stay warm and easy with comfortable interior spaces, simple cabin charm, and a quiet home-base feel.",
    href: "/cabins/hope",
    metaOne: "Sleeps up to 4",
    metaTwo: "Queen bed",
    metaThree: "Sleeper sofa",
  },
  {
    name: "Love Cabin",
    image: "/images/cabins/LoveScenic7.jpg",
    accent: "/images/cabins/LoveRoom2.jpg",
    eyebrow: "Quiet & Simple",
    title: "A cozy cabin made for slowing down by the water.",
    text: "Love Cabin keeps things simple, peaceful, and comfortable with a quiet setting, easy cabin feel, and the kind of space that works well for a slower getaway.",
    href: "/cabins/love",
    metaOne: "Sleeps up to 4",
    metaTwo: "Queen bed",
    metaThree: "Sleeper sofa",
  },
];

const previewItems = [
  {
    icon: FiCoffee,
    title: "Cabin Comforts",
    text: "Full kitchens, comfortable spaces, porches, and the simple things that make a cabin stay easy.",
  },
  {
    icon: FiWifi,
    title: "Starlink WiFi",
    text: "Stay tucked away without being completely disconnected when you need to check in or stream at night.",
  },
  {
    icon: FiMapPin,
    title: "Close to the Outdoors",
    text: "Spend time near Collier Creek, the Caddo River, Glenwood, Mount Ida, and the Ouachita Mountain area.",
  },
];

function StayCard({
  stay,
  index,
}: {
  stay: (typeof stays)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;

  return (
    <article className="grid gap-10 lg:grid-cols-2 lg:items-center">
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

      <h3 className="mt-5 text-[clamp(2.4rem,4.8vw,4.6rem)] font-black leading-[1.05] tracking-[-0.07em] text-[var(--espresso)] text-balance">
  {stay.title}
</h3>

<div className="pt-5">
  <p className="max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
    {stay.text}
  </p>
</div>

        <div className="mt-7 flex flex-wrap gap-2 text-xs font-black uppercase tracking-[0.12em] text-[var(--creek-deep)]">
  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
    <FiUsers className="text-[var(--copper)]" />
    {stay.metaOne}
  </span>

  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
    <FiHome className="text-[var(--copper)]" />
    {stay.metaTwo}
  </span>

  <span className="inline-flex items-center gap-2 rounded-full bg-[var(--creek)]/18 px-3 py-2">
    <FiHome className="text-[var(--copper)]" />
    {stay.metaThree}
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
            href={`${stay.href}#booking`}
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--linen)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
          >
            Book Direct
          </Link>
        </div>
      </div>
    </article>
  );
}

function AmenitiesPreview() {
  return (
    <section className="rounded-[2.25rem] border border-[var(--border)] bg-[var(--linen)] p-6 shadow-[var(--shadow-soft)] md:p-10 lg:p-12">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="eyebrow">Amenities & Area</p>

          <h3 className="mt-5 text-[clamp(2.3rem,4.4vw,4.7rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
            Simple comforts with plenty to do nearby.
          </h3>
<div className="pt-5">
          <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
            The cabins are made for easy mornings, quiet evenings, and time
            outside. Stay close to the water, head into Glenwood, or explore the
            Ouachita Mountain area while still having a comfortable place to
            come back to.
          </p>
</div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/amenities"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
            >
              View Amenities
              <FiArrowRight />
            </Link>

            <Link
              href="/local-activities"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--paper)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              Things To Do Nearby
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          {previewItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[1.5rem] border border-[var(--border)] bg-[var(--paper)] p-5"
              >
                <div className="flex gap-4">
                  <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[var(--espresso)] text-[var(--paper)]">
                    <Icon size={20} />
                  </div>

                  <div>
                    <h4 className="text-xl font-black leading-tight tracking-[-0.05em] text-[var(--espresso)]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm font-medium leading-7 text-[var(--muted)]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function FeaturedCabins() {
  const firstStays = stays.slice(0, 2);
  const secondStays = stays.slice(2);

  return (
    <section className="section bg-[var(--paper)]">
      <Container>
        <div className="max-w-4xl">
          <p className="eyebrow">The Stays</p>

          <h2 className="mt-5 text-[clamp(2.8rem,5.8vw,5.4rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
            Four creekside cabins, each with its own feel.
          </h2>

          <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
            Choose the stay that fits your trip, from quiet porch mornings to
            easy evenings by the water.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {firstStays.map((stay, index) => (
            <StayCard key={stay.name} stay={stay} index={index} />
          ))}
        </div>

        <div className="my-24">
          <AmenitiesPreview />
        </div>

        <div className="space-y-24">
          {secondStays.map((stay, index) => (
            <StayCard
              key={stay.name}
              stay={stay}
              index={index + firstStays.length}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}