import { FiHome, FiUsers, FiCoffee, FiMap } from "react-icons/fi";
import { site } from "@/data/site";
import Container from "@/components/ui/Container";

const icons = [FiHome, FiUsers, FiCoffee, FiMap];

export default function TrustBar() {
  return (
    <section className="relative z-10 -mt-4 pb-10 md:-mt-10">
      <Container>
        <div className="card grid gap-4 p-4 md:grid-cols-4 md:p-5">
          {site.trustPoints.map((point, index) => {
            const Icon = icons[index] ?? FiHome;

            return (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl bg-white/55 p-4"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-full bg-[var(--forest)] text-[var(--cream)]">
                  <Icon size={19} />
                </div>

                <p className="text-sm font-black leading-tight text-[var(--forest)]">
                  {point}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}