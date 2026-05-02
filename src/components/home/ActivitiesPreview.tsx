import Link from "next/link";
import {
  FiArrowRight,
  FiMap,
  FiNavigation,
  FiSun,
  FiTarget,
} from "react-icons/fi";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const activities = [
  "Caddo River",
  "Ouachita River",
  "Lake Ouachita",
  "Quartz crystal mining",
  "Ouachita National Forest",
  "Golfing and fishing",
];

export default function ActivitiesPreview() {
  return (
    <section className="section bg-[var(--cream)]">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--sand)] to-[var(--stone)] p-8 md:p-10">
            <div className="absolute right-6 top-6 hidden size-24 rounded-full border border-[var(--forest)]/10 md:block" />
            <div className="absolute bottom-8 right-12 hidden size-12 rounded-full bg-[var(--gold)]/30 md:block" />

            <p className="text-xs font-black uppercase tracking-[0.24em] text-[var(--water-dark)]">
              Nearby Adventures
            </p>

            <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight text-[var(--forest)] md:text-6xl">
              Close to rivers, trails, lakes, and quiet Arkansas views.
            </h2>

            <p className="mt-5 max-w-2xl text-base font-semibold leading-8 text-[var(--forest)]/70">
              Stay tucked away near Collier Creek while still being close to
              the best parts of Southwest Arkansas.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {activities.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/70 px-4 py-3 text-sm font-black text-[var(--forest)] shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="Location"
              title="A better base camp for Southwest Arkansas"
              text="Located between Glenwood and Mount Ida in Montgomery County, At Living Water Cabins makes it easy to explore the Ouachita Region without staying in the middle of town."
            />

            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white/75 p-5 shadow-[var(--shadow-soft)]">
                <FiNavigation className="mt-1 shrink-0 text-2xl text-[var(--gold)]" />
                <div>
                  <h3 className="text-xl font-black text-[var(--forest)]">
                    Between Glenwood and Mount Ida
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--muted)]">
                    Easy access to rivers, scenic drives, hiking, fishing, and
                    local attractions.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white/75 p-5 shadow-[var(--shadow-soft)]">
                <FiSun className="mt-1 shrink-0 text-2xl text-[var(--gold)]" />
                <div>
                  <h3 className="text-xl font-black text-[var(--forest)]">
                    Stay busy or slow way down
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--muted)]">
                    Some guests come for adventure. Others come to sit outside,
                    listen to the creek, and do a whole lot of nothing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-[1.5rem] border border-[var(--border)] bg-white/75 p-5 shadow-[var(--shadow-soft)]">
                <FiTarget className="mt-1 shrink-0 text-2xl text-[var(--gold)]" />
                <div>
                  <h3 className="text-xl font-black text-[var(--forest)]">
                    Close to the Caddo River
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-[var(--muted)]">
                    A strong fit for weekend trips, family stays, and travelers
                    exploring the Ouachita Mountains.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/local-activities"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--forest)] px-6 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[var(--charcoal)]"
            >
              View Local Activities
              <FiArrowRight />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}