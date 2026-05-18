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
    title: "Cook and settle in",
    text: "Fully equipped kitchens make it easy to bring food, cook simple meals, and enjoy the cabin without needing to leave for every bite.",
    icon: FiCoffee,
  },
  {
    title: "Comfort inside",
    text: "Heat and air, ceiling fans, satellite TV, games, and practical supplies help the cabins feel easy from the moment you arrive.",
    icon: FiHome,
  },
  {
    title: "Room outside",
    text: "Porches, grills, fire rings, picnic tables, trails, and creekside air make the outdoor space part of the stay.",
    icon: FiMap,
  },
];

export default function AmenitiesPage() {
  return (
    <main>
      <section className="relative -mt-20 min-h-[82vh] overflow-hidden bg-[var(--espresso)] pt-20 text-white">
        <Image
          src="/images/cabins/HopeLivingroom2.jpg"
          alt="Cabin amenities at At Living Water Cabins"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.92),rgba(38,23,15,.64),rgba(38,23,15,.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,10,6,.18),transparent,rgba(17,10,6,.86))]" />

        <div className="absolute right-8 top-32 hidden w-[38vw] max-w-xl lg:block">
          <div className="relative ml-auto h-[390px] w-[290px] rotate-3 overflow-hidden rounded-[2rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/LoveKitchen.jpg"
              alt="Cabin kitchen amenities"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative -mt-20 h-[235px] w-[350px] -rotate-3 overflow-hidden rounded-[1.75rem] border border-white/12 shadow-2xl">
            <Image
              src="/images/cabins/LoveFire.jpg"
              alt="Outdoor fire ring at At Living Water Cabins"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <Container className="relative z-10 flex min-h-[calc(82vh-5rem)] items-center py-20">
          <div className="max-w-4xl">
            <p className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.28em] text-[var(--copper)]">
              <span className="h-px w-10 bg-[var(--copper)]" />
              Amenities
            </p>

            <h1 className="mt-5 text-[clamp(3.2rem,7vw,7rem)] font-black leading-[0.84] tracking-[-0.085em] text-[var(--paper)] text-balance">
              Easy comforts for a slower stay.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/84 md:text-xl">
              Kitchens, porches, grills, fire rings, trails, and simple comforts
              that make it easier to show up, settle in, and enjoy your time
              near the water.
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
            {highlights.map((item) => {
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="eyebrow">Inside the Cabins</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[0.88] tracking-[-0.075em] text-[var(--espresso)] text-balance">
                Bring food. The basics are already here.
              </h2>

              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                The cabins and lodge are set up for practical, comfortable
                stays. Cook simple meals, relax inside after a day out, and keep
                the trip easy without packing every little thing.
              </p>

              <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {cabinAmenities.map((amenity) => (
                  <p
                    key={amenity}
                    className="flex gap-3 border-t border-[var(--border)] pt-4 text-sm font-bold leading-7 text-[var(--espresso)]"
                  >
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--espresso)] text-white">
                      <FiCheck size={13} />
                    </span>
                    {amenity}
                  </p>
                ))}
              </div>
            </div>

            <div className="relative min-h-[620px] overflow-hidden rounded-[2.15rem] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/cabins/LoveKitchen.jpg"
                alt="Fully equipped cabin kitchen"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/28 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                  Simple Stay Setup
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                  Kitchens, supplies, comfortable spaces, and the little basics
                  that make the cabin feel easy.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[650px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/LoveFire.jpg"
          alt="Outdoor amenities and creekside setting"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.82),rgba(17,10,6,.4),rgba(17,10,6,.12))]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(17,10,6,.7))]" />

        <Container className="relative z-10 flex min-h-[650px] items-end pb-14 md:pb-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Outside Your Door
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6.2rem)] font-black leading-[0.88] tracking-[-0.08em] text-[var(--paper)] text-balance">
              The outdoor space is part of the stay.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Porches, grills, fire rings, picnic tables, walking trails, and
              quiet room to spend more time outside.
            </p>
          </div>
        </Container>
      </section>

      <section className="section bg-[var(--paper)]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative min-h-[580px] overflow-hidden rounded-[2rem] shadow-[var(--shadow-soft)]">
              <Image
                src="/images/cabins/PeacePorchRiver.jpg"
                alt="Large porch overlooking the water"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/58 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-black/28 p-5 text-white backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[var(--copper)]">
                  Porches & Creek Air
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-white/82">
                  Sit outside, grill, walk, play, or just enjoy the quiet around
                  the property.
                </p>
              </div>
            </div>

            <div>
              <p className="eyebrow">Outdoor Amenities</p>

              <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[0.88] tracking-[-0.075em] text-[var(--espresso)] text-balance">
                Built for evenings outside and quiet mornings near the water.
              </h2>

              <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
                Whether you’re grilling, walking the trails, playing games, or
                sitting by the fire, the outdoor areas help make the cabin feel
                like more than just a place to sleep.
              </p>

              <div className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {outdoorAmenities.map((amenity) => (
                  <p
                    key={amenity}
                    className="flex gap-3 border-t border-[var(--border)] pt-4 text-sm font-bold leading-7 text-[var(--espresso)]"
                  >
                    <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--espresso)] text-white">
                      <FiCheck size={13} />
                    </span>
                    {amenity}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="relative min-h-[600px] overflow-hidden bg-[var(--espresso)]">
        <Image
          src="/images/cabins/PeaceView2.jpg"
          alt="Cabin booking call to action"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,10,6,.88),rgba(17,10,6,.58),rgba(17,10,6,.25))]" />

        <Container className="relative z-10 flex min-h-[600px] items-center py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.26em] text-[var(--copper)]">
              Ready to Stay?
            </p>

            <h2 className="mt-5 text-[clamp(3rem,6vw,6rem)] font-black leading-[0.88] tracking-[-0.08em] text-[var(--paper)] text-balance">
              Pick your cabin, pack your food, and settle in.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Call year-round for availability, reservations, and questions
              about what’s included during your stay.
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