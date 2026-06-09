import {
  FiCoffee,
  FiCompass,
  FiMapPin,
  FiMoon,
  FiSun,
  FiWifi,
} from "react-icons/fi";
import Container from "@/components/ui/Container";

const items = [
  {
    icon: FiCoffee,
    title: "Slow mornings",
    text: "Coffee, porch views, and no pressure to rush into the day.",
  },
  {
    icon: FiSun,
    title: "Scenic days",
    text: "Close to the river, outdoor beauty, and the surrounding Glenwood area.",
  },
  {
    icon: FiMoon,
    title: "Peaceful evenings",
    text: "A quieter place to come back to when the day winds down.",
  },
  {
    icon: FiWifi,
    title: "Starlink WiFi",
    text: "Stay connected when you need to, while still getting the quiet cabin feel.",
  },
  {
    icon: FiCompass,
    title: "Close to adventure",
    text: "A good home base for exploring the Caddo River, Glenwood, Mount Ida, and the Ouachitas.",
  },
  {
    icon: FiMapPin,
    title: "Easy location",
    text: "Tucked into a scenic setting without feeling far removed from everything.",
  },
];
export default function StayExperience() {
  return (
    <section className="section bg-[var(--linen)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="eyebrow">Why people love it here</p>

            <h2 className="mt-5 text-[clamp(2.7rem,5.2vw,5.1rem)] font-black leading-[1.05] tracking-[-0.075em] text-[var(--espresso)] text-balance">
              A stay with a little more personality to it.
            </h2>

            <p className="mt-6 max-w-xl text-base font-medium leading-8 text-[var(--muted)]">
              The goal is simple: comfortable cabins, scenic outdoor space, and
              a place that feels more memorable than a basic overnight stay.
            </p>
          </div>

          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.title}
                className="border-t border-[var(--border)] pt-6"
              >
                <item.icon className="text-3xl text-[var(--copper)]" />

                <h3 className="mt-5 text-2xl font-black tracking-[-0.05em] text-[var(--espresso)]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}