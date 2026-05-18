import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCompass,
  FiMapPin,
  FiPhone,
  FiSun,
} from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

export const metadata = {
  title: "Local Activities",
  description:
    "Explore local activities near At Living Water Cabins including Caddo River, Ouachita River, Lake Ouachita, Hot Springs, crystal mines, hiking, fishing, ATV trails, and more.",
};

const activityGroups = [
  {
    direction: "North",
    title: "Mount Ida, Lake Ouachita, and the Ouachita River",
    image: "/images/lake-ouatchita.jpg",
    text: "Head north for crystal mines, river floats, hiking, biking, lake days, fishing, and scenic trails around Mount Ida and Lake Ouachita.",
    items: [
      "Dig for crystals around Mount Ida",
      "Canoe, kayak, or tube float on the Ouachita River",
      "Hike or ride mountain bike trails",
      "Montgomery County Front Porch Stage in Mount Ida",
      "Horseback riding",
      "Fishing and water sports on Lake Ouachita",
      "Scenic walking trails",
    ],
  },
  {
    direction: "South",
    title: "Caddo River, Glenwood, and Murfreesboro",
    image: "/images/caddo-river.jpg",
    text: "Go south for Caddo River floats, golf, diamonds, Lake Greeson, ATV trails, boating, and more Southwest Arkansas adventure.",
    items: [
      "Canoe, kayak, or tube float on the Caddo River",
      "Prospect for diamonds at Crater of Diamonds State Park",
      "Golf at Glenwood Country Club",
      "Lake Greeson",
      "ATV trails",
      "Fishing, boating, and water sports",
      "Daisy State Park",
    ],
  },
  {
    direction: "East",
    title: "Bathhouse Row, Hot Springs National Park, Magic Springs",
    image: "/images/bathhouse-row.jpg",
    text: "Drive east for Hot Springs, bathhouses, family attractions, museums, antique shopping, and a full day of exploring.",
    items: [
      "Relax in Hot Springs National Park",
      "Hot bath or spa visit in Spa City",
      "Magic Springs theme park",
      "Mid-America Science Museum",
      "Arkansas Alligator Farm",
      "Antique shopping in downtown Hot Springs",
    ],
  },
  {
    direction: "West",
    title: "Little Missouri Falls, Queen Wilhelmina, and ATV Country",
    image: "/images/little-missouri.jpg",
    text: "Go west for waterfalls, hiking, state parks, local museums, and some of the best ATV and dirt bike riding in the Ouachita National Forest.",
    items: [
      "Little Missouri Falls",
      "Winding Stairs Hiking Trail",
      "Lum and Abner Store and Museum in Pine Ridge",
      "Queen Wilhelmina State Park",
      "Wolf Pen Gap Trail",
      "ATV and dirt bike riding in the Ouachita National Forest",
    ],
  },
];

const quickHighlights = [
  {
    title: "River days",
    text: "Float, canoe, or kayak the Caddo River and Ouachita River.",
    icon: FiCompass,
  },
  {
    title: "Trails & forest",
    text: "Hike, bike, ride, and explore the Ouachita National Forest.",
    icon: FiSun,
  },
  {
    title: "Easy day trips",
    text: "Hot Springs, Mount Ida, Glenwood, and Murfreesboro are all within reach.",
    icon: FiMapPin,
  },
];

