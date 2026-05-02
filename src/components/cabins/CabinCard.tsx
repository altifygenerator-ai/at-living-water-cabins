import Link from "next/link";
import { FiArrowRight, FiHome, FiUsers } from "react-icons/fi";

type CabinCardProps = {
  cabin: {
    slug: string;
    name: string;
    summary: string;
    details: {
      sleeps: string;
      bed: string;
    };
  };
};

export default function CabinCard({ cabin }: CabinCardProps) {
  return (
    <Link
      href={`/cabins/${cabin.slug}`}
      className="group overflow-hidden rounded-[2rem] border border-[var(--border)] bg-white shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow)]"
    >
      <div className="relative aspect-[4/3] bg-gradient-to-br from-[var(--sand)] to-[var(--stone)]">
        <div className="absolute inset-0 grid place-items-center text-xs font-black uppercase tracking-[0.2em] text-[var(--forest)]/45">
          Cabin Image
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-black text-[var(--forest)]">
          {cabin.name}
        </h3>

        <p className="mt-3 text-sm font-semibold leading-7 text-[var(--muted)]">
          {cabin.summary}
        </p>

        <div className="mt-5 grid gap-2 text-sm font-black text-[var(--forest)]/80">
          <p className="flex items-center gap-2">
            <FiUsers className="text-[var(--gold)]" />
            {cabin.details.sleeps}
          </p>

          <p className="flex items-center gap-2">
            <FiHome className="text-[var(--gold)]" />
            {cabin.details.bed}
          </p>
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm font-black text-[var(--forest)]">
          View Cabin
          <FiArrowRight className="transition group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}