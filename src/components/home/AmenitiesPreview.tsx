import Link from "next/link";
import {
  FiCoffee,
  FiTv,
  FiWind,
  FiDroplet,
  FiArrowRight,
  FiHome,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const amenities = [
  {
    title: "Fully equipped kitchens",
    text: "Microwave, coffee maker, dishes, and the basics needed to serve meals during your stay.",
    icon: FiCoffee,
  },
  {
    title: "Comfortable cabin layouts",
    text: "Each cabin includes a queen bedroom, sleeper sofa, living area, and full bathroom with shower.",
    icon: FiHome,
  },
  {
    title: "TVs and cool air",
    text: "TVs in the living room and bedroom, plus air conditioning for warmer Arkansas days.",
    icon: FiTv,
  },
  {
    title: "Creekside setting",
    text: "A quiet place to relax near Collier Creek, the Caddo River, and the Ouachita Mountains.",
    icon: FiDroplet,
  },
];

export default function AmenitiesPreview() {
  return (
    <section className="section bg-[var(--background)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Simple Comforts"
              title="Everything you need for an easy cabin stay"
              text="The cabins are built around comfort, cleanliness, and a quiet place to slow down. Nothing overcomplicated — just the essentials done right."
            />

            <Link
              href="/amenities"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--charcoal)]"
            >
              View Amenities
              <FiArrowRight />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {amenities.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-[var(--border)] bg-white/75 p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="grid size-12 place-items-center rounded-full bg-[var(--forest)] text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-[var(--forest)]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-[var(--muted)]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}