export default function LocalActivitiesPage() {
  return (
    <main>
      <section className="relative -mt-20 min-h-[82vh] overflow-hidden bg-[var(--espresso)] pt-20 text-white">
        <Image
          src="/images/cabins/ScenicOverlook3.jpg"
          alt="Outdoor activities near At Living Water Cabins in Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.92),rgba(38,23,15,.62),rgba(38,23,15,.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.18),transparent,rgba(17,10,6,.86))]" />

        <div className="absolute right-8 top-32 hidden w-[38vw] max-w-xl lg:block">
          <div className="relative ml-auto h-[390px] w-[290px] rotate-3 overflow-hidden rounded-[2rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/LoveBridge.jpg"
              alt="Bridge near At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative -mt-20 h-[235px] w-[350px] -rotate-3 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/riverflowers.jpg"
              alt="Creekside flowers near the cabins"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10 flex min-h-[calc(82vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)]">
              <span className="h-px w-10 bg-[var(--copper)]" />
              Around the Area
            </p>

            <h1 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.085em] text-[var(--paper)] text-balance">
              Adventure when you want it. Quiet when you get back.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/84 md:text-xl">
              Float rivers, dig crystals, visit Hot Springs, explore the forest,
              or do absolutely nothing beside the water.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cabins"
                className="inline-flex items-center justify-center rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--copper)] hover:text-white"
              >
                View Cabins
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
          <div className="grid overflow-hidden rounded-[1.75rem] border border-[rgba(38,23,15,0.14)] bg-[rgba(255,249,239,0.95)] shadow-[var(--shadow)] backdrop-blur lg:grid-cols-3">
            {quickHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="border-b border-[rgba(38,23,15,0.1)] p-5 lg:border-b-0 lg:border-r last:lg:border-r-0"
                >
                  <Icon className="text-2xl text-[var(--copper)]" />

                  <p className="mt-4 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                    {item.title}
                  </p>

                  <p className="mt-2 text-sm font-bold leading-6 text-[var(--espresso)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--linen)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">From the Cabin</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[0.88] tracking-[-0.075em] text-[var(--espresso)] text-balance">
                Pick a direction and make a day of it.
              </h2>

              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                At Living Water Cabins gives you a quiet place to land between
                river days, lake trips, scenic drives, crystal mines, trails, and
                small-town exploring.
              </p>

              <div className="mt-8 relative min-h-[320px] overflow-hidden rounded-[1.9rem] shadow-[var(--shadow-soft)]">
                <Image
                  src="/images/cabins/LovePorch4.jpg"
                  alt="Cabin porch after a day exploring Arkansas"
                  fill
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[var(--copper)]">
                    Best Part
                  </p>
                  <p className="mt-2 text-2xl font-black leading-tight tracking-[-0.05em] text-white">
                    You get to come back to quiet.
                  </p>
                </div>
              </div>
            </div>

            <div className="divide-y divide-[var(--border)] border-y border-[var(--border)]">
              {activityGroups.map((group, index) => (
                <article
                  key={group.direction}
                  className="grid gap-7 py-12 md:grid-cols-[0.42fr_1fr]"
                >
                  <div className="relative min-h-[260px] overflow-hidden rounded-[1.75rem] shadow-[var(--shadow-soft)] md:min-h-[320px]">
                    <Image
                      src={group.image}
                      alt={group.title}
                      fill
                      className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    <p className="absolute bottom-4 left-4 rounded-full bg-[var(--paper)]/92 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[var(--espresso)] shadow-lg backdrop-blur">
                      {group.direction}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                      {group.direction} of At Living Water Cabins
                    </p>

                    <h2 className="mt-4 text-[clamp(2rem,3.3vw,3.4rem)] font-black leading-[0.94] tracking-[-0.065em] text-[var(--espresso)] text-balance">
                      {group.title}
                    </h2>

                    <p className="mt-4 max-w-2xl text-sm font-semibold leading-7 text-[var(--muted)] md:text-base md:leading-8">
                      {group.text}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--paper)] px-3 py-2 text-xs font-black uppercase tracking-[0.1em] text-[var(--espresso)]"
                        >
                          <FiArrowRight className="text-[var(--copper)]" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[640px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/River3.jpg"
          alt="River day near At Living Water Cabins"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.82),rgba(17,10,6,.4),rgba(17,10,6,.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,10,6,.68))]" />

        <Container className="relative z-10 flex min-h-[640px] items-end pb-14 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Stay Close to It All
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-black leading-[0.88] tracking-[-0.08em] text-[var(--paper)] text-balance">
              Go out for the day. Come back to the creek.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Spend the day floating rivers, digging crystals, hiking trails, or
              visiting Hot Springs — then settle back into a quieter place.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--paper)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="eyebrow">Plan Your Stay</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[0.88] tracking-[-0.075em] text-[var(--espresso)] text-balance">
                You do not have to choose between adventure and rest.
              </h2>

              <p className="mt-6 max-w-2xl text-base font-medium leading-8 text-[var(--muted)]">
                Make it a packed weekend or keep it simple. Either way, the
                cabins give you a peaceful home base close to the area’s rivers,
                trails, lakes, parks, and small towns.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/cabins"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--espresso)] px-6 py-3 text-sm font-black text-[var(--paper)] transition hover:-translate-y-0.5 hover:bg-[var(--wood)]"
                >
                  View Cabins
                  <FiArrowRight />
                </Link>

                <Link
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--border)] bg-[var(--linen)] px-6 py-3 text-sm font-black text-[var(--espresso)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  <FiPhone />
                  Call for Availability
                </Link>
              </div>
            </div>

            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/cabins/PeacePorchRiver.jpg"
                alt="Quiet porch near the creek"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/28 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                  After the Adventure
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                  The cabin is not just where you sleep. It is part of the trip.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[600px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/PeaceView3.jpg"
          alt="Cabin booking call to action"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.88),rgba(17,10,6,.58),rgba(17,10,6,.25))]" />

        <Container className="relative z-10 flex min-h-[600px] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Ready to Visit?
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.08em] text-[var(--paper)] text-balance">
              Pick your cabin and plan the kind of trip you want.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Adventure-packed weekend or quiet cabin stay — either way, At
              Living Water Cabins gives you a peaceful place to land.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cabins"
                className="inline-flex items-center justify-center rounded-full bg-[var(--paper)] px-6 py-4 text-sm font-black text-[var(--espresso)] transition hover:bg-[var(--copper)] hover:text-white"
              >
                View Cabins
              </Link>

              <Link
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-4 text-sm font-black text-white backdrop-blur transition hover:bg-white hover:text-[var(--espresso)]"
              >
                <FiPhone />
                {site.phone}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}