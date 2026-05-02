import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiCompass,
  FiMapPin,
  FiSun,
  FiPhone,
} from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Local Activities",
  description:
    "Explore local activities near At Living Water Cabins including Caddo River, Ouachita River, Lake Ouachita, Hot Springs, crystal mines, hiking, fishing, ATV trails, and more.",
};

const activityGroups = [
  {
    direction: "North",
    title: "Mount Ida, Lake Ouachita, and the Ouachita River",
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
    title: "Hot Springs National Park",
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
    title: "River Days",
    text: "Float, canoe, or kayak the Caddo River and Ouachita River.",
    icon: FiCompass,
  },
  {
    title: "Trails & Forest",
    text: "Hike, bike, ride, and explore the Ouachita National Forest.",
    icon: FiSun,
  },
  {
    title: "Easy Day Trips",
    text: "Hot Springs, Mount Ida, Glenwood, and Murfreesboro are all within reach.",
    icon: FiMapPin,
  },
];

export default function LocalActivitiesPage() {
  return (
    <main>
      <section className="relative -mt-20 min-h-[78vh] overflow-hidden bg-[var(--charcoal)] pt-20 text-white">
        <Image
          src="/images/activities-hero.jpg"
          alt="Outdoor activities near At Living Water Cabins in Arkansas"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal)] via-transparent to-black/20" />

        <Container className="relative z-10 flex min-h-[calc(78vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Local Activities
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
              Explore Southwest Arkansas or just slow down.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
              At Living Water Cabins sits between rivers, lakes, trails, crystal
              mines, state parks, Hot Springs, and quiet places to do absolutely
              nothing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cabins"
                className="inline-flex items-center justify-center rounded-full bg-[var(--gold)] px-6 py-4 text-sm font-black text-black shadow-lg transition hover:-translate-y-0.5"
              >
                View Cabins
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
          <div className="grid gap-6 lg:grid-cols-3">
            {quickHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="grid size-12 place-items-center rounded-full bg-[var(--forest)] text-white">
                    <Icon size={20} />
                  </div>

                  <h2 className="mt-5 text-2xl font-black text-[var(--forest)]">
                    {item.title}
                  </h2>

                  <p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--background)]">
        <Container>
          <SectionHeading
            eyebrow="Around the Area"
            title="A central spot for Arkansas adventure."
            text="Head north, south, east, or west and you’ll find rivers, lakes, trails, parks, small towns, and scenic places worth exploring."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {activityGroups.map((group) => (
              <div
                key={group.direction}
                className="rounded-[2rem] border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-soft)] md:p-8"
              >
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--gold)]">
                  {group.direction} of At Living Water Cabins
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-[var(--forest)]">
                  {group.title}
                </h2>

                <p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted)]">
                  {group.text}
                </p>

                <div className="mt-6 grid gap-3">
                  {group.items.map((item) => (
                    <p
                      key={item}
                      className="flex items-start gap-3 text-sm font-black text-[var(--forest)]"
                    >
                      <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--forest)] text-xs text-white">
                        <FiArrowRight size={13} />
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative min-h-[60vh] overflow-hidden bg-[var(--charcoal)]">
        <Image
          src="/images/activities-break.jpg"
          alt="Ouachita Mountains and Arkansas outdoor activities"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <Container className="relative z-10 flex min-h-[60vh] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Stay Close to It All
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Come back to quiet after a full day out.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/86">
              Spend the day floating rivers, digging crystals, hiking trails, or
              visiting Hot Springs — then settle back in near the creek.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Helpful Resource
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--forest)] md:text-5xl">
                Want more ideas for the Ouachita Region?
              </h2>

              <p className="mt-5 text-base font-semibold leading-8 text-[var(--muted)]">
                Use the Arkansas tourism site to explore more trails, rivers,
                parks, small towns, and regional activities near your stay.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-white p-8 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-bold text-[var(--muted)]">
                Regional activity planning
              </p>

              <h3 className="mt-3 text-3xl font-black text-[var(--forest)]">
                Ouachita Region of Arkansas
              </h3>

              <p className="mt-4 text-sm font-semibold leading-7 text-[var(--muted)]">
                Add the official tourism link here once confirmed, or link this
                to a curated local activities resource page.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[var(--charcoal)]"
              >
                Ask About the Area
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--background)]">
        <Container>
          <div className="grid gap-8 rounded-[2.5rem] bg-[var(--forest)] p-8 text-white shadow-[var(--shadow)] md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Ready to Visit?
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                Pick your cabin and plan the kind of trip you want.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/78">
                Adventure-packed weekend or quiet cabin stay — either way,
                At Living Water Cabins gives you a central place to land.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
              <p className="text-sm font-bold text-white/68">
                Call for availability
              </p>

              <Link
                href={site.phoneHref}
                className="mt-3 flex items-center gap-3 text-2xl font-black text-white transition hover:text-[var(--gold)]"
              >
                <FiPhone className="text-[var(--gold)]" />
                {site.phone}
              </Link>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link
                  href="/cabins"
                  className="inline-flex justify-center rounded-full bg-white px-6 py-3 text-sm font-black text-[var(--forest)] transition hover:bg-[var(--gold)] hover:text-black"
                >
                  View Cabins
                </Link>

                <Link
                  href="/family-lodge"
                  className="inline-flex justify-center rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-black text-white transition hover:bg-white hover:text-[var(--forest)]"
                >
                  View Family Lodge
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}