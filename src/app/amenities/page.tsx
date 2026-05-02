import Image from "next/image";
import Link from "next/link";
import {
  FiCheck,
  FiCoffee,
  FiHome,
  FiMap,
  FiPhone,
  FiTv,
  FiWind,
} from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Amenities",
  description:
    "View cabin, lodge, and outdoor amenities at At Living Water Cabins near Glenwood and Mount Ida, Arkansas.",
};

const cabinAmenities = [
  "Heat and air conditioning",
  "Central heat and air in the Family Lodge",
  "DIRECTV HD satellite TV",
  "Ceiling fans",
  "Fully equipped kitchens",
  "Microwave",
  "Coffee maker",
  "Dishes and silverware",
  "Pots and pans",
  "Toaster",
  "Dish soap, soap, and cleaning supplies",
  "Paper towels and toilet paper",
  "Large front porches overlooking the water",
  "Patio table and chairs",
  "Books, magazines, and games",
  "Iron and ironing board available",
];

const outdoorAmenities = [
  "Charcoal grill",
  "Fire rings",
  "Picnic tables",
  "Horseshoe pits with shoes provided",
  "Outdoor games",
  "Walking trails with walkway bridges",
  "Brochures for area businesses and adventures",
];

const highlights = [
  {
    title: "Fully Equipped Kitchens",
    text: "Bring the food and appetite — the cabins and lodge are set up with the basics you need to cook and serve meals.",
    icon: FiCoffee,
  },
  {
    title: "Comfortable Indoor Spaces",
    text: "Heat and air, satellite TV, ceiling fans, and simple comforts make it easy to settle in after a day outside.",
    icon: FiHome,
  },
  {
    title: "Outdoor Room to Relax",
    text: "Porches, grills, fire rings, picnic tables, and trails help keep the stay connected to the creek and mountain setting.",
    icon: FiMap,
  },
];

export default function AmenitiesPage() {
  return (
    <main>
      <section className="relative -mt-20 min-h-[78vh] overflow-hidden bg-[var(--charcoal)] pt-20 text-white">
        <Image
          src="/images/amenities-hero.jpg"
          alt="Cabin amenities at At Living Water Cabins"
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
              Amenities
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white md:text-7xl">
              The simple comforts that make a cabin stay easy.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/88">
              Fully equipped kitchens, comfortable indoor spaces, porches,
              grills, fire rings, trails, and everything you need to show up
              ready to relax.
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
            {highlights.map((item) => {
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
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Cabin & Lodge Amenities"
              title="Bring food. We’ll handle the rest."
              text="The cabins and lodge include the practical comforts guests need for a clean, easy stay in the Ouachita Mountains."
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {cabinAmenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 rounded-[1.5rem] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-soft)]"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--forest)] text-white">
                    <FiCheck size={16} />
                  </span>

                  <p className="text-sm font-black text-[var(--forest)]">
                    {amenity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[60vh] overflow-hidden bg-[var(--charcoal)]">
        <Image
          src="/images/amenities-break.jpg"
          alt="Outdoor amenities and creekside setting"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        <Container className="relative z-10 flex min-h-[60vh] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
              Outside Your Door
            </p>

            <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.05em] text-white md:text-6xl">
              Porches, trails, fire rings, and room to be outside.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/86">
              The best part of staying here is not just what’s inside. It’s the
              quiet creekside setting, fresh air, and space to slow down.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--cream)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Campsite & Outdoor Amenities
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-[var(--forest)] md:text-5xl">
                Built for evenings outside and quiet mornings near the water.
              </h2>

              <p className="mt-5 text-base font-semibold leading-8 text-[var(--muted)]">
                Whether you’re grilling, walking the trails, playing games, or
                sitting by the fire, the outdoor spaces are part of the stay.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {outdoorAmenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center gap-3 rounded-[1.5rem] border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-soft)]"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[var(--forest)] text-white">
                    <FiCheck size={16} />
                  </span>

                  <p className="text-sm font-black text-[var(--forest)]">
                    {amenity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--background)]">
        <Container>
          <div className="grid gap-8 rounded-[2.5rem] bg-[var(--forest)] p-8 text-white shadow-[var(--shadow)] md:p-12 lg:grid-cols-[1fr_0.7fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--gold)]">
                Ready to Stay?
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-white md:text-5xl">
                Pick your cabin, pack your food, and settle in.
              </h2>

              <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-white/78">
                Call year-round for availability, reservations, and questions
                about what’s included during your stay.
